import { Container, Title } from './styled'

type ListSessionTitleProps = {
  selectedDate: string
}

export function ListSessionTitle({ selectedDate }: ListSessionTitleProps) {

  const dataType = new Date(selectedDate);
  const formatedDate = dataType.toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  });

  return (
    <Container>
      <Title>{formatedDate}</Title>
    </Container>
  )
}