import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../modules/reducers';

const store = createStore(rootReducer);

interface P {
  children: ReactNode;
}

const ReduxWrapper = ({ children }: P) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxWrapper;
