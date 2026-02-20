'use client';

import appStyles from '@/app/[lng]/App.module.scss';
import styles from './Footer.module.scss';
import useInView from '@/app/hooks/useInView';
import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';

const topSectionId = 'top-footer-content';
const bottomSectionId = 'bottom-footer-content';
const topRootMargin = '-25% 0px 0px 0px';
const bottomRootMargin = '0px 0px -25% 0px';

const FooterContent = ({ content, companyInfo }) => {
  const [isTopInView] = useInView(`#${topSectionId}`, 0.5, topRootMargin);
  const [isBottomInView] = useInView(
    `#${bottomSectionId}`,
    0.5,
    bottomRootMargin
  );

  const isInView = useMemo(
    () => isTopInView || isBottomInView,
    [isTopInView, isBottomInView]
  );

  const [hasBeenInView, setHasBeenInView] = useState(false);
  useEffect(() => {
    if (isInView) setHasBeenInView(true);
  }, [isInView]);

  return (
    <div className={styles.FooterContentWrapper}>
      <div
        style={{ position: 'absolute', top: 5 }}
        id={topSectionId}
        aria-hidden="true"
      />
      <div
        className={`${appStyles.Wrapper} ${styles.Content} ${hasBeenInView ? styles.InView : ''}`}
      >
        <h4 className={styles.FooterHeading}>{content.footerHeading}</h4>
        <h4 className={styles.FooterText}>{content.text}</h4>
        <a href={`mailto:${companyInfo.email}`} className={styles.Email}>
          {companyInfo.email}
        </a>
        <h4 className={styles.FooterAddress}>{companyInfo.address}</h4>
        <div className={styles.SocialLinksWrapper}>
          {companyInfo.socialLinks.map((link, index) => (
            <a href={link.url} key={index} className={styles.SocialLink}>
              <Image
                src={link.icon.asset.url}
                alt={link.socialNetwork}
                width={32}
                height={32}
                className={styles.SegmentIcon}
              />
            </a>
          ))}
        </div>
      </div>
      <div
        style={{ position: 'absolute', bottom: 5 }}
        id={bottomSectionId}
        aria-hidden="true"
      />
    </div>
  );
};

export default FooterContent;
