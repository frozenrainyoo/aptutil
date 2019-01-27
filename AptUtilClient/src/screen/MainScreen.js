import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, BackHandler } from 'react-native';

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

  _didFocusSubscription;
  _willBlurSubscription;

  constructor(props) {
    super(props);

    this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }

  onBackButtonPressAndroid = () => {
    Alert.alert(
      '종료',
      '종료하시겠습니까?',
      [
        { text: '아니요', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: '네', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false });
    return true
  };

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

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
