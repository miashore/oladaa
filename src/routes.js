import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/home'
import About from './components/aboutus/about_us';
import SelectInterests from './components/select_interests/select_interests_form';
import RegisterForm from './components/register_new_user/register_new_user';
import LoginForm from './components/login/login_form';
import ViewAllEventsList from './components/view_all_events/view_all';
import require_auth from './components/auth/require_auth';
import RecommendedEventList from './components/recommended_events/recommended_events';
import ActivityNote from './components/activity_note/activity_note';
import WelcomeNote from './components/welcome_new_user/welcome_new_user';
import FitbitLogin from './components/mock_fitbit_login/fitbit_login';
import EventCard from './components/event_card/event_card';
import ViewAllEventCard from './components/event_card/view_all_event_card';

export default  (
    <div>
    <Route path="/" component={ App }>
            {/*<Route path="home" component={ require_auth(Home) }/>*/}
            <Route path="home" component={ Home }/>
            <Route path="about" component={ require_auth(About) }/>

        {/*Need to reroute, currently added to app in order to navigate easier. The below should not have a header and footer*/}
            {/*<Route path="select_interests" component={ SelectInterests }/>*/}
            {/* Commented out for Testing */}
            {/*<Route path="view_all" component={ require_auth(ViewAllList) }/>*/}
            {/*<Route path="recommended_events" components={ require_auth(RecommendedEventList) }/>*/}
            <Route path="view_all" component={ require_auth(ViewAllEventsList) }/>
            <Route path="view_all_event_card" component={ require_auth(ViewAllEventCard) }/>
            {/*<Route path="recommended_events" components={ require_auth(RecommendedEventList) }/>*/}
            <Route path="recommended_events" components={ RecommendedEventList }/>

            <Route path="activity_note" component={ require_auth(ActivityNote) } />
            {/*<Route path="welcome_user" components={ require_auth(WelcomeNote) }/>*/}
            <Route path="welcome_user" components={ WelcomeNote }/>
            <Route path="event_card" component={ require_auth(EventCard) } />
    </Route>
            <Route path="login" component={ LoginForm }/>
            <Route path="register" component={ RegisterForm }/>
            <Route path="fitbit_login" component={ require_auth(FitbitLogin) } />
            <Route path="select_interests" component={ require_auth(SelectInterests) }/>


    </div>

);