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
  Harmonization,
  Images,
  ListImages,
  Image,
} from './styles';

import community from '../../assets/community.png';
import firstPerson from '../../assets/firstPerson.png';
import secondPerson from '../../assets/secondPerson.png';
import thirdPerson from '../../assets/thirdPerson.png';
import firstCommunity from '../../assets/firstCommunity.png';
import secondCommunity from '../../assets/secondCommunity.png';
import thirdCommunity from '../../assets/thirdCommunity.png';
import fourthCommunity from '../../assets/fourthCommunity.png';

const Community: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Header>
        <ArrowLeft onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="arrow-left" size={35} color="#FCA311" />
        </ArrowLeft>
        <HeaderImage source={community} />
      </Header>

      <ContentPage>
        <SpanText>Comunidade cervejeira</SpanText>

        <Harmonization>
          Um local para se conectar com seus amigos, encontrar interesses comuns
          e participar de fóruns de discussão sobre as experiências criadas.
        </Harmonization>

        <TitleSection>Seus amigos</TitleSection>
        <Images>
          <ListImages>
            <Image source={firstPerson} />
            <Image source={secondPerson} />
            <Image source={thirdPerson} />
          </ListImages>

          <Icon name="plus" color="#FCA311" size={20} />
        </Images>

        <TitleSection>Fóruns que você participa</TitleSection>
        <Images>
          <ListImages>
            <Image source={firstCommunity} />
            <Image source={secondCommunity} />
            <Image source={thirdCommunity} />
            <Image source={fourthCommunity} />
          </ListImages>

          <Icon name="plus" color="#FCA311" size={20} />
        </Images>
      </ContentPage>
    </ScrollView>
  );
};

export default Community;
