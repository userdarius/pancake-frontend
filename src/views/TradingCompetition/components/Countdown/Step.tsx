import React from 'react'
import styled from 'styled-components'
import { LogoIcon, CheckmarkCircleIcon, CircleOutlineIcon, Flex, Text } from '@xnorandom/cryptogenicuikitmod'
import { CountdownProps } from '../../types'

const sharedFlexStyles = `
flex-direction: column;
align-items: center;
justify-content: center;
`

const ExpiredWrapper = styled(Flex)`
  ${sharedFlexStyles}

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }
`

const ActiveWrapper = styled(Flex)`
  ${sharedFlexStyles}
`

const FutureWrapper = styled(Flex)`
  ${sharedFlexStyles}

  svg {
    fill: ${({ theme }) => theme.colors.textDisabled};
  }
`

const StyledText = styled(Text)`
  margin-top: 4px;
  font-weight: 600;
  font-size: 12px;
`

const Step: React.FC<CountdownProps> = ({ stepText, index, activeStepIndex }) => {
  const isExpired = index < activeStepIndex
  const isActive = index === activeStepIndex
  const isFuture = index > activeStepIndex

  if (isExpired) {
    return (
      <ExpiredWrapper>
        <CheckmarkCircleIcon />
        <StyledText color="textSubtle">{stepText}</StyledText>
      </ExpiredWrapper>
    )
  }

  if (isActive) {
    return (
      <ActiveWrapper>
        <LogoIcon />
        <StyledText color="primaryBright">{stepText}</StyledText>
      </ActiveWrapper>
    )
  }

  if (isFuture) {
    return (
      <FutureWrapper>
        <CircleOutlineIcon />
        <StyledText color="textDisabled">{stepText}</StyledText>
      </FutureWrapper>
    )
  }

  return <span>Er</span>
}

export default Step
