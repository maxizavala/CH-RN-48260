import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import styles from './Estilos.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola coder</Text>
      <View style={styles.inputContainer}>
        <TextInput
            placeholder = "Item de la Lista"
            style={styles.input}
        />
        <Button title="ADD" onPress={() => console.log("click")} />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}
