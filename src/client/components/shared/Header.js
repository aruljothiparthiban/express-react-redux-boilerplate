import React, { Component } from "react";

export default class Header extends Component {

    render() {
        return (
            <header className="navbar navbar-header navbar-header-fixed">
                <a href="" id="mainMenuOpen" className="burger-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </a>
                <div class="navbar-brand">
                    <a href="/" className="df-logo">dash<span>forge</span></a>
                </div>
            </header>
        );
    }
}