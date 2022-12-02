/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './home';
import Login from './login';
import Signup from './signup';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
// AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () => Signup);
