import React, {useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {useQuery} from '@apollo/client';

import Card from '../../components/Card';
import Header from './../../components/Header';
import Loading from '../../components/Loading';

import {Container} from './styles';
import {GET_CHARACTERS} from '../../queries';
import {Response} from '../../models/response.model';
import {CharacterResult} from '../../models/character.model';

function Home(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);

  const {data, refetch, fetchMore, networkStatus} = useQuery<Response>(
    GET_CHARACTERS,
    {
      variables: {page: currentPage},
    },
  );

  const renderItem = ({item}: {item: CharacterResult; index: number}) => {
    return <Card character={item} />;
  };

  const renderLoader = () => {
    return <Loading currentPage={currentPage} />;
  };

  const loadMoreItem = () => {
    let page = currentPage + 1;
    setCurrentPage(page);
    fetchMore({
      variables: {page: currentPage},
    });
  };

  return (
    <ScrollView horizontal={true}>
      <View style={{flexDirection: 'column'}}>
        <Container>
          <FlatList
            data={data?.characters.results}
            renderItem={renderItem}
            ListHeaderComponent={Header}
            refreshing={networkStatus === 4}
            keyExtractor={item => `item-${item.id}`}
            onRefresh={() => refetch()}
            onEndReached={loadMoreItem}
            ListFooterComponent={renderLoader}
            onEndReachedThreshold={0.5}
          />
        </Container>
      </View>
    </ScrollView>
  );
}

export default Home;
