'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './HomeKpiSection.module.scss';

const DURATION_MS = 2000;

const KpiItem = ({ item, isInView }) => {
  const valueStr = String(item.value ?? '');
  const showPlus = valueStr.includes('+');
  const target = typeof item.value === 'number' ? item.value : parseInt(valueStr, 10) || 0;
  const [displayValue, setDisplayValue] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current || target <= 1) {
      if (target <= 1) {
        setDisplayValue(target);
        setIsComplete(true);
      }
      return;
    }
    hasAnimated.current = true;
    const startValue = 1;
    let startTime = null;

    const tick = (now) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const linearProgress = Math.min(elapsed / DURATION_MS, 1);
      // Ease-out: fast at start, slower as we approach the end (1 - (1-t)²)
      const progress = 1 - (1 - linearProgress) ** 2;
      const current = Math.round(startValue + (target - startValue) * progress);
      setDisplayValue(current);
      if (linearProgress >= 1) {
        setIsComplete(true);
      } else {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <div className={styles.KpiItem}>
      <p className={styles.KpiItemValue}>{displayValue}{isComplete && showPlus ? '+' : ''}</p>
      <p className={styles.KpiItemText}>{item.text}</p>
    </div>
  );
};

export default KpiItem;
