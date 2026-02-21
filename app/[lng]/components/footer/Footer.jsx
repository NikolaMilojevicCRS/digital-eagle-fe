import styles from './Footer.module.scss';
import appStyles from '@/app/[lng]/App.module.scss';
import { getCompanyInfo, getFooter } from '@/app/api';
import { sourceCodePro } from '@/app/[lng]/layout';
import FooterContent from './FooterContent';

const Footer = async ({ lng }) => {
  const [content, companyInfo] = await Promise.all([
    getFooter(lng),
    getCompanyInfo(lng)
  ]);

  return (
    <footer className={`${sourceCodePro.className} ${styles.Footer}`}>
      <div className={appStyles.Wrapper}>
        <FooterContent content={content} companyInfo={companyInfo} />
        </div>
        <div className={styles.Divider} />
        <div className={appStyles.Wrapper}>
        <div className={styles.Info}>
          <span className={styles.InfoContent}>
            <span>&copy; {new Date().getFullYear()}</span>{' '}
            <span className={styles.CompanyLegalName}>
              {companyInfo.companyLegalName}
            </span>{' '}
            - <span>PIB: {companyInfo.pib}</span> -{' '}
            <span>MB: {companyInfo.mb}</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
