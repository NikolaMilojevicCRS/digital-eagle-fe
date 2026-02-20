'use client';

import { useRouter, usePathname } from 'next/navigation';

const SamePageLink = ({ title, url, className, callback, lng }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = e => {
    e.preventDefault();
    if (callback) callback();

    if (pathname === `/${lng}`) {
      const element = document.getElementById(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to homepage and include hash
      router.push(`/${lng}#${url}`);
    }
  };

  return (
    <a href={`/${lng}#${url}`} className={className} onClick={handleClick}>
      {title}
    </a>
  );
};

export default SamePageLink;
