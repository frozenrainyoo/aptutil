/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import { Platform, StyleSheet, Text, View } from 'react-native';
import firebase from 'react-native-firebase';

const bannerUnitId = Platform.select({
  ios: "ca-app-pub-1279605737395639/4912900239",
  android: "ca-app-pub-1279605737395639/8208259366",
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const Banner = firebase.admob.Banner;
    const AdRequest = firebase.admob.AdRequest;
    const request = new AdRequest();

    return (
      <View style={styles.container}>
        <Navigation />
        <Banner
          unitId={bannerUnitId}
          size={'SMART_BANNER'}
          request={request.build()}
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
