import { Component } from 'react';
// import Validation from './Validation/Validation';
// import SmartForm from './SmartForm/SmartForm';
import SignUpForm from './SignUpForm/SignUpForm';
class App extends Component {

    render() {
        return (
            <SignUpForm />
        )
    }
}

export default App;

/**
 * There are 2 kind of components
 * 1. class components or state-full components (smart component)
 * 2. functional components of stateless components (dump component)
 */