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
  Input,
  SelectImages,
  SelectedImage,
  Button,
  TextButton,
  Footer,
} from './styles';

import moscow from '../../assets/moscow.png';
import firstPhoto from '../../assets/firstPhoto.png';
import secondPhoto from '../../assets/secondPhoto.png';
import thirdPhoto from '../../assets/thirdPhoto.png';

const MoscowMule: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Header>
        <ArrowLeft onPress={() => navigation.navigate('Suggestions')}>
          <Icon name="arrow-left" size={35} color="#FCA311" />
        </ArrowLeft>
        <HeaderImage source={moscow} />
      </Header>

      <ContentPage>
        <SpanText>Moscow mule</SpanText>

        <TitleSection>Harmonização</TitleSection>
        <Harmonization>
          Seu sabor leve e refrescante é ideal para acompanhar peixes, carnes
          brancas, saladas e pratos leves e cítricos.
        </Harmonization>

        <TitleSection>Ingredientes</TitleSection>
        <Input
          numberOfLines={6}
          multiline
          height="100px"
          autoCapitalize="sentences"
          placeholder={`Espuma: 80 g de gengibre, 500ml de água, 500g de açúcar, 120ml de limão (espremido), 1 1/2 colher de emulsificador

Drink: gelo, cerveja, espuma de gengibre, 50ml de vodka, rodelas de limão e folhas frescas de hortelã para decorar`}
        />

        <TitleSection>Preparo</TitleSection>
        <Input
          numberOfLines={6}
          multiline
          height="300px"
          autoCapitalize="sentences"
          placeholder={`Espuma: Bater o gengíbre e a água no liquidificador, coar e acrescentar o açúcar o limão e o emulsificador. Bater novamente para misturar todos os ingredientes e deixar gelar.

Drink: Em uma caneca, coloque gelo e adicione a vodka. Adicione a cerveja e coloque a espuma de gengibre por cima para finalizar. Pode utilizar rodelas de limão e folhas frescas de hortelã para decorar.`}
        />

        <TitleSection>Com quem você compartilhou sua experiência?</TitleSection>
        <Input
          numberOfLines={6}
          multiline
          height="90px"
          autoCapitalize="sentences"
          placeholder={`Espuma:

Drink: gelo, cerveja, espuma de gengibre, 50ml de vodka, rodelas de limão e folhas frescas de hortelã para decorar`}
        />

        <TitleSection>Adicionar localização</TitleSection>
        <Input
          numberOfLines={6}
          multiline
          height="120px"
          autoCapitalize="sentences"
          placeholder={`Espuma:

Drink: gelo, cerveja, espuma de gengibre, 50ml de vodka, rodelas de limão e folhas frescas de hortelã para decorar`}
        />

        <TitleSection>Lembranças de sua experiência</TitleSection>

        <SelectImages>
          <SelectedImage source={firstPhoto} />
          <SelectedImage source={secondPhoto} />
          <SelectedImage source={thirdPhoto} />
          <Icon name="camera" size={50} color="#FCA311" />
        </SelectImages>

        <Button>
          <TextButton>Registrar experiência</TextButton>
        </Button>
      </ContentPage>

      <Footer>
        <Icon name="share-variant" size={50} color="#FCA311" />
        <Icon name="heart-outline" size={50} color="#FCA311" />
      </Footer>
    </ScrollView>
  );
};

export default MoscowMule;
