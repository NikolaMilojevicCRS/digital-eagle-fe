'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';

export default function NavbarScrollWrapper({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.Navbar} ${scrolled ? styles.Scrolled : ''}`}>
      {children}
    </nav>
  );
}
