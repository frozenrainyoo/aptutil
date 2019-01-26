import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight } from 'react-native';

type Props = {};
export default class MainScreen extends Component<Props> {
  static navigationOptions = {
    title: '아파트 유틸리티',
    headerStyle: {
      backgroundColor: '#00a11e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() =>
          this.props.navigation.navigate('AreaScreen')}
          underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>평수 계산</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() =>
          this.props.navigation.navigate('HeatingCostScreen')}
          underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>난방비 계산</Text>
          </View>
        </TouchableHighlight>
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
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});

        // <Text style={styles.welcome}>Welcome to Screen 1 😎</Text>
