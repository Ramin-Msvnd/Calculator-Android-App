/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import RealApp from './RealApp'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RealApp);
