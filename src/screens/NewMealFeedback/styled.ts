import styled from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
  padding: 24px;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
`

export const BoldPhrase = styled.Text`
   font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
`

export const SpanText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  text-align: center;
`

export const Ilustration = styled.Image`
  margin-top: 50px;
  width: 224px;
  height: 288px;
  flex-shrink: 0;
`