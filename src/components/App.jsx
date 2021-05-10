import React, { Component } from 'react';
import Display from './Timer/Display/Display';

class App extends Component {

    render() {
        return (
            <>
                <Display />
            </>
        )
    }
}

export default App;

/**
 * There are 2 kind of components
 * 1. class components or state-full components (smart component)
 * 2. functional components of stateless components (dump component)
 */