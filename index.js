/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

/**
 * App 렌더
 */
import App from './App';
const render = App;

/**
 * Storybook 렌더
 */
// import StorybookUIRoot from './.ondevice/Storybook';
// const render = StorybookUIRoot;

AppRegistry.registerComponent(appName, () => render);
