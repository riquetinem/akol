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
  BodyPage,
  Post,
  Avatar,
  DescriptionText,
  AnotherText,
  Button,
  TextButton,
} from './styles';

import forum from '../../assets/forum.png';
import personAvatar from '../../assets/personAvatar.png';

const Forum: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Header>
        <ArrowLeft onPress={() => navigation.navigate('Community')}>
          <Icon name="arrow-left" size={35} color="#FCA311" />
        </ArrowLeft>
        <HeaderImage source={forum} />
      </Header>

      <ContentPage>
        <SpanText>Fórum: Produção de cerveja</SpanText>

        <BodyPage>
          <Post>
            <Avatar source={personAvatar} />
            <DescriptionText>
              Um local para se conectar com seus amigos, encontrar interesses
              comuns e participar de fóruns de discussão sobre as experiências
              criadas
            </DescriptionText>
          </Post>

          <Post>
            <Avatar source={personAvatar} />
            <DescriptionText>
              Um local para se conectar com seus amigos, encontrar interesses
              comuns e participar de fóruns de discussão sobre as experiências
              criadas
            </DescriptionText>
          </Post>

          <Post>
            <Avatar source={personAvatar} />
            <DescriptionText>
              Um local para se conectar com seus amigos, encontrar interesses
              comuns e participar de fóruns de discussão sobre as experiências
              criadas
            </DescriptionText>
          </Post>

          <AnotherText>
            Sobre o local: Convide a familia e venha conhecer o melhor
            restaurante mexicano da cidade!
          </AnotherText>
        </BodyPage>

        <Button>
          <TextButton>Postar</TextButton>
        </Button>
      </ContentPage>
    </ScrollView>
  );
};

export default Forum;
