import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignUp></SignUp>
    <GlobalStyle />
  </>
);

export default App;
