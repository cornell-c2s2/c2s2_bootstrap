import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the element named by the URL hash, offset by the fixed header.
// The browser can't do this on its own here: on a fresh load of e.g. /team#analog
// the target doesn't exist yet when the browser looks for it, and on a
// client-side navigation there's no native scroll at all. Team photos also load
// in after the fact and push content down, so we re-align for a short window
// (unless the visitor starts scrolling themselves).
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    const REALIGN_MS = 1500;
    const start = Date.now();

    let frame = null;
    let stopped = false;

    const stop = () => {
      stopped = true;
      if (frame) cancelAnimationFrame(frame);
    };

    const align = () => {
      if (stopped) return;

      const target = document.getElementById(id);
      if (target) {
        const header = document.getElementById("header");
        const offset = header ? header.offsetHeight : 0;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo(0, Math.max(top, 0));
      }

      if (Date.now() - start < REALIGN_MS) {
        frame = requestAnimationFrame(align);
      }
    };

    frame = requestAnimationFrame(align);

    const events = ["wheel", "touchstart", "keydown"];
    events.forEach((event) =>
      window.addEventListener(event, stop, { passive: true }),
    );

    return () => {
      stop();
      events.forEach((event) => window.removeEventListener(event, stop));
    };
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;
