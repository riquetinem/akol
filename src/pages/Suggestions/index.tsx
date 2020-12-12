import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Header,
  HeaderImage,
  ArrowLeft,
  ContentPage,
  SpanText,
  Beer,
  TitleBeer,
  ImageBeer,
  ButtonBeer,
  ButtonTextBeer,
} from './styles';

import cozumel from '../../assets/cozumel.png';
import espressoBeer from '../../assets/espresso-beer.png';
import moscowMule from '../../assets/moscow-mule.png';

import suggestions from '../../assets/suggestions.png';

const Suggestions: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Header>
        <ArrowLeft onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="arrow-left" size={35} color="#FCA311" />
        </ArrowLeft>
        <HeaderImage source={suggestions} />
      </Header>

      <ContentPage>
        <SpanText>Sugestões da semana</SpanText>

        <Beer>
          <TitleBeer>Moscow mule</TitleBeer>
          <ImageBeer source={moscowMule} />
          <ButtonBeer onPress={() => navigation.navigate('MoscowMule')}>
            <ButtonTextBeer>Ver receita</ButtonTextBeer>
          </ButtonBeer>
        </Beer>

        <Beer>
          <TitleBeer>Cozumel</TitleBeer>
          <ImageBeer source={cozumel} />
          <ButtonBeer onPress={() => navigation.navigate('MoscowMule')}>
            <ButtonTextBeer>Ver receita</ButtonTextBeer>
          </ButtonBeer>
        </Beer>

        <Beer>
          <TitleBeer>Espresso Beer</TitleBeer>
          <ImageBeer source={espressoBeer} />
          <ButtonBeer onPress={() => navigation.navigate('MoscowMule')}>
            <ButtonTextBeer>Ver receita</ButtonTextBeer>
          </ButtonBeer>
        </Beer>
      </ContentPage>
    </ScrollView>
  );
};

export default Suggestions;
