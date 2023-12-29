import styled from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'


import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px 0 0 0;
`
export const HeaderWrapper = styled.View`
  background-color: transparent;
  height: 130px;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 9999;
  top: 10px;
  left: 15px;
  border: 15px solid transparent;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
}))``

export const Content = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex: 1;
  padding: 24px;
`