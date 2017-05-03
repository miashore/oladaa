import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxPromise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import App from './components/app';
import RegisterForm from './components/register_new_user/register_new_user';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router history={browserHistory}>
                {/*<Route path="/" component={App}/>*/}
                <Route path="/" component={RegisterForm}/>
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.querySelector('#root'));
