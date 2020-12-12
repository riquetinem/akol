import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Header,
  ArrowLeft,
  HeaderImage,
  ContentPage,
  SpanText,
  TitleSection,
  DescriptionText,
  AnotherText,
  Button,
  TextButton,
} from './styles';

import sharedXp from '../../assets/sharedXp.png';

const SharedXp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Header>
        <ArrowLeft onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="arrow-left" size={35} color="#FCA311" />
        </ArrowLeft>
        <HeaderImage source={sharedXp} />
      </Header>

      <ContentPage>
        <SpanText>Experiências compartilhadas</SpanText>

        <TitleSection>Descrição</TitleSection>
        <DescriptionText>
          Sua cerveja e a experiência que ela traz é muito melhor quando
          compartilhada com seus amigos!
        </DescriptionText>

        <AnotherText>
          Você também pode marcar seus amigos e onde foi a sua experiência! Além
          de identificar o motorista da rodada!!
        </AnotherText>

        <Button>
          <TextButton>Registrar experiência</TextButton>
        </Button>
      </ContentPage>
    </ScrollView>
  );
};

export default SharedXp;
