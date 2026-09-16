import React, { useEffect, useRef, useState } from "react";

function LazyImage({ src, rootMargin = "200px 0px", ...props }) {
  const imageRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const image = imageRef.current;

    if (!image || shouldLoad) return undefined;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(image);
    return () => observer.disconnect();
  }, [rootMargin, shouldLoad]);

  return (
    <img
      ref={imageRef}
      src={shouldLoad ? src : undefined}
      data-src={shouldLoad ? undefined : src}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}

export default LazyImage;
