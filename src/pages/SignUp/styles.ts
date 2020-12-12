import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Header = styled.View`
  background: #14213d;
  display: flex;
  flex-direction: row;
  flex: 1;

  justify-content: center;
  align-items: center;

  max-height: 185px;
`;

export const Logo = styled.Image``;

export const AkolTitle = styled.View`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
`;

export const TitleAkol = styled.Text`
  font-family: 'Quicksand-Bold';
  color: #fff;
  font-size: 48px;
`;

export const Subtitle = styled.Text`
  font-family: 'Roboto-Bold';
  color: #fff;
  font-size: 16px;
`;

export const ContentPage = styled.View`
  flex: 1;
  flex-direction: column;

  padding: 10px;
`;

export const InputArea = styled.View``;

export const LabelInput = styled.Text`
  margin-left: 11px;
  margin-bottom: 4px;
`;

export const Input = styled.TextInput`
  background: #cdc9c3;
  height: 44px;

  margin-bottom: 12px;
  padding: 10px;
`;

export const SpanText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 23px;
  text-align: center;

  margin-top: 31px;
  margin-bottom: 44px;
`;

export const ButtonSignUp = styled(Button)`
  margin-top: 22px;
`;

export const ButtonFacebook = styled(Button)`
  margin-top: 12px;
  background: #3b5998;
`;
