import styled from 'styled-components/native'

import { View, TouchableOpacity } from 'react-native'

export type StatusStyle = {
  status: boolean
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_5};
  border-radius: 6px;
  padding: 14px 16px 14px 12px;
  gap: 12px;
  margin-bottom: 8px;
`

export const HourDisplay = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Divisor = styled.View`
  width: 2px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_5};
`

export const MealInfoWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const DescriptionDisplay = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const CircleSymbol = styled(View) <StatusStyle>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, status }) => status ? theme.COLORS.PRODUCT.GREEN_MID : theme.COLORS.PRODUCT.RED_MID};
`