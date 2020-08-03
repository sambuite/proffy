import React from "react";

import GlobalStyles from "./styles/global";
import Theme from "./styles/theme";

import Landing from "./pages/Landing";

const App: React.FC = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Landing />
    </Theme>
  );
};

export default App;
