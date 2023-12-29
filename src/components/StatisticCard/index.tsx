import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import { Container, Icon } from './styled'
import { DisplayStatisticInfo } from '../DisplayStatisticInfo'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  percent: number
  phrase: string
  statusDiet?: boolean
}

export function StatisticCard({ percent, phrase, statusDiet = false, ...rest }: Props) {


  const navigation = useNavigation()

  function handleGoToStatistics() {
    return navigation.navigate('statistics')
  }

  return (
    <Container
      onPress={handleGoToStatistics}
      status={statusDiet}
      {...rest}
    >
      <Icon status={statusDiet} />
      <DisplayStatisticInfo percent={percent} phrase={phrase} />
    </Container>
  )
}