import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput } from 'react-native';

type Props = {};
export default class HeatingCostScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this._onChangeTextPrice = this._onChangeTextPrice.bind(this);
    this._onChangeTextUsage = this._onChangeTextUsage.bind(this);
    this._calc = this._calc.bind(this);

    this.state = {
      mode: 'Mwh',
      price: 0,
      usage: 0,
      result: 0,
    };
  }

  _calc(price, usage) {
    this.setState({
      result: price * usage
    })
  }

  _onChangeTextPrice(text) {
    this.setState({
      price: text
    })
    this._calc(text, this.state.usage)
  }

  _onChangeTextUsage(text) {
    this.setState({
      usage: text
    })
    this._calc(this.state.price, text)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
          <Text style={styles.label}>난방단가 입력 : </Text>
          <TextInput
            keyboardType='number-pad'
            style={{ width: 100, height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={this._onChangeTextPrice}
          />
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
          <Text style={styles.label}>사용량 입력 : </Text>
          <TextInput
            keyboardType='number-pad'
            style={{ width: 100, height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={this._onChangeTextUsage}
          />
        </View>

        <Text style={styles.label}>{this.state.result}원</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
