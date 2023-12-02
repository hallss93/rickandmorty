import React from 'react';

import {Header, Logo} from './styles';

function Home(): JSX.Element {
  return (
    <Header>
      <Logo
        source={require('../../assets/images/logo.png')}
        resizeMode="contain"
      />
    </Header>
  );
}

export default Home;
