import React from 'react';
import ReactDOM from 'react-dom';

import * as Pages from './pages';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Pages.Home />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
