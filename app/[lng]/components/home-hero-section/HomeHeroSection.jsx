'use client';

import { useRef, useEffect, useState } from 'react';
import appStyles from '@/app/[lng]/App.module.scss';
import styles from './HomeHeroSection.module.scss';
import { ParallaxBanner } from 'react-scroll-parallax';
import ButtonLink from '@/app/[lng]/components/buttons/ButtonLink';
import LogoWrapper from '@/app/[lng]/components/navbar/LogoWrapper';
import EstText from '@/app/[lng]/components/home-hero-section/HomeHeroEstText';
import HomeTitle from '@/app/[lng]/components/home-hero-section/HomeHeroTitle';

const HomeHeroSection = props => {
  const { title, subtitle, estText, photo, button } = props.section;
  const { logoUrl, onHeroImageLoad } = props;
  const hasFiredLoad = useRef(false);
  const [imageLoaded, setImageLoaded] = useState(!photo?.asset?.url);

  useEffect(() => {
    if (!photo?.asset?.url) {
      setImageLoaded(true);
      return;
    }
    if (hasFiredLoad.current) return;
    const img = new Image();
    img.onload = () => {
      if (!hasFiredLoad.current) {
        hasFiredLoad.current = true;
        setImageLoaded(true);
        onHeroImageLoad?.();
      }
    };
    img.onerror = () => {
      if (!hasFiredLoad.current) {
        hasFiredLoad.current = true;
        setImageLoaded(true);
        onHeroImageLoad?.();
      }
    };
    img.src = photo.asset.url;
  }, [photo?.asset?.url, onHeroImageLoad]);

  return (
    <section className={styles.HeroSectionWrapper} aria-label="Hero">
      <div
        className={`${styles.HeroBackgroundWrap} ${imageLoaded ? styles.HeroImageLoaded : ''}`}
      >
        <ParallaxBanner
          layers={[{ image: photo.asset.url, speed: -15 }]}
          style={{ height: '100%', minHeight: '100vh', width: '100%' }}
        >
          <div className={`${appStyles.Wrapper} ${styles.HomeHeroSection}`}>
            <div className={styles.Content}>
              <div className={styles.HeroLogoAndEst}>
                {logoUrl && (
                  <div className={styles.HeroLogo}>
                    <LogoWrapper
                      logoUrl={logoUrl}
                      className={styles.HeroLogoLink}
                    />
                  </div>
                )}
                {estText && <EstText estText={estText} media={'large'} />}
              </div>
              <HomeTitle title={title} subtitle={subtitle} estText={estText} />
              {button && (
                <div className={styles.ButtonLinkWrapper}>
                  <ButtonLink data={button} />
                </div>
              )}
            </div>
          </div>
        </ParallaxBanner>
      </div>
    </section>
  );
};

export default HomeHeroSection;
