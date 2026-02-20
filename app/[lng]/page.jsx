import appStyles from './App.module.scss';
import { sourceCodePro } from '@/app/[lng]/layout';
import { getHomePage } from '@/app/api/pages';
import { extractMetaData } from '@/app/utils/methods';
import { getCompanyInfo, getLogo, getPageMetaData } from '@/app/api';
import HomePageContent from '@/app/[lng]/components/home/HomePageContent';
import HomeAboutSection from '@/app/[lng]/components/home-about-section/HomeAboutSection';
import HomeClientsSection from '@/app/[lng]/components/home-clients-section/HomeClientsSection';
import ScrollToHash from '@/app/[lng]/components/scroll-to-hash/ScrollToHash';
import HomeWhatWeDoSection from '@/app/[lng]/components/home-what-we-do-section/HomeWhatWeDoSection';
import HomeTechStackSection from '@/app/[lng]/components/home-tech-stack-section/HomeTechStackSection';
import HomePortfolioSection from '@/app/[lng]/components/home-portfolio-section/HomePortfolioSection';
import HomeProposalSection from '@/app/[lng]/components/home-proposal-section/HomeProposalSection';
import HomeTeamSection from '@/app/[lng]/components/home-team-section/HomeTeamSection';
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const meta = await getPageMetaData('homePage', params.lng);
  return extractMetaData(meta, process.env, params.lng);
}

const Home = async ({ params: { lng } }) => {
  const [content, companyInfo, logoUrl] = await Promise.all([
    getHomePage(lng),
    getCompanyInfo(lng),
    getLogo()
  ]);

  const heroSection = {
    title: content.homePageHeroSection.heroSectionHeading,
    subtitle: content.homePageHeroSection.heroSectionSubheading,
    estText: content.homePageHeroSection.heroSectionEstText,
    photo: content.homePageHeroSection.hero,
    button: {
      ...content.homePageHeroSection.heroSectionButton,
      lng: lng,
      email: companyInfo.email
    }
  };

  const aboutSection = {
    id: 'about',
    category: content.homePageAboutSection.aboutSectionCategory,
    title: content.homePageAboutSection.aboutSectionHeading,
    description: content.homePageAboutSection.aboutSectionDescription,
    aboutSectionItems: content.homePageAboutSection.aboutSectionItems
  };

  const whatWeDoSection = {
    id: 'what-we-do',
    category: content.homePageWhatWeDoSection.whatWeDoSectionCategory,
    title: content.homePageWhatWeDoSection.whatWeDoSectionHeading,
    subtitle: content.homePageWhatWeDoSection.whatWeDoSectionSubHeading,
    serviceItems: content.homePageWhatWeDoSection.serviceItems
  };

  const techStackSection = {
    id: 'tech-stack',
    category: content.homeTechStackSection.techStackSectionCategory,
    title: content.homeTechStackSection.techStackSectionHeading,
    subtitle: content.homeTechStackSection.techStackSectionSubHeading,
    categories: content.homeTechStackSection.techStackCategories
  };

  const homePortfolioSection = {
    id: 'portfolio',
    category: content.homePortfolioSection.portfolioSectionCategory,
    title: content.homePortfolioSection.portfolioSectionHeading,
    subtitle: content.homePortfolioSection.portfolioSectionSubHeading,
    projects: content.homePortfolioSection.portfolioProjects
  };

  const clientsSection = {
    id: 'clients',
    title: content.homePageClientsSection.clientsSectionHeading,
    clients: content.homePageClientsSection.clients
  };

  const homePageDocumentsSection = {
    id: 'proposals',
    category: content.homePageDocumentsSection.documentsSectionCategory,
    title: content.homePageDocumentsSection.documentsSectionHeading,
    subtitle: content.homePageDocumentsSection.documentsSectionSubHeading,
    proposals: content.homePageDocumentsSection.proposals
  };

  const homePageTeamSection = {
    id: 'team',
    category: content.homePageTeamSection.teamSectionCategory,
    title: content.homePageTeamSection.teamSectionHeading,
    subtitle: content.homePageTeamSection.teamSectionSubHeading,
    teamMembers: content.homePageTeamSection.teamMembers
  };

  return (
    <>
      <ScrollToHash />
      <main className={`${sourceCodePro.className} ${appStyles.Main}`}>
        {/*Added for SEO reasons, content inside parallax component is not visible in source code*/}
        <h1 className={appStyles.SeoTitle}>{heroSection.title}</h1>
        <h2 className={appStyles.SeoTitle}>{heroSection.subtitle}</h2>
        {logoUrl && (
          <Image
            src={logoUrl}
            alt={heroSection.title}
            width={100}
            height={100}
            className={appStyles.SeoTitle}
          />
        )}
        {/*End*/}
        <HomePageContent
          heroSection={heroSection}
          logoUrl={logoUrl}
          kpiSection={content.homePageKpiSection}
        />
        <HomeAboutSection section={aboutSection} content={content} />
        <HomeWhatWeDoSection section={whatWeDoSection} />
        <HomeTechStackSection section={techStackSection} />
        <HomePortfolioSection section={homePortfolioSection} />
        <HomeClientsSection section={clientsSection} />
        <HomeProposalSection section={homePageDocumentsSection} />
        <HomeTeamSection section={homePageTeamSection} />
      </main>
    </>
  );
};

export default Home;
