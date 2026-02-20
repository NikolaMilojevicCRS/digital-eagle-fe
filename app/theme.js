// app/theme.ts
'use client';
import { Source_Code_Pro } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const sourceCodePro = Source_Code_Pro({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
});

const theme = createTheme({
  typography: {
    fontFamily: sourceCodePro.style.fontFamily
  }
});

export default theme;
