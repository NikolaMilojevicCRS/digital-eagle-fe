import styles from './HomeHeroSection.module.scss';

const EstText = ({ estText, media }) => {
  const splitEstText = text => {
    if (!text) return ['', ''];
    const dashWithSpaces = text.indexOf(' - ');
    const dashLen = dashWithSpaces !== -1 ? 3 : 1;
    const dashIndex =
      dashWithSpaces !== -1 ? dashWithSpaces : text.indexOf('-');
    if (dashIndex === -1) return [text, ''];
    return [
      text.slice(0, dashIndex + dashLen),
      text.slice(dashIndex + dashLen).trim()
    ];
  };

  const [estPrimary, estSecondary] = splitEstText(estText);

  const h3ClassName = [
    styles.HeroEstText,
    media === 'large' && styles.MediaLarge,
    media === 'mobile' && styles.MediaMobile
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <h3 className={h3ClassName}>
      <span className={styles.EstTextPrimary}>{estPrimary}</span>
      {estSecondary && (
        <span className={styles.EstTextSecondary}> {estSecondary}</span>
      )}
    </h3>
  );
};

export default EstText;
