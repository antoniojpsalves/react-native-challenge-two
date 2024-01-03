import styled from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { PencilLine, Trash } from 'phosphor-react-native'

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
  justify-content: space-between;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 16px;
`

export const Span = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 16px;
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 10px;
`

export const Tag = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_6};
  width: 144px;
  height: 34px;
  border-radius: 34px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 6px;
  margin-top: 16px;
`

export const SpanOfTag = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Symbol = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
`

export const ButtonEdit = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
`

export const ButtonTrash = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_2};
`

export const IconPencil = styled(PencilLine).attrs({
  size: 18,
})`
  color: ${({ theme }) => theme.COLORS.BASE.WHITE};
`

export const IconTrash = styled(Trash).attrs({
  size: 18
})`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
`

export const LabelForButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
export const LabelForButtonWhite = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BASE.WHITE};
`

export const ContainerData = styled.View`
  
`

export const ContainerButtons = styled.View`
  gap: 10px;
  margin-bottom: 10px;
`