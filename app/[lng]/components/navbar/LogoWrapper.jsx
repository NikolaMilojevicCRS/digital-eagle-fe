'use client';

import Link from 'next/link';
import { nav } from '@/app/[lng]/constants';
import styles from '@/app/[lng]/components/navbar/Navbar.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const LogoWrapper = ({ logoUrl, size, className }) => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : null
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const linkClass = className ?? styles.Logo;

  return (
    <Link href={nav.home} className={linkClass}>
      {logoUrl && (
        <Image
          src={logoUrl}
          alt="logo"
          width={size?.width ?? 0}
          height={size?.height ?? 0}
          sizes={size ? undefined : '100vw'}
          className={styles.LogoImage}
        />
      )}
    </Link>
  );
};

export default LogoWrapper;
