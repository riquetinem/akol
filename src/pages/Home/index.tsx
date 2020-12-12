import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  Header,
  Logo,
  AkolTitle,
  TitleAkol,
  Subtitle,
  ContentPage,
  SpanText,
  RectText,
} from './styles';
import Button from '../../components/Button';

import AkolLogo from '../../assets/akol-logo.png';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header>
        <Logo source={AkolLogo} />

        <AkolTitle>
          <TitleAkol>Akol</TitleAkol>
          <Subtitle>ALQUIMIA</Subtitle>
        </AkolTitle>
      </Header>

      <ContentPage>
        <SpanText>O universo da experiência cervejeira</SpanText>

        <Button onPress={() => navigation.navigate('SignIn')}>
          Cadastre-se
        </Button>

        <RectText onPress={() => navigation.navigate('SignIn')}>
          <SpanText>Já tem uma conta?</SpanText>
        </RectText>
      </ContentPage>
    </>
  );
};

export default Home;
