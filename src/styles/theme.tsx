import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    background: '#f0f0f7',
    primaryLighter: '#9871f5',
    primaryLight: '#916bea',
    primary: '#8257e5',
    primaryDark: '#774dd6',
    primaryDarker: '#6842c2',
    secundary: '#04d361',
    secundaryDark: '#04bf58',
    titleInPrimary: '#ffffff',
    textInPrimary: '#d4c2ff',
    textTitle: '#32264d',
    textComplement: '#9c98a6',
    textBase: '#6a6180',
    lineInWhite: '#e6e6f0',
    inputBackground: '#f8f8fc',
    buttonText: '#ffffff',
    boxBase: '#ffffff',
    boxFooter: '#fafafc',
  },
};

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
