import { Button, Title } from './styled'
import { TouchableOpacityProps } from 'react-native'

interface DefaultButton extends TouchableOpacityProps {
  title: string
}


export function DefaultBlackButton({ title, ...rest }: DefaultButton) {
  return (
    <Button {...rest}>
      <Title>{title}</Title>
    </Button>
  )
}