'use client';

import { useState, useEffect } from 'react';
import HomeHeroSection from '@/app/[lng]/components/home-hero-section/HomeHeroSection';
import HomeKpiSection from '@/app/[lng]/components/home-kpi-section/HomeKpiSection';

const FALLBACK_MS = 3000;

export default function HomePageContent({ heroSection, logoUrl, kpiSection }) {
  const [heroImageReady, setHeroImageReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroImageReady(true), FALLBACK_MS);
    return () => clearTimeout(t);
  }, []);

  const onHeroImageLoad = () => setHeroImageReady(true);

  return (
    <>
      <HomeHeroSection
        section={heroSection}
        logoUrl={logoUrl}
        onHeroImageLoad={onHeroImageLoad}
      />
      {heroImageReady && kpiSection?.kpiItems?.length > 0 && (
        <HomeKpiSection kpiSection={kpiSection} />
      )}
    </>
  );
}
