import React, { ReactNode } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../modules/reducers';
import rootSaga from '../modules/sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

interface P {
  children: ReactNode;
}

const ReduxWrapper = ({ children }: P) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxWrapper;
