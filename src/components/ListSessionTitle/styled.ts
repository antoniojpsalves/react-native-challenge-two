import styled from 'styled-components/native'


export const Container = styled.View`
  width: 100%;
  margin-bottom: 8px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
