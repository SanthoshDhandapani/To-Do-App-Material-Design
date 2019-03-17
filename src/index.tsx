import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer as HotLoader } from 'react-hot-loader';
import './assets/css/index.css';
import { App } from './screens/app';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

render(
  <HotLoader>
    <App />
  </HotLoader>,
  rootElement,
);
serviceWorker.register();
