import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

import Container from '../components/Container';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <View>
      <Container>
        <SafeAreaView>
          <TextInput
            style={styles.search}
            onChangeText={onChangeText}
            value={text}
            placeholder="useless placeholder"
          //keyboardType="numeric"
          />
          <Text>Vasia</Text>
        </SafeAreaView>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
