import styled from 'styled-components/native'


export const Container = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`

export const DefaultLabel = styled.Text`
  width: 100%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  margin-bottom: 5px;
`

export const DefaultTextInput = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_5};
  margin-bottom: 20px;
  padding: 14px;
`

export const DefaultTextArea = styled.TextInput`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_5};
  margin-bottom: 20px;
  padding: 14px;
`

export const RowWrapper = styled.View`
  margin-top:5px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

export const RowItem = styled.View`
  flex: 1;
  margin-bottom: 20px;
`

export const DefaultButton = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  height: 50px;
  flex-direction: row;
  gap: 8px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_6};
  margin-bottom: 20px;
`

export const DefaultButtonText = styled.Text`

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  text-align: center;
  
`

export const ButtonIconYes = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.PRODUCT.GREEN_DARK}
`
export const ButtonIconNo = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.PRODUCT.RED_DARK}
`