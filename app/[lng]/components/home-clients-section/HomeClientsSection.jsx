'use client';

import appStyles from '@/app/[lng]/App.module.scss';
import styles from './HomeClientsSection.module.scss';
import useInView from '@/app/hooks/useInView';
import { useState, useEffect } from 'react';
import sectionHeaderStyles from '@/app/[lng]/components/section-header/SectionHeader.module.scss';

const SECTION_IN_VIEW_ID = 'home-clients-section';

const HomeClientsSection = props => {
  const { id, title, clients } = props.section;

  // Observe the whole section so it triggers when any part is visible (e.g. on refresh when already scrolled here)
  const [isInView] = useInView(
    `#${SECTION_IN_VIEW_ID}`,
    0.1,
    '-25% 0px -25% 0px'
  );

  const [hasBeenInView, setHasBeenInView] = useState(false);
  useEffect(() => {
    if (isInView) setHasBeenInView(true);
  }, [isInView]);

  return (
    <div className={styles.HomeClientsSectionWrapper} id={id}>
      <div
        id={SECTION_IN_VIEW_ID}
        className={`${appStyles.Wrapper} ${styles.HomeClientsSection} ${hasBeenInView ? styles.InView : ''}`}
      >
        <div className={styles.Content}>
          <p className={`${sectionHeaderStyles.Category} ${styles.Title}`}>
            {title}
          </p>
          <div className={styles.ClientsWrapper}>
            {clients.map((item, index) => (
              <div className={styles.Client} key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeClientsSection;
