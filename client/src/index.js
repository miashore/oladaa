import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxPromise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/app';
import RegisterForm from './components/register_new_user/register_new_user';
import LoginForm from './components/login/login_form';

import SelectInterests from './components/select_interests/select_interests_form'
import Home from './components/home/home';
import Blog from './components/blog/blog';
import About from './components/aboutus/about_us';
import ViewAllEventsList from './components/view_all_events/view_all';

import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="register" component={RegisterForm}/>
                    <Route path="login" component={LoginForm}/>
                    <Route path="select_interests" component={SelectInterests}/>
                    <Route path="home" component={Home}/>
                    <Route path="about" component={About}/>
                    <Route path="blog" component={Blog}/>
                    <Route path="view_all" component={ViewAllEventsList} />
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.querySelector('#root'));
