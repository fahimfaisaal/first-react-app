import React, { Component } from 'react';
import Profile from '../components/Profile/Profile';
import Skills from '../components/Profile/Skills';


class App extends Component {

    render() {
        return (
            <>
                <Profile />
                <div className="container">
                    <h3>Lists of programmers: </h3>
                    <Skills />
                    <Skills />
                    <Skills />
                </div>
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