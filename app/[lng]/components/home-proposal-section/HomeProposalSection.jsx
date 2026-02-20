'use client';

import appStyles from '@/app/[lng]/App.module.scss';
import styles from './HomeProposalSection.module.scss';
import useInView from '@/app/hooks/useInView';
import { useState, useEffect } from 'react';
import SectionHeader from '@/app/[lng]/components/section-header/SectionHeader';
import Proposal from '@/app/[lng]/components/home-proposal-section/Proposal';

const SECTION_IN_VIEW_ID = 'home-proposal-section';

const HomeProposalSection = props => {
  const { id, category, title, subtitle, proposals } = props.section;

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
    <div className={styles.HomeProposalSectionWrapper} id={id}>
      <div
        id={SECTION_IN_VIEW_ID}
        className={`${appStyles.Wrapper} ${styles.HomeProposalSection} ${hasBeenInView ? styles.InView : ''}`}
      >
        <div className={styles.Content}>
          <SectionHeader
            title={title}
            subtitle={subtitle}
            category={category}
            fontColor="secondary"
            categoryClassName={styles.SectionHeaderCategoryFadeIn}
            titleClassName={styles.SectionHeaderTitleFadeIn}
            subtitleClassName={styles.SectionHeaderSubtitleFadeIn}
          />
          <div className={styles.ProjectsContent}>
            {proposals?.length > 0 && (
              <div className={styles.PortfolioProjectsWrapper}>
                {proposals.map((item, index) => (
                  <Proposal proposal={item} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProposalSection;
