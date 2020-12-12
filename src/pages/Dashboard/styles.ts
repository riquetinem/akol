import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Header = styled.View`
  background: #14213d;
  display: flex;
  flex-direction: row;
  flex: 1;

  justify-content: center;
  align-items: center;

  max-height: 150px;
`;

export const Avatar = styled.Image``;

export const Hello = styled.Text`
  font-family: 'Robot-Regular';
  color: #fff;
  font-size: 24px;
  text-align: center;

  margin-left: 40px;
`;

export const ContentPage = styled.View`
  flex: 1;
  flex-direction: column;

  padding: 10px;
`;

export const SpanText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 23px;
  text-align: center;

  margin-top: 31px;
  margin-bottom: 44px;
`;

export const ButtonXp = styled(RectButton)`
  width: 100%;
  height: 44px;
  background: #e5e5e5;
  border-radius: 5px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;

export const TextButtonXp = styled.Text`
  font-family: 'Roboto-Bold';
  color: #000;
  font-size: 20px;
`;
