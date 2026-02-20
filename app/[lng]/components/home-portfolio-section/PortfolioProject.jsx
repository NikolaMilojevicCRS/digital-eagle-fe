import styles from './HomePortfolioSection.module.scss';

const PortfolioProject = ({ project }) => {
  return (
    <div className={styles.Project}>
      <div className={styles.Category}>{project.category}</div>
      <h5 className={styles.Title}>{project.name}</h5>
      <p className={styles.Text}>{project.text}</p>
      <div className={styles.TechnologiesWrapper}>
        {project.technologies.map((item, index) => (
          <div className={styles.Technology} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioProject;
