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
  title: 'Tronet',
  description:
    'Step through our doors and into a world of simple elegance where you can savor innovative culinary creations alongside spectacular panoramic views of The Old town of Budva, St. Nikola’s island and endless horizons.',
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
