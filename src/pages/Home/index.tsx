import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

import Header from './../../components/Header';

import {Container} from './styles';

function Home(): JSX.Element {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <Header />
          <Text>Hello Home</Text>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

export default Home;
