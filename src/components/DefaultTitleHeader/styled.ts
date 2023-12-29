import styled from 'styled-components/native'

import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`

export const DefaultHeaderTitle = styled.Text`
  flex: 6;
  height: 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  position: relative;
`
export const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border: 5px solid transparent;
  position: absolute;
  z-index: 9999;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: '#121214'
}))``