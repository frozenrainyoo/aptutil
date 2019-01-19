import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

type Props = {};
export default class Screen2 extends Component<Props> {
  constructor(props) {
    super(props);

    this.changeMode = this.changeMode.bind(this);
    this.calc = this.calc.bind(this);

    this.state = {
      mode: true,
      text: 0,
      value: '',
      view1: '㎡',
      view2: '평',
    };
  }

  changeMode() {
    if (this.state.mode) {
      this.setState({
        mode: !this.state.mode,
        view1: this.state.view2,
        view2: this.state.view1,
        value: this.state.text * 3.305
      });
    } else {
      this.setState({
        mode: !this.state.mode,
        view1: this.state.view2,
        view2: this.state.view1,
        value: this.state.text * 0.3025
      });

    }
  }

  calc() {
    if (this.state.mode) {
      this.setState({
        text: this.state.value,
        value: this.state.value * 0.3025 });
    } else {
      this.setState({
        text: this.state.value,
        value: this.state.value * 3.305 });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', paddingVertical:10 }}>
          <Text style={styles.label}>{this.state.view1}</Text>
          <Button style={{ flex: 1 }} title="<=>" onPress={this.changeMode} />
          <Text style={styles.label}>{this.state.view2}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            keyboardType='number-pad'
            style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => {
              if (this.state.mode) {
                this.setState({ 
                  text: text,
                  value: text * 0.3025 });
              } else {
                this.setState({
                  text: text,
                  value: text * 3.305 });
              }
            }
          }
          />
        </View>
        <Text style={styles.welcome}>{this.state.value} {this.state.view2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
