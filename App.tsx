import * as React from 'react';
import Routes from './src/routes';
import {ApolloProvider} from '@apollo/client';
import client from './src/services/client';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </ApolloProvider>
  );
}
