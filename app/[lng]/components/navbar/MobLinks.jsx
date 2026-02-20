'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import LanguageSelector from '@/app/[lng]/components/navbar/LanguageSelector';
import SamePageLink from '@/app/[lng]/components/navbar/SamePageLink';

const HamburgerLine = props => {
  const { open, setOpen, navLinks, email, lng } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuContent = (
    <div className={`${styles.MobLinks} ${open ? styles.Open : ''}`}>
      {navLinks.map((item, index) => {
        if (item.type === 'external') {
          return (
            <a
              key={index}
              href={item.url}
              className={styles.MobNavLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          );
        }

        if (item.type === 'internal') {
          return (
            <Link
              key={index}
              href={`/${lng}${item.url}`}
              className={styles.MobNavLink}
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          );
        }

        if (item.type === 'samePage') {
          return (
            <SamePageLink
              key={index}
              title={item.title}
              url={item.url}
              className={styles.MobNavLink}
              callback={() => setOpen(false)}
              lng={lng}
            />
          );
        }

        if (item.type === 'contact') {
          return (
            <a
              key={index}
              href={`mailto: ${email}`}
              className={styles.MobNavLink}
            >
              {item.title}
            </a>
          );
        }

        // Fallback for any unknown type
        return (
          <span key={index} className={styles.MobNavLink}>
            {item.title}
          </span>
        );
      })}
      <span className={styles.MobNavLink} onClick={() => setOpen(false)}>
        <LanguageSelector />
      </span>
    </div>
  );

  if (!mounted || typeof document === 'undefined') return null;
  return createPortal(menuContent, document.body);
};

export default HamburgerLine;
