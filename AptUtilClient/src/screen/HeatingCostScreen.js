import React, { Component } from 'react';
import { Dimensions, Alert, StyleSheet, Text, View, Button, TextInput, BackHandler } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

type Props = {};
export default class HeatingCostScreen extends Component<Props> {
  static navigationOptions = {
    title: '난방비 계산',
  };

  _didFocusSubscription;
  _willBlurSubscription;

  constructor(props) {
    super(props);

    this._onChangeTextPrice = this._onChangeTextPrice.bind(this);
    this._onChangeTextUsage = this._onChangeTextUsage.bind(this);
    this._calc = this._calc.bind(this);
    this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );

    this.state = {
      mode: 'Mwh',
      price: 0,
      usage: 0,
      result: 0,
    };
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }

  onBackButtonPressAndroid = () => {
    this.props.navigation.navigate('MainScreen')
    return true
  };

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
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
    let deviceWidth = Dimensions.get('window').width

    let data = [{
      value: 'Mcal',
    }, {
      value: 'Mwh',
    }];

    return (
      <View style={styles.container}>
        <View style={{
          flexDirection: 'row', paddingVertical: 10, justifyContent: 'center',
          alignItems: 'center'}}>
          <Dropdown
            containerStyle={{ borderWidth: 1, borderColor: 'lightgrey', width: deviceWidth * 0.3, paddingLeft: deviceWidth * 0.02 }}
            label='난방 단위'
            data={data}
          />
          <Text style={styles.label}>당 단가: </Text>
          <TextInput
            keyboardType='number-pad'
            style={{ width: 100, height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={this._onChangeTextPrice}
          />
          <Text style={styles.label}>원</Text>
        </View>
        <View style={{
          flexDirection: 'row', paddingVertical: 10, justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={styles.label}>사용량 : </Text>
          <TextInput
            keyboardType='number-pad'
            style={{ width: 100, height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={this._onChangeTextUsage}
          />
          <Dropdown
            containerStyle={{ borderWidth: 1, borderColor: 'lightgrey', width: deviceWidth * 0.3, paddingLeft: deviceWidth * 0.02 }}
            label='난방 단위'
            data={data}
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
