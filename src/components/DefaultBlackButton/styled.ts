import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Button = styled(TouchableOpacity)`
  margin-top: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

`