import React from 'react';

import {HeaderContainer, Logo} from './styles';

function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <Logo
        source={require('../../assets/images/logo.png')}
        resizeMode="contain"
      />
    </HeaderContainer>
  );
}

export default Header;
