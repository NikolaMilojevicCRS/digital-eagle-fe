import styles from './Navbar.module.scss';
import appStyles from '../../App.module.scss';
import MobNavbar from '@/app/[lng]/components/navbar/MobNavbar';
import DesktopNavbar from '@/app/[lng]/components/navbar/DesktopNavbar';
import LanguageSelector from '@/app/[lng]/components/navbar/LanguageSelector';
import LogoWrapper from '@/app/[lng]/components/navbar/LogoWrapper';
import { getCompanyInfo, getLogo, getNavigation } from '@/app/api';
import { sourceCodePro } from '@/app/[lng]/layout';

const Navbar = async ({ lng }) => {
  const [content, companyInfo, logoUrl] = await Promise.all([
    getNavigation(lng),
    getCompanyInfo(lng),
    getLogo()
  ]);

  const navLinks = content?.navigationItems ?? [];
  const email = companyInfo?.email ?? '';

  return (
    <nav className={styles.Navbar}>
      <div
        className={`${sourceCodePro.className} ${appStyles.Wrapper} ${styles.Content}`}
      >
        <LogoWrapper logoUrl={logoUrl} />
        <div className={styles.DesktopNavbar}>
          <DesktopNavbar
            navLinks={navLinks}
            email={email}
            lng={lng}
          />
          <LanguageSelector />
        </div>
        <MobNavbar
          navLinks={navLinks}
          email={email}
          lng={lng}
        />
      </div>
    </nav>
  );
};

export default Navbar;
