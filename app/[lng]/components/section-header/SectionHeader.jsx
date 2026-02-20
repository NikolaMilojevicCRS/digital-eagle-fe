import styles from './SectionHeader.module.scss';

const SectionHeader = ({
  title,
  subtitle,
  category,
  fontColor,
  categoryClassName,
  titleClassName,
  subtitleClassName,
  fontClassName
}) => {
  const fontClass = [
    styles.Title,
    fontColor === 'primary' && styles.Primary,
    fontColor === 'secondary' && styles.Secondary,
    titleClassName,
    fontClassName
  ]
    .filter(Boolean)
    .join(' ');

  const subtitleClass = [
    styles.Subtitle,
    fontColor === 'primary' && styles.Primary,
    fontColor === 'secondary' && styles.Secondary,
    subtitleClassName,
    fontClassName
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.SectionHeader}>
      <p
        className={[styles.Category, categoryClassName]
          .filter(Boolean)
          .join(' ')}
      >
        {category}
      </p>
      <p className={fontClass}>{title}</p>
      {!!subtitle && <p className={subtitleClass}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
