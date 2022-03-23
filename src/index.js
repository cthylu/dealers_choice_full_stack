import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main'

ReactDom.render(
    <Provider store={store}>
        <Main />
    </Provider>, 
    document.querySelector('#app')
);
