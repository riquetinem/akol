import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Header,
  ArrowLeft,
  Avatar,
  Hello,
  ContentPage,
  SpanText,
  TitleSection,
  Description,
  Badges,
  BadgeList,
  Badge,
  BadgeIcon,
  TitleBadge,
} from './styles';

import avatar from '../../assets/avatar.png';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header>
        <ArrowLeft onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="arrow-left" size={35} color="#FCA311" />
        </ArrowLeft>

        <Avatar source={avatar} />

        <Hello>John Doe, 30 anos</Hello>
      </Header>

      <ContentPage>
        <SpanText>“O que seria a vida sem cerveja?”</SpanText>

        <TitleSection>Descrição</TitleSection>
        <Description>
          Adoro experimentar coisas novas, ainda mais quando envolve cerveja!
          Também não consigo recusar aquela cerveja gelada no fim do expediente.
        </Description>

        <TitleSection>Descrição</TitleSection>
        <Badges>
          <BadgeList>
            <Badge opacity={1}>
              <BadgeIcon>
                <Icon name="numeric-1-circle" color="#FCA311" size={33} />
              </BadgeIcon>
              <TitleBadge>Primeira experiência</TitleBadge>
            </Badge>

            <Badge opacity={0.5}>
              <BadgeIcon>
                <Icon name="crown" color="#FCA311" size={33} />
              </BadgeIcon>
              <TitleBadge>Rei do happy hour</TitleBadge>
            </Badge>

            <Badge opacity={0.5}>
              <BadgeIcon>
                <Icon name="bowl-mix" color="#FCA311" size={33} />
              </BadgeIcon>
              <TitleBadge>Alquimista</TitleBadge>
            </Badge>
          </BadgeList>

          <TouchableOpacity>
            <Icon name="plus" color="#FCA311" size={33} />
          </TouchableOpacity>
        </Badges>
      </ContentPage>
    </>
  );
};

export default Dashboard;
