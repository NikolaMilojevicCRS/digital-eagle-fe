'use client';
import styles from './Navbar.module.scss';
import { useCallback, useEffect, useState, useMemo } from 'react';
import HamburgerLine from '@/app/[lng]/components/navbar/HamburgerLine';
import MobLinks from '@/app/[lng]/components/navbar/MobLinks';

const MobNavbar = props => {
  const { navLinks, email, lng } = props;
  const [open, setOpen] = useState(false);
  const TOP = 4;

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const handleClick = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  const bgColor = useMemo(() => {
    return open ? '#292929' : 'white';
  }, [open]);

  return (
    <>
      <div className={styles.MobNavbar} onClick={handleClick}>
        <HamburgerLine
          activeStyle={{
            transform: `rotate(${open ? 45 : 0}deg)`,
            top: open ? 8 : TOP,
            backgroundColor: bgColor
          }}
        />
        <HamburgerLine
          activeStyle={{
            display: `${open ? 'none' : 'block'}`,
            top: TOP,
            backgroundColor: bgColor
          }}
        />
        <HamburgerLine
          activeStyle={{
            transform: `rotate(${open ? '-45' : 0}deg)`,
            top: open ? -1 : TOP,
            backgroundColor: bgColor
          }}
        />
      </div>
      <MobLinks
        open={open}
        setOpen={setOpen}
        navLinks={navLinks}
        email={email}
        lng={lng}
      />
    </>
  );
};

export default MobNavbar;
