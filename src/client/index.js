import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/shared/Header';
import ContentBody from './components/shared/ContentBody';
import Footer from './components/shared/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './assets/scss/dashforge.scss';
import './assets/scss/pages/dashboard.scss';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <ContentBody />
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));