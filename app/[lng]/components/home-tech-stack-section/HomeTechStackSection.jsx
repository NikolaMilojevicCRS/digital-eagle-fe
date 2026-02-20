'use client';
import appStyles from '@/app/[lng]/App.module.scss';
import styles from './HomeTechStackSection.module.scss';
import useInView from '@/app/hooks/useInView';
import { useState, useEffect } from 'react';
import SectionHeader from '@/app/[lng]/components/section-header/SectionHeader';
import TechStackCategory from '@/app/[lng]/components/home-tech-stack-section/TechStackCategory';

const SECTION_IN_VIEW_ID = 'home-tech-stack-section';

const HomeTechStackSection = props => {
  const { id, category, title, subtitle, categories } = props.section;

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
    <div className={styles.HomeTechStackSectionWrapper} id={id}>
      <div
        id={SECTION_IN_VIEW_ID}
        className={`${appStyles.Wrapper} ${styles.HomeTechStackSection} ${hasBeenInView ? styles.InView : ''}`}
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
          <div className={styles.CategoriesContent}>
            {categories?.length > 0 && (
              <div className={styles.TechStackCategoriesWrapper}>
                {categories.map((item, index) => (
                  <TechStackCategory category={item} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTechStackSection;
