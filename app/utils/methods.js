import {
  DEFAULT_META_DESCRIPTION,
  DEFAULT_META_KEYWORDS
} from '@/app/utils/constants';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export const extractMetaData = (meta, environment, lng) => {
  return {
    metadataBase: new URL(environment.NEXT_PUBLIC_BASE_URL),
    title:
      `${meta?.metaData?.title ?? environment.NEXT_PUBLIC_SITE_NAME}` +
      ' | ' +
      environment.NEXT_PUBLIC_SITE_NAME,
    description: meta?.metaData?.description ?? DEFAULT_META_DESCRIPTION,
    keywords: meta?.metaData?.keywords ?? DEFAULT_META_KEYWORDS,
    openGraph: {
      title:
        `${meta?.metaData?.title ?? environment.NEXT_PUBLIC_SITE_NAME}` +
        ' | ' +
        environment.NEXT_PUBLIC_SITE_NAME,
      description: meta?.metaData?.description ?? DEFAULT_META_DESCRIPTION,
      url: `${meta?.metaData?.url ? environment.NEXT_PUBLIC_BASE_URL + '/' + lng + meta.metaData.url : environment.NEXT_PUBLIC_BASE_URL}`,
      type: 'website',
      siteName: environment.NEXT_PUBLIC_SITE_NAME,
      images: [
        {
          url: meta?.metaData?.ogImage?.asset?.url,
          secureUrl: meta?.metaData?.ogImage?.asset?.url,
          width: 1200,
          height: 630,
          alt: `Preview image for ${meta?.metaData?.title ?? environment.NEXT_PUBLIC_SITE_NAME}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: environment.NEXT_PUBLIC_SITE_NAME,
      title: meta.metaData.title,
      description: meta.metaData.description,
      images: {
        url: meta?.metaData?.ogImage?.asset?.url,
        alt: `Preview image for ${meta.metaData.title ?? environment.NEXT_PUBLIC_SITE_NAME}`
      }
    }
  };
};

export const getTranslationValue = (key, array) => {
  const found = array.find(item => item.key === key);
  return found ? found.value : ''; // or return a default value if not found
};

export const isValidDate = date => {
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    return false;
  }
  return !isNaN(date.getTime());
};

/**
 * Formats an ISO 8601 date string to "MMM D, YYYY" (e.g. Feb 19, 2026).
 * @param {string} isoDate - ISO date string (e.g. 2026-02-19T16:28:57Z)
 * @returns {string} Formatted date string or empty string if invalid
 */
export const formatISODate = isoDate => {
  if (!isoDate) return '';
  const parsed = dayjs.utc(isoDate);
  return parsed.isValid() ? parsed.format('MMM D, YYYY') : '';
};
