import * as React from 'react';
import type { AppProps } from 'next/app';
import { useState } from "react"
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createEmotionCache from '../utility/createEmotionCache';
import lightThemeOptions from '../styles/theme/lightThemeOptions';
import darkThemeOptions from '../styles/theme/darkThemeOptions';
import Typography from '@mui/material/Typography';

import '../styles/globals.css';
import Sidebar from '../src/components/includes/Sidebar';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);


const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [displayMode, setDisplayMode] = useState("lightTheme")

  const modeManage = (mode: any) => {
    setDisplayMode(pre => mode)
  }
  
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={displayMode == 'darkTheme' ? darkTheme : lightTheme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Sidebar modeChange={modeManage} />

          <Component {...pageProps} />

        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
