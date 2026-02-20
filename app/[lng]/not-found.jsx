import { headers } from 'next/headers';
import appStyles from './App.module.scss';
import { getServerTranslation } from '@/app/i18n';
import { fallbackLng, languages } from '@/app/i18n/settings';
import ButtonLink from '@/app/[lng]/components/buttons/ButtonLink';

function getLocaleFromHeaders() {
  const headersList = headers();

  // Try `referer` (from client navigation)
  const referer = headersList.get('referer');
  if (referer) {
    try {
      const url = new URL(referer);
      const firstSegment = url.pathname.split('/')[1];
      if (languages.includes(firstSegment)) return firstSegment;
    } catch (e) {
      // ignore invalid URL
    }
  }

  // Try parsing `x-forwarded-host` and `x-original-url` or fallback
  const path = headersList.get('x-original-url') || '';
  const firstSegment = path.split('/')[1];
  if (languages.includes(firstSegment)) return firstSegment;

  return fallbackLng;
}

const NotFound = async () => {
  const lng = getLocaleFromHeaders();
  const { t } = await getServerTranslation(lng);

  const button = {
    label: t('NotFound.goBack'),
    type: 'primary',
    url: '/',
    isExternalLink: false,
    lng
  };

  return (
    <main>
      <div className={appStyles.Wrapper}>
        <div className={appStyles.NotFound}>
          <div className={appStyles.Content}>
            <span className={appStyles.PageError}>404</span>
            <h1 className={appStyles.NotFoundTitle}>
              {t('NotFound.pageNotFound')}
            </h1>
            <ButtonLink data={button} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
