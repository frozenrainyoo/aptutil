import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import MainScreen from '../screen/MainScreen'
import AreaScreen from '../screen/AreaScreen'
import HeatingCostScreen from '../screen/HeatingCostScreen'

const AppNavigator = createStackNavigator({
  MainScreen: { screen: MainScreen },
  AreaScreen: { screen: AreaScreen },
  HeatingCostScreen: { screen: HeatingCostScreen},
});

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer,
});

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware("root", state => state.nav);
const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({ state: state.nav });
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer, applyMiddleware(middleware));

export default class Navigation extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
