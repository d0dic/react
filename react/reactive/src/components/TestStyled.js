import React from "react"
import styled from 'styled-components/native'

import { Text } from 'react-native'

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`

const StyledText = styled.Text`
  color: green;
  font-size: 30px;
  padding: 10px
`

const TestStyled = () => {
  return (
    <Container>
      <StyledText>Component with Styled</StyledText>
    </Container>
  )
}


export default TestStyled