import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  // Identifikasi React Hook
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // Input Handler
  const goalInputeHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  // Show Data Handler
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={ styles.root }>
      <View style={ styles.inputContainer }>
        <TextInput 
          placeholder="Course Goal" 
          style={ styles.input }
          onChangeText= {goalInputeHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
      <ScrollView>
        {courseGoals.map(goal => ( 
        <View key={goal} style={styles.listItem}>
          <Text>{goal}</Text>
        </View>
        ))}
      </ScrollView>
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
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});