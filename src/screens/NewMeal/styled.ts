import styled from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
  padding:  24px 0 0 0;
`

export const Content = styled.View`
  margin-top: 30px;
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
`