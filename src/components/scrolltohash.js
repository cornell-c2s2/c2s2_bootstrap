import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Bootstrap's reboot sets `:root { scroll-behavior: smooth }`, which turns every
// programmatic scroll into a visible animation: open a chip and you'd watch the
// page glide up to the top, go back and you'd watch it glide down again. Route
// changes should land instantly, so we always ask for that explicitly. Smooth
// scrolling still applies to anything the visitor triggers.
function jumpTo(top) {
  window.scrollTo({ top, left: 0, behavior: "instant" });
}

// Scroll position per history entry, keyed by the router's location key. Kept in
// memory rather than sessionStorage on purpose: a reload should be the browser's
// business, and stored positions outliving the document is how you end up
// restoring a stale scroll onto a freshly loaded page.
const scrollPositions = new Map();

// Owns scroll position for every route change.
//
// - A hash (/team#analog) scrolls to that element, offset by the fixed header.
//   The browser can't do this on its own: on a fresh load the target doesn't
//   exist yet when the browser looks for it, and on a client-side navigation
//   there's no native scroll at all. Team photos also load in after the fact and
//   push content down, so we re-align for a short window (unless the visitor
//   starts scrolling themselves).
// - Going back (browser back, or a "back to gallery" button calling navigate(-1))
//   lands where that page was left, with no visible scrolling.
// - Anything else starts at the top, with focus moved to the page heading so
//   keyboard and screen reader users start at the top too. "Anything else" means
//   a different page: filtering the chip gallery only rewrites the query string,
//   and the visitor should stay where they are.
function ScrollToHash() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const lastPathname = useRef(null);

  // Track where this history entry is scrolled to. This is a layout effect so
  // the listener is detached during the commit that navigates away, before the
  // jump below runs -- otherwise landing on the new page at the top would be
  // recorded against the page we just left.
  useLayoutEffect(() => {
    let frame = null;

    const record = () => {
      frame = null;
      scrollPositions.set(key, window.scrollY);
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(record);
    };

    // Seed it, so an entry the visitor never scrolls (they reloaded partway down
    // the gallery, then opened a chip) still has a position to come back to.
    // Only when the entry is new: coming back to a known entry, the position we
    // already hold is the one worth keeping.
    if (!scrollPositions.has(key)) record();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [key]);

  useLayoutEffect(() => {
    const samePage = lastPathname.current === pathname;
    lastPathname.current = pathname;

    if (!hash) {
      if (navigationType === "POP") {
        // Unknown key means this is a fresh document, not a back navigation
        // within the app -- leave the browser's own restoration alone.
        const saved = scrollPositions.get(key);
        if (saved !== undefined) jumpTo(saved);
        return;
      }

      // Same page, new query string: a filter or a tab, not a navigation.
      if (samePage) return;

      jumpTo(0);

      const heading = document.querySelector("main h1");
      if (heading) {
        if (!heading.hasAttribute("tabindex")) {
          heading.setAttribute("tabindex", "-1");
        }
        heading.focus({ preventScroll: true });
      }
      return;
    }

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
        jumpTo(Math.max(top, 0));
      }

      if (Date.now() - start < REALIGN_MS) {
        frame = requestAnimationFrame(align);
      }
    };

    align();
    frame = requestAnimationFrame(align);

    const events = ["wheel", "touchstart", "keydown"];
    events.forEach((event) =>
      window.addEventListener(event, stop, { passive: true }),
    );

    return () => {
      stop();
      events.forEach((event) => window.removeEventListener(event, stop));
    };
  }, [pathname, hash, key, navigationType]);

  return null;
}

export default ScrollToHash;
