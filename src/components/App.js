import React, { Component, Fragment } from 'react';
import Header from './header/Header';
import Characters from './characters/Characters';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Characters/>
            </Fragment>
        );
    }
}
