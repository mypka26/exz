import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavBar } from './NavBar';
import {AddTodo } from './AddTodo';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar title = 'Площадь окружности' />
      <AddTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});
