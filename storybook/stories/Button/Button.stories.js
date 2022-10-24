import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Button from '.';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default button', () => <Button>버튼</Button>)
  .add('loading button', () => <Button loading>btn</Button>);
