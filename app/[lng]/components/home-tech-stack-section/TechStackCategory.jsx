import styles from './HomeTechStackSection.module.scss';

const TechStackCategory = ({ category }) => {
  return (
    <div className={styles.Category}>
      <div className={styles.Title}>{category.name}</div>
      <div className={styles.CategoryItemsWrapper}>
        {category.techStackCategoryItems.map((item, index) => (
          <div className={styles.CategoryItem} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCategory;
