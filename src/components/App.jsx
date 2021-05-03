import React, { Component } from 'react';
import Profile from './Profile/Profile';

class App extends Component {

    render() {
        return (
            <>
                <Profile />
                {/* <div className="container">
                    <h3 style={{
                        marginBottom: '10px'
                    }}>List of Programmers: </h3>
                    <MyComponent name='fahim faisal'/>
                    <MyComponent name='Abdullah Turky'/>
                    <MyComponent name='Ashraful Islam'/>
                </div> */}
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