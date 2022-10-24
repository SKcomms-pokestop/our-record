/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import StorybookUIRoot from './storybook';
import { name as appName } from './app.json';

const render = App; // App | StorybookUIRoot

AppRegistry.registerComponent(appName, () => render);
