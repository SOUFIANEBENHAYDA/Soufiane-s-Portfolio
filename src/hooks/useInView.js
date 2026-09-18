import { useState, useEffect } from 'react';

/**
 * Custom hook that uses IntersectionObserver to detect when
 * an element scrolls into view.
 *
 * @param {React.RefObject} ref — the ref of the target element
 * @param {Object} options — IntersectionObserver options (threshold, rootMargin, etc.)
 * @returns {boolean} isVisible
 */
export default function useInView(ref, options = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Only trigger once
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options.threshold, options.rootMargin]);

  return isVisible;
}
