import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface InputProps {
  height: string;
}

export const Header = styled.View`
  width: 100%;
`;

export const ArrowLeft = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
`;

export const HeaderImage = styled.Image`
  width: 100%;
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
  margin-bottom: 44px;
`;

export const TitleSection = styled.Text`
  margin-bottom: 14px;
  font-size: 14px;
  font-family: 'Roboto-Bold';
`;

export const DescriptionText = styled.Text`
  font-family: 'Roboto-Regular';
  background: rgba(252, 163, 17, 0.2);
  padding: 20px 9px 18px 15px;
  font-size: 14px;
  margin-bottom: 26px;
  height: 100px;
`;

export const AnotherText = styled.Text`
  font-family: 'Roboto-Regular';
  background: rgba(20, 33, 61, 0.2);
  padding: 20px 9px 18px 15px;
  font-size: 14px;
  margin-bottom: 26px;

  height: 100px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 44px;
  background: #fca311;

  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
`;

export const TextButton = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 20px;
  color: #14213d;
`;
