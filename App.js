import React, {Component} from 'react';
import {DrawerNavigator} from './app/src/scenes/Navigation/DrawerNavigator';
import {Route} from './app/src/scenes/Navigation/Route';

import {AuthNavigator} from './app/src/scenes/Navigation/AuthNavigator';
export default class App extends Component {
  render() {
    return <AuthNavigator />;
  }
}
