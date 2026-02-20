import styles from './HomeHeroSection.module.scss';
import EstText from '@/app/[lng]/components/home-hero-section/HomeHeroEstText';

const HomeTitle = ({ title, subtitle, estText }) => {
  const splitTitle = title => {
    const mid = Math.ceil(title.length / 2);
    const firstHalf = title.slice(0, mid);
    const secondHalf = title.slice(mid);
    return [firstHalf, secondHalf];
  };

  const [left, right] = splitTitle(title);

  return (
    <div className={styles.TitleWrapper}>
      <div className={styles.Title}>
        <h2>
          <span className={styles.LeftTitle}>{left}</span>
          <span className={styles.RightTitle}>{right}</span>
        </h2>
      </div>
      {estText && <EstText estText={estText} media={'mobile'} />}
      {subtitle && <h3 className={styles.Subtitle}>{subtitle}</h3>}
    </div>
  );
};

export default HomeTitle;
