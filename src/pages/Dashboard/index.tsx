import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Header,
  Avatar,
  Hello,
  ContentPage,
  SpanText,
  ButtonXp,
  TextButtonXp,
} from './styles';

import avatar from '../../assets/avatar.png';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Avatar source={avatar} />
        </TouchableOpacity>

        <Hello>Olá, John Doe!</Hello>
      </Header>

      <ContentPage>
        <SpanText>Qual o seu experimento do dia?</SpanText>

        <ButtonXp onPress={() => navigation.navigate('MoscowMule')}>
          <TextButtonXp>Nova experiência</TextButtonXp>
        </ButtonXp>

        <ButtonXp onPress={() => navigation.navigate('SharedXp')}>
          <TextButtonXp>Experiências compartilhadas</TextButtonXp>
        </ButtonXp>

        <ButtonXp onPress={() => navigation.navigate('Community')}>
          <TextButtonXp>Comunidade cervejeira</TextButtonXp>
        </ButtonXp>

        <ButtonXp onPress={() => navigation.navigate('Suggestions')}>
          <TextButtonXp>Sugestões da semana</TextButtonXp>
        </ButtonXp>

        <ButtonXp onPress={() => console.log('favoritas')}>
          <TextButtonXp>Experiências favoritas</TextButtonXp>
        </ButtonXp>
      </ContentPage>
    </>
  );
};

export default Dashboard;
