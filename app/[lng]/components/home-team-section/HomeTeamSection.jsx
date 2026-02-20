'use client';

import appStyles from '@/app/[lng]/App.module.scss';
import styles from './HomeTeamSection.module.scss';
import useInView from '@/app/hooks/useInView';
import { useState, useEffect } from 'react';
import SectionHeader from '@/app/[lng]/components/section-header/SectionHeader';
import TeamMember from '@/app/[lng]/components/home-team-section/TeamMember';

const SECTION_IN_VIEW_ID = 'home-team-section';

const HomeTeamSection = props => {
  const { id, category, title, subtitle, teamMembers } = props.section;

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
    <div className={styles.HomeTeamSectionWrapper} id={id}>
      <div
        id={SECTION_IN_VIEW_ID}
        className={`${appStyles.Wrapper} ${styles.HomeTeamSection} ${hasBeenInView ? styles.InView : ''}`}
      >
        <div className={styles.Content}>
          <SectionHeader
            title={title}
            subtitle={subtitle}
            category={category}
            fontColor="primary"
            categoryClassName={styles.SectionHeaderCategoryFadeIn}
            titleClassName={styles.SectionHeaderTitleFadeIn}
            subtitleClassName={styles.SectionHeaderSubtitleFadeIn}
          />
          <div className={styles.TeamMembersContent}>
            {teamMembers?.length > 0 && (
              <div className={styles.TeamSectionMembersWrapper}>
                {teamMembers.map((item, index) => (
                  <TeamMember
                    name={item.name}
                    role={item.role}
                    photo={item.photo}
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTeamSection;
