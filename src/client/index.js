import React from 'react';
import { hydrate, render } from 'react-dom';
import Loadable from 'react-loadable';

import App from './app';

Loadable.preloadReady().then(() => {
  const container = document.getElementById('root');
  const bootstrap = window.isSSR ? hydrate : render;
  const props = {
    history,
  };

  bootstrap(<App {...props} />, container);
});
