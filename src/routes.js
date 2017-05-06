import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/home'
import About from './components/aboutus/about_us';
import Blog from './components/blog/blog';
import SelectInterests from './components/select_interests/select_interests_form';
import RegisterForm from './components/register_new_user/register_new_user';
import LoginForm from './components/login/login_form';
import ViewAllList from './components/view_all_events/view_all';
import RecommendedEventList from './components/recommended_events/recommended_events';
import ActivityNote from './components/activity_note/activity_note';

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
        <Route path="activity_note" component={ ActivityNote } />
    </Route>
);