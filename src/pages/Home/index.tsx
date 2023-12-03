import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

import Header from './../../components/Header';

import {Container} from './styles';
import Card from '../../components/Card';

function Home(): JSX.Element {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <Header />
          <Card
            character={{
              name: 'sdfdsf',
              id: 1,
              image:
                'https://sm.ign.com/ign_br/news/r/rick-and-m/rick-and-morty-season-7-gets-rick-heavy-first-look-fall-rele_d9gq.jpg',
            }}></Card>
          <Text>Hello Home</Text>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

export default Home;
