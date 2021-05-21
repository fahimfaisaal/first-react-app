import React, { Component } from 'react';
// import Validation from './Validation/Validation';
import SmartForm from './SmartForm/SmartForm';
class App extends Component {

    render() {
        return (
            <SmartForm />
        )
    }
}

export default App;

/**
 * There are 2 kind of components
 * 1. class components or state-full components (smart component)
 * 2. functional components of stateless components (dump component)
 */