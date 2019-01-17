import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

type Props = {};
export default class Screen2 extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text: '',
      value: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Screen 2 😎 </Text>
        <Button title="Go to screen 1" onPress={() => this.props.navigation.navigate('Screen1')} />

        <View style={{ flexDirection: 'row' }}>
          <TextInput
            keyboardType='number-pad'
            style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ value:text * 0.3025 })}
          />
        </View>
        <Text style={styles.welcome}>{this.state.value}평</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
