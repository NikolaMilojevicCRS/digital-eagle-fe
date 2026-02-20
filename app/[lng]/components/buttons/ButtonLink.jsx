'use client';
import styles from './Button.module.scss';
import { useMemo } from 'react';

const ButtonLink = props => {
  const { label, variant, type, url, email, lng } = props.data;

  const onClickHandler = e => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(url);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const buttonClass = useMemo(() => {
    switch (variant) {
      case 'contained':
        return styles.Contained;
      case 'outlined':
        return styles.Outlined;
      default:
        return styles.Primary;
    }
  }, [variant]);

  const renderedButton = useMemo(() => {
    if (type === 'external') {
      return (
        <a href={url} className={`${styles.Button} ${buttonClass}`}>
          {label}
        </a>
      );
    }

    if (type === 'internal') {
      return (
        <a href={`/${lng}${url}`} className={`${styles.Button} ${buttonClass}`}>
          {label}
        </a>
      );
    }

    if (type === 'samePage') {
      return (
        <span
          className={`${styles.Button} ${buttonClass}`}
          onClick={onClickHandler}
        >
          {label}
        </span>
      );
    }

    if (type === 'contact') {
      return (
        <a
          href={`mailto: ${email}`}
          className={`${styles.Button} ${buttonClass}`}
        >
          {label}
        </a>
      );
    }

    // Fallback for any unknown type
    return (
      <span key={index} className={`${styles.Button} ${buttonClass}`}>
        {label}
      </span>
    );
  }, [label, type, url, buttonClass, email, lng]);

  return (
    <>
      {renderedButton}
      {/*{isExternalLink ? (*/}
      {/*  <a*/}
      {/*    href={url}*/}
      {/*    className={`${styles.Button} ${type === 'contained' ? styles.Contained : type === 'outlined' ? styles.Outlined : styles.Primary}`}*/}
      {/*  >*/}
      {/*    {label}*/}
      {/*  </a>*/}
      {/*) : isLinkSectionId ? (*/}
      {/*  <span*/}
      {/*    className={`${styles.Button} ${type === 'contained' ? styles.Contained : type === 'outlined' ? styles.Outlined : styles.Primary}`}*/}
      {/*    onClick={onClickHandler}*/}
      {/*  >*/}
      {/*    {label}*/}
      {/*  </span>*/}
      {/*) : (*/}
      {/*  <a*/}
      {/*    href={`/${lng}${url}`}*/}
      {/*    className={`${styles.Button} ${type === 'contained' ? styles.Contained : type === 'outlined' ? styles.Outlined : styles.Primary}`}*/}
      {/*  >*/}
      {/*    {label}*/}
      {/*  </a>*/}
      {/*)}*/}
    </>
  );
};

export default ButtonLink;
