import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import './globals.css';
import { Source_Code_Pro } from 'next/font/google';
// components
import appStyles from '@/app/[lng]/App.module.scss';
import { dir } from 'i18next';
import { StyledRoot } from '@/app/StyledRoot';
import { Providers } from '@/app/providers';
import Navbar from '@/app/[lng]/components/navbar/Navbar';
import Footer from '@/app/[lng]/components/footer/Footer';

export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Digital Eagle',
  description:
    'Custom software development, product management, and design across fintech, maritime, cybersecurity, trading, and education technology. 13+ years delivering digital products across 4 continents.',
  icons: {
    icon: {
      url: '/favicon.ico',
      type: 'type="image/x-icon"',
      sizes: '64x64'
    }
  }
};

const RootLayout = ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        // removes "Next.js Warning: Extra attributes from the server" from the console
        suppressHydrationWarning
        className={`${sourceCodePro.className} ${appStyles.Global}`}
      >
        <AppRouterCacheProvider>
          <Navbar lng={lng} />
          <StyledRoot>
            <Providers>{children}</Providers>
          </StyledRoot>
          <Footer lng={lng} />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
