'use client';

import React, { PropsWithChildren } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { theme } from 'styles/theme';

export default function ThemeProvider({ children }: PropsWithChildren) {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
}
