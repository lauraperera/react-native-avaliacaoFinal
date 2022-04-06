import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';
import { Button } from "../componentes/Button";

export function SpeechScreen() {
  const speak = () => {
    const thingToSay = 'Oi guris';
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={speak}
        title="Press to hear some words"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#f9c2ff',
    padding: 8,
  },
});
