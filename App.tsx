import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import tw from 'tailwind-react-native-classnames';

const Container = styled.View`
  ${tw`
  
  `};
`;

function App() {
  return (
    <Container>
      <Text>App Typescript</Text>
      <Text>New line Typescript</Text>
    </Container>
  );
}

export default App;
