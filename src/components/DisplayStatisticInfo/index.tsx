import { Container, Percent, Phrase } from "./styled"


interface DisplayStatisticProps {
  percent: number
  phrase?: string
}

export function DisplayStatisticInfo({ percent, phrase = 'das refeições dentro da dieta' }: DisplayStatisticProps) {
  return (
    <Container>
      <Percent>
        {percent}%
      </Percent>
      <Phrase>
        {phrase}
      </Phrase>
    </Container>
  )
}