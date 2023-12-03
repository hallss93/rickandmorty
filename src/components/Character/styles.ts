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
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const Gender = styled(Title)`
  margin-top: 0px;
  font-weight: 500;
  font-size: 16px;
`;

export const Status = styled(Gender)`
  font-weight: 400;
  font-size: 16px;
`;
