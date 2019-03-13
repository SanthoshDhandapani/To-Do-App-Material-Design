import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer as HotLoader } from 'react-hot-loader';
import App from './components/App';

const rootElement = document.getElementById('root');

render(
  <HotLoader>
    <App />
  </HotLoader>,
  rootElement,
);
