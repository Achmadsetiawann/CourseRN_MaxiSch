import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={ styles.root }>
      <View style={ styles.inputContainer }>
        <TextInput 
          placeholder="Course Goal" 
          style={ styles.input }
        />
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  root : {
    padding: 50, 
    marginTop: 30
  },
  inputContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center' 
  },
  input : {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
});