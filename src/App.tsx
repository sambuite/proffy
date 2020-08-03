import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Theme from './styles/theme';

import Routes from './routes';

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </Theme>
  );
};

export default App;
