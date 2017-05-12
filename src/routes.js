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
import Teapot from './components/teapot/teapot';

export default  (
    <div>
        <Route path="/" component={ App }>
                <Route path="home" component={ require_auth(Home) }/>
                <Route path="about" component={ require_auth(About) }/>
                <Route path="view_all" component={ require_auth(ViewAllEventsList) }/>
                <Route path="view_all_event_card" component={ require_auth(ViewAllEventCard) }/>
                <Route path="recommended_events" components={ require_auth(RecommendedEventList) }/>
                <Route path="activity_note" component={ require_auth(ActivityNote) } />
                <Route path="welcome_user" components={ require_auth(WelcomeNote) }/>
                <Route path="event_card" component={ require_auth(EventCard) } />
<<<<<<< HEAD
                {/*<Route path="*" components={ Teapot } />*/}
=======
>>>>>>> 5558725b5af1c976a4ea2cfccf142adafab5efbd
        </Route>
        <Route path="login" component={ LoginForm }/>
        <Route path="register" component={ RegisterForm }/>
        <Route path="fitbit_login" component={ require_auth(FitbitLogin) } />
        <Route path="select_interests" component={ require_auth(SelectInterests) }/>
        <Route path="*" components={ Teapot } />
    </div>
);