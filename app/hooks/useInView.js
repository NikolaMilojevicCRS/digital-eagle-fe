import { useState, useEffect } from 'react';

const useInView = (elementSelector, threshold = 0.5, rootMargin = '0px') => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const targetElement = document.querySelector(elementSelector);

    if (!targetElement) return; // Exit early if the element isn't found

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(targetElement);

    return () => {
      observer.unobserve(targetElement);
    };
  }, [elementSelector, threshold, rootMargin]);

  return [isInView];
};

export default useInView;
