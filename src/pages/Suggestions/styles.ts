import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
`;

export const HeaderImage = styled.Image`
  width: 100%;
`;

export const ArrowLeft = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
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

  margin-top: 32px;
  margin-bottom: 20px;
`;

export const Beer = styled.View`
  padding: 10px;
  margin-bottom: 22px;

  position: relative;
`;

export const TitleBeer = styled.Text`
  margin-bottom: 10px;
  font-family: 'Roboto-Bold';
  font-size: 16px;
`;

export const ImageBeer = styled.Image`
  width: 100%;
`;

export const ButtonBeer = styled(RectButton)`
  background: #fca311;
  border-radius: 7px;
  width: 126px;
  height: 29px;

  justify-content: center;
  align-items: center;

  position: absolute;

  bottom: 30px;
  right: 30px;
`;

export const ButtonTextBeer = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;
`;
