import React, { Component } from 'react';
import TimerDisplay from '../TimerDisplay';

class Display extends Component {
    render() {
        return (
            <div className="timer">
                <h1 className="timer__heading">_Countdown Timer_</h1>
                
                <TimerDisplay />
            </div>
        )
    }
}

export default Display;