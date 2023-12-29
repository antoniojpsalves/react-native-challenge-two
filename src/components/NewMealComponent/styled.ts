import styled from 'styled-components/native'
import { Plus } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  width: 100%;
  margin-top: 30px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 12px;
`

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
`

export const Icon = styled(Plus).attrs({
  size: 18
})`
  color: ${({ theme }) => theme.COLORS.BASE.WHITE};
`
export const LabelForButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

`