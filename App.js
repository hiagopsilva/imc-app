
import React, {Component} from 'react';
import {  
  StyleSheet, 
  Text, 
  TextInput,
  View
} from 'react-native';

const instructions = Platform.select({
  
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Altura" />
        <TextInput placeholder="Massa" />
        <Text> Teste Index</Text>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    color: 'black',
  },
  
});
