import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

import { ArrowUpRight } from 'phosphor-react-native'


export type DisplayProps = {
  status: boolean
}


export const Container = styled(TouchableOpacity) <DisplayProps>`
  margin-top: 30px;
  width: 100%;
  height: 102px;
  background-color: ${({ theme, status }) => status ? theme.COLORS.PRODUCT.GREEN_LIGHT : theme.COLORS.PRODUCT.RED_LIGHT};
  border-radius: 8px;
  padding: 20px 16px;
  justify-content: center;
  align-items: center;
  position: relative;
`


export const Icon = styled(ArrowUpRight).attrs(({ theme, status }) => ({
  size: 24,

})) <DisplayProps>`
  position: absolute;
  top:10px;
  right:10px;
  color: ${({ theme, status }) => status ? theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.RED_DARK};
`