import React from 'react';
import {TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {SharedElement} from 'react-navigation-shared-element';
import {Content, Avatar, Title} from './styles';

function Card({character}: any) {
  return (
    <TouchableOpacity>
      <Animated.View>
        <Content>
          <SharedElement id={`ram.${character.id}.photo`}>
            <Avatar source={{uri: character.image}} />
          </SharedElement>
          <Title>{character.name}</Title>
        </Content>
      </Animated.View>
    </TouchableOpacity>
  );
}

export default Card;
