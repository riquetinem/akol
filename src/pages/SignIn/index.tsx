import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {
  Header,
  Logo,
  AkolTitle,
  TitleAkol,
  Subtitle,
  ContentPage,
  SpanText,
  InputArea,
  LabelInput,
  Input,
  ButtonSignUp,
  ButtonFacebook,
} from './styles';

import AkolLogo from '../../assets/akol-logo.png';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flexGrow: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        contentContainerStyle={{ flex: 1 }}
      >
        <Header>
          <Logo source={AkolLogo} />

          <AkolTitle>
            <TitleAkol>Akol</TitleAkol>
            <Subtitle>ALQUIMIA</Subtitle>
          </AkolTitle>
        </Header>

        <ContentPage>
          <SpanText>Como você deseja se logar?</SpanText>

          <InputArea>
            <LabelInput>E-mail</LabelInput>
            <Input
              autoCompleteType="email"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="jhondoe@email.com"
            />
          </InputArea>

          <InputArea>
            <LabelInput>Senha</LabelInput>
            <Input secureTextEntry autoCapitalize="none" placeholder="******" />
          </InputArea>

          <ButtonSignUp onPress={() => navigation.navigate('Dashboard')}>
            Entrar
          </ButtonSignUp>

          <ButtonFacebook onPress={() => navigation.navigate('Dashboard')}>
            Entrar com facebook
          </ButtonFacebook>
        </ContentPage>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
