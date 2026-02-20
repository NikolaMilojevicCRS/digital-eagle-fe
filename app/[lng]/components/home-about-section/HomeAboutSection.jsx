'use client';

import appStyles from '@/app/[lng]/App.module.scss';
import styles from './HomeAboutSection.module.scss';
import useInView from '@/app/hooks/useInView';
import { useMemo, useState, useEffect } from 'react';
import SectionHeader from '@/app/[lng]/components/section-header/SectionHeader';
import AboutSectionItem from '@/app/[lng]/components/home-about-section/AboutSectionItem';

const HomeAboutSection = props => {
  const { id, category, title, description, aboutSectionItems } = props.section;
  const { content } = props;

  console.log(content);

  const topSectionId = 'top-home-about-section';
  const bottomSectionId = 'bottom-home-about-section';
  // Shrink root so we trigger only when section is ~25% into viewport (negative = shrink)
  const topRootMargin = '-25% 0px 0px 0px'; // scroll down: trigger when top has moved 25% into view
  const bottomRootMargin = '0px 0px -25% 0px'; // scroll up: trigger when bottom has moved 25% into view
  const [isTopInView] = useInView(`#${topSectionId}`, 0.5, topRootMargin);
  const [isBottomInView] = useInView(
    `#${bottomSectionId}`,
    0.5,
    bottomRootMargin
  );

  const isInView = useMemo(() => {
    return isTopInView || isBottomInView;
  }, [isTopInView, isBottomInView]);

  const [hasBeenInView, setHasBeenInView] = useState(false);
  useEffect(() => {
    if (isInView) setHasBeenInView(true);
  }, [isInView]);

  // Split the text into paragraphs based on the double newline characters
  const paragraphs = description?.split('\n\n') || [];

  return (
    <div className={styles.HomeAboutSectionWrapper} id={id}>
      <div style={{ position: 'absolute', top: 5 }} id={topSectionId} />
      <div
        className={`${appStyles.Wrapper} ${styles.HomeAboutSection} ${hasBeenInView ? styles.InView : ''}`}
      >
        <div className={styles.Content}>
          <SectionHeader
            title={title}
            category={category}
            fontColor="primary"
            categoryClassName={styles.SectionHeaderCategoryFadeIn}
            titleClassName={styles.SectionHeaderTitleFadeIn}
          />
          <div className={styles.AboutContent}>
            {description && (
              <div className={styles.Description}>
                {paragraphs.map((para, index) => (
                  <p key={index} className={appStyles.Paragraph}>
                    {para}
                  </p>
                ))}
              </div>
            )}
            {aboutSectionItems?.length > 0 && (
              <div className={styles.AboutSectionItemsWrapper}>
                {aboutSectionItems.map((item, index) => (
                  <AboutSectionItem
                    title={item.title}
                    text={item.text}
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 5 }} id={bottomSectionId} />
    </div>
  );
};

export default HomeAboutSection;
