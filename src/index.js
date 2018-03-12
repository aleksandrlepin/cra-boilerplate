import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
// import { loadMovies } from './actions/moviesActions';

const store = configureStore();

// store.dispatch(loadMovies());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </ Provider>,
  document.getElementById('root'));
registerServiceWorker();
