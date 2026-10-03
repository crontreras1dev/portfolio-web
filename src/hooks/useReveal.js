import { useEffect, useRef, useState } from "react";

export const useReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    () => typeof window === "undefined" || !("IntersectionObserver" in window)
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold });

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible, threshold]);

  return [ref, visible];
};
