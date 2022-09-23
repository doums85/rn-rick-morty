import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import GoBack from '../components/GoBack';

export default function DetailScreen({ route }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const { character } = route.params;
    setCharacter(character);
  }, [character]);

  return (
    <View>
      <Text>{character?.name}</Text>
      <GoBack />
    </View>
  );
}
