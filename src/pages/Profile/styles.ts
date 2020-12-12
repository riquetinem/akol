import styled from 'styled-components/native';

interface BadgeProps {
  opacity: number;
}

export const Header = styled.View`
  background: #14213d;
  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: center;
  align-items: center;

  max-height: 185px;
  width: 100%;
  position: relative;
`;

export const ArrowLeft = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Avatar = styled.Image``;

export const Hello = styled.Text`
  font-family: 'Robot-Regular';
  color: #fff;
  font-size: 24px;
  text-align: center;
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
  color: #fca311;

  margin-top: 31px;
  margin-bottom: 44px;
`;

export const TitleSection = styled.Text`
  margin-bottom: 14px;
  font-size: 14px;
  font-family: 'Roboto-Bold';
`;

export const Description = styled.Text`
  font-family: 'Roboto-Regular';
  background: rgba(252, 163, 17, 0.2);
  padding: 20px 9px 18px 15px;
  font-size: 14px;
  margin-bottom: 26px;
`;

export const Badges = styled.View`
  border: 1px solid #e5e5e5;
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BadgeList = styled.View`
  display: flex;
  flex-direction: row;

  justify-content: center;
`;

export const BadgeIcon = styled.View`
  border: 3px solid #14213d;
  border-radius: 50px;
  padding: 5px;
`;

export const Badge = styled.View<BadgeProps>`
  height: 100%;
  display: flex;
  opacity: ${(props) => props.opacity};

  align-items: center;
`;

export const TitleBadge = styled.Text`
  font-family: 'Quicksand-Bold';
  font-size: 12px;
  text-align: center;

  width: 100px;
`;
