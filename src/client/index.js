import React, { Component } from "react";
import ReactDOM from "react-dom";
import './assets/scss/dashforge.scss';

class App extends Component {

    render(){
        return (
            <h1>Hello Nischi!</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));