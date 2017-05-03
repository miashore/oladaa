import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './app.css';
import Header from './header/header';
<<<<<<< HEAD
import RegisterForm from './register_new_user/register_new_user'
=======
import Footer from './footer/footer';
>>>>>>> af3df51bb0e1b9e4ca7ab29344272e7f8b617081

const App = (props) => {
    injectTapEventPlugin();

    return (
        <div>
            <div>
                <Header />
            </div>
            { props.children }
<<<<<<< HEAD
            <div>
                <RegisterForm />
            </div>
=======
            <Footer />
>>>>>>> af3df51bb0e1b9e4ca7ab29344272e7f8b617081
        </div>
    );
};

export default App;
