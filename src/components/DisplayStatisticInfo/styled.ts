import styled from 'styled-components/native'


export const Container = styled.View`
  width: 100%;
`

export const Percent = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
  font-family:${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`

export const Phrase = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  font-family:${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`