import React, { Component } from 'react';
import Button from './Button/Button';

class TimerDisplay extends Component {
    state = {
        minute: 0,
        second: 0
    }

    #increment() {
        let incrementSecond = this.state.second + 1;
        let incrementMinute = this.state.minute
        
        if (incrementSecond === 60) {
            incrementSecond = 0;
            incrementMinute++;
        }

        this.setState({
            second: incrementSecond,
            minute: incrementMinute
        })
    }

    render() {
        const { minute, second } = this.state;

        return (
            <div className="timer-display">
                <Button title="+" modifierClass="timer__increment" click={ () => this.#increment() }/>

                <div className="timer__display">
                     <span className="timer__Minute">{ minute }</span> : <span className="timer__second">{ second }</span>
                </div>

                <Button title="-" modifierClass="timer__decrement" click={ () => this.setState({second: second - 1})}/>
            </div>
        )
    }
}

export default TimerDisplay;