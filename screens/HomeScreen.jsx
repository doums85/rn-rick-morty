import { useEffect, useState } from 'react';
import { View, Text, useWindowDimensions, Pressable } from 'react-native';
import styled from 'styled-components/native';

export default function HomeScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const { width, height } = useWindowDimensions();
  /* 
  Func Parent => (characterName) = Rick
  Func Enfant => hérité (characterName) = Rick
   */
  const navigationHandler = (character) => () =>
    navigation.navigate('Detail', { character });


  return (
    <Container>
      <ContainerCard
        style={{ flex: 1 }}
        data={characters}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable onPress={navigationHandler(item)}>
            <Card>
              <ImageContainer width={width}>
                <Image resizeMode="cover" source={{ uri: item.image }} />
              </ImageContainer>

              <Content>
                <Name>{item.name} </Name>
                <Status>{item.status} </Status>
              </Content>
            </Card>
          </Pressable>
        )}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const ContainerCard = styled.FlatList`
  flex: 1;
`;

const Card = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  background-color: #2b2d42;
  border-radius: 8px;
  overflow: hidden;
`;

const ImageContainer = styled.View`
  width: ${({ width }) => `${width * 0.7}px`};
  height: 250px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Name = styled.Text`
  font-size: 16px;
  padding: 10px;
  color: #fff;
`;

const Status = styled(Name)`
  padding: 0;
  color: red;
`;
