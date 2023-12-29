import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const MainTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  margin-bottom: 23px;
`

export const DefaultContainer = styled.View`
  width: 100%;
  height: 90px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_6};
  border-radius: 8px;
  margin-bottom: 12px;
`

export const DefaultMainNumber = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const DefaultMainText = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};

`

export const DoubleContainer = styled.View`
  width: 100%;
  height: 110px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background-color: transparent;
  border-radius: 8px;
  margin-bottom: 12px;
  flex-direction: row;
`
export const InDietContainer = styled.View`
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  background-color: ${({ theme }) => theme.COLORS.PRODUCT.GREEN_LIGHT};
  border-radius: 8px;
`
export const OutDietContainer = styled.View`
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  background-color: ${({ theme }) => theme.COLORS.PRODUCT.RED_LIGHT};
  border-radius: 8px;
`



