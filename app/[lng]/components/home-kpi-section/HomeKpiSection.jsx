'use client';
import styles from './HomeKpiSection.module.scss';
import KpiItem from '@/app/[lng]/components/home-kpi-section/KpiItem';
import useInView from '@/app/hooks/useInView';

const SECTION_ID = 'home-kpi-section';

const HomeKpiSection = ({ kpiSection }) => {
  const items = kpiSection?.kpiItems ?? [];
  const [isInView] = useInView(`#${SECTION_ID}`, 0, '-20px 0px -20px 0px');

  return (
    <div id={SECTION_ID} className={styles.HomeKPISection}>
      {items.map((item, index) => (
        <KpiItem item={item} key={item.position ?? index} isInView={isInView} />
      ))}
    </div>
  );
};

export default HomeKpiSection;
