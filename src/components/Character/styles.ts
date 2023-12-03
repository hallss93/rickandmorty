import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #111;
`;

export const Avatar = styled.Image`
  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').width}px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 24px;
  margin: 16px;
`;
