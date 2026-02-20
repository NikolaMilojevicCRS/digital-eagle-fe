import styles from './Navbar.module.scss';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const SamePageLink = dynamic(() => import('./SamePageLink'), { ssr: false });

const DesktopNavbar = props => {
  const { navLinks, email, lng } = props;

  return (
    <div className={styles.DesktopNavbar}>
      {navLinks.map((item, index) => {
        if (item.type === 'external') {
          return (
            <a
              key={index}
              href={item.url}
              className={styles.NavLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          );
        }

        if (item.type === 'internal') {
          return (
            <Link
              key={index}
              href={`/${lng}${item.url}`}
              className={styles.NavLink}
            >
              {item.title}
            </Link>
          );
        }

        if (item.type === 'samePage') {
          return (
            <SamePageLink
              key={index}
              title={item.title}
              url={item.url}
              className={styles.NavLink}
              lng={lng}
            />
          );
        }

        if (item.type === 'contact') {
          return (
            <a
              key={index}
              href={`mailto: ${email}`}
              className={`${styles.NavLink} ${styles.ContactLink}`}
            >
              {item.title}
            </a>
          );
        }

        // Fallback for any unknown type
        return (
          <span key={index} className={styles.NavLink}>
            {item.title}
          </span>
        );
      })}
    </div>
  );
};

export default DesktopNavbar;
