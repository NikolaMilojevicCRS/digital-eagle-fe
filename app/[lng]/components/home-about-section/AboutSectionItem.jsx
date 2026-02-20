import styles from './HomeAboutSection.module.scss';

const AboutSectionItem = ({ title, text }) => {
  return (
    <div className={styles.AboutSectionItem}>
      <p className={styles.Title}>{title}</p>
      <p className={styles.Text}>{text}</p>
    </div>
  );
};

export default AboutSectionItem;
