import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  width: ${Dimensions.get('window').width}px;
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${Dimensions.get('window').width * 0.7}px;
  height: 120px;
`;
