import React from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import {Container, Avatar, Title, Gender, Status} from './styles';

const Character = (props: any) => {
  const {character} = props.route.params;

  return (
    <Container>
      <SharedElement id={`item.${character.id}.photo`}>
        <Avatar resizeMode="contain" source={{uri: character.image}} />
      </SharedElement>
      <Title>{character.name}</Title>
      <Gender>Gender: {character.gender}</Gender>
      <Status>Status: {character.status}</Status>
    </Container>
  );
};

export default Character;
