'use client';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { languages } from '@/app/i18n/settings';
import Image from 'next/image';
import RSFlag from '@/app/assets/images/rs_flag.png';
import UKFlag from '@/app/assets/images/uk_flag.png';
import NLFlag from '@/app/assets/images/nl_flag.png';
import { usePathname } from 'next/navigation';

const flagByLang = { rs: RSFlag, en: UKFlag, nl: NLFlag };

const LanguageSelector = () => {
  const pathname = usePathname(); // Get the current route path
  // Assume the language code is always the first segment
  // Split the path by '/' and get the parts after the language code
  const parts = pathname.split('/');
  const routeAfterLang = parts.slice(2).join('/'); // Join the remaining parts

  return (
    <div className={styles.LangSelector}>
      {languages.map((lang, index) => {
        return (
          <span key={index}>
            <Link href={`/${lang}/${routeAfterLang}`}>
              <Image
                src={flagByLang[lang] ?? UKFlag}
                alt={lang}
                width={24}
                height={24}
                style={{ marginRight: 8 }}
              />
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
