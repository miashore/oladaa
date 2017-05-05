import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../app';
import Home from '../home/home'
import About from '../aboutus/about_us';
import Blog from '../blog/blog';
import SelectInterests from '../select_interests/select_interests_form';
import RegisterForm from '../register_new_user/register_new_user';
import LoginForm from '../login/login_form';
import ViewAllList from '../view_all_events/view_all';
import RecommendedEventList from '../recommended_events/recommended_events';

export default  (
    <Route path="/" component={ App }>
        <Route path="home" component={ Home }/>
        <Route path="about" component={ About }/>
        <Route path="blog" component={ Blog }/>

        {/*Need to reroute, currently added to app in order to navigate easier. The below should not have a header and footer*/}
        <Route path="select_interests" component={ SelectInterests }/>
        <Route path="register" component={ RegisterForm }/>
        <Route path="login" component={ LoginForm }/>
        <Route path="view_all" component={ ViewAllList }/>
        <Route path="recommended_events" components={ RecommendedEventList }/>
    </Route>
);