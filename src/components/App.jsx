import React, { Component } from 'react';
import Parent from './Parent';

class App extends Component {

    render() {
        return (
            <>
                <Parent />
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