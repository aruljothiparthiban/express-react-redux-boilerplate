import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from './components/shared/Header';
import ContentBody from './components/shared/ContentBody';
import Footer from './components/shared/Footer';
import './assets/scss/dashforge.scss';
import './assets/scss/pages/dashboard.scss';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <ContentBody />
                    <Footer />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));