import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  background-color: #111;
`;
