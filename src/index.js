import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

const initialize = () => {
    // render the routing structure
    return ReactDOM.render(
      <Provider store={store}>
        <Router>
          <Route path="/" component={App} />
        </Router>
      </Provider>,
      document.getElementById('root')
    );
}

// initialize
initialize();
registerServiceWorker();
