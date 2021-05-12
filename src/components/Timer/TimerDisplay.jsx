import React, { Component } from 'react';
import Button from './Button/Button';

class TimerDisplay extends Component {
    state = {
        minute: 0,
        second: 0
    }

    intervalID = null;

    toggleDisplay(increaseDecrease) {
        const display = document.querySelector(".timer__display");

        display.style.transform = `scale(${increaseDecrease})`
    }

    increment = () => {
        let incrementSecond = this.state.second + 10;
        let incrementMinute = this.state.minute
        
        if (incrementSecond >= 60) {
            incrementSecond = 0;
            incrementMinute++;
        }

        this.setState({
            second: incrementSecond,
            minute: incrementMinute
        })
    }

    decrement = () => {
        const { second, minute } = this.state;

        if (second === 0 && minute === 0) {
            return undefined;
        }

        let decrementSecond = second - 1;
        let decrementMinute = minute;

        if (decrementSecond === -1) {
            decrementSecond = 59
            decrementMinute--
        }

        this.setState({
            second: decrementSecond,
            minute: decrementMinute
        }, () => {
            if (this.state.minute === 0 && this.state.second === 0) {
                this.toggleDisplay('1');
                this.clearInterval();
            }
        })
    }

    clearInterval = () => {        
        clearInterval(this.intervalID);
        this.intervalID = null;
    }

    start = () => {
        if ((this.state.second > 0  || this.state.minute > 0) && !this.intervalID) {
            this.toggleDisplay('1.58');
            
            this.intervalID = setInterval(() => {
               this.decrement();
            }, 1000)
        }
    }

    pause = () => {
        this.clearInterval();
    }

    reset = () => {
        this.toggleDisplay('1');

        this.setState({
            minute: 0,
            second: 0
        }, this.clearInterval)
    }

    render() {
        const { minute, second } = this.state;

        return (
            <>
                <div className="timer-display">
                    <Button title="+" modifierClass="timer__increment" click={ this.increment }/>

                    <div className="timer__display">
                        <code>
                            <span className="timer__Minute">{ minute < 10 ? '0' + minute : minute }</span> : <span className="timer__second">{ second < 10 ? '0' + second : second }</span>
                        </code>
                    </div>

                    <Button title="-" modifierClass="timer__decrement" click={ this.decrement }/>
                </div>

                <div className="timer__controller">
                    <Button title="start" modifierClass="timer__start" click={ this.start }/>
                    <Button title="pause" modifierClass="timer__pause" click={ this.pause }/>
                    <Button title="reset" modifierClass="timer__reset" click={ this.reset }/>
                </div>
            </>
        )
    }
}

export default TimerDisplay;