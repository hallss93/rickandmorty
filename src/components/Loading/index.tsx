import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {LoadingText} from './styles';

function Loading({currentPage}: {currentPage: number}): JSX.Element {
  return (
    <View>
      <ActivityIndicator color="#fff" />
      <LoadingText>Carregando página {currentPage}</LoadingText>
    </View>
  );
}

export default Loading;
