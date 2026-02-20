'use client';

import { useEffect } from 'react';

const ScrollToHash = () => {
  useEffect(() => {
    const scroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Wait for layout/render
    const timeout = setTimeout(scroll, 100);

    return () => clearTimeout(timeout);
  }, []);

  return null;
};

export default ScrollToHash;
