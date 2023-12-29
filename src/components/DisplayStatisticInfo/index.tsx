import { Container, Percent, Phrase } from "./styled"


interface DisplayStatisticProps {
  percent: number
  phrase: string
}

export function DisplayStatisticInfo({ percent, phrase }: DisplayStatisticProps) {
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