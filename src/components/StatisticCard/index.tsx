import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import { Container, Icon } from './styled'
import { DisplayStatisticInfo } from '../DisplayStatisticInfo'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  percent: number
  phrase?: string
  statusDiet?: boolean
  inDietMealCount: number
  amountMealCount: number
  outOfDietMealCount: number
  bestSequence: number
}

export function StatisticCard({
  percent,
  phrase = 'das refeições dentro da dieta',
  statusDiet = false,
  inDietMealCount,
  amountMealCount,
  outOfDietMealCount,
  bestSequence,
  ...rest
}: Props) {


  const navigation = useNavigation()

  function handleGoToStatistics() {
    return navigation.navigate('statistics', { status: statusDiet, percent, inDietMealCount, amountMealCount, outOfDietMealCount, bestSequence })
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