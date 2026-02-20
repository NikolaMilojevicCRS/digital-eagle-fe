import styles from './HomeWhatWeDoSection.module.scss';
import Image from 'next/image';

const ServiceItem = ({ title, text, icon }) => {
  return (
    <div className={styles.ServiceItem}>
      {icon && (
        <Image
          src={icon.asset?.url}
          width={48}
          height={48}
          alt="service-icon"
          className={styles.ServiceIcon}
        />
      )}
      <p className={styles.Title}>{title}</p>
      <p className={styles.Text}>{text}</p>
    </div>
  );
};

export default ServiceItem;
