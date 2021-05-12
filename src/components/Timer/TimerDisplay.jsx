import React, { Component } from 'react';
import Button from './Button/Button';

const $ = el => document.querySelector(el);

class TimerDisplay extends Component {
    state = {
        minute: 0,
        second: 0,
        milliseconds: 250
    }

    intervalID = null;
    totalTime = 0;
    isPaused = false;
    
    toggleDisplay(increaseDecrease) {
        const display = $(".timer__display");

        display.style.transform = `scale(${increaseDecrease})`
    }

    indicatorController() {
        $(".timer__indicator-bar").classList.add("fill-bar");
        $(".timer__indicator-bar").style.animationDuration = this.totalTime + 's'
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
        let { second, minute, milliseconds } = this.state;

        if (second === 0 && minute === 0) {
            return undefined;
        }

        this.intervalID && this.setState({
            milliseconds: milliseconds - 1
        });

        if (milliseconds === 0 || !this.intervalID) {
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
                    this.reset();
                }
            })

            this.intervalID && this.setState({
                milliseconds: 250
            })
        }
    }

    clearInterval = () => {        
        clearInterval(this.intervalID);
        this.intervalID = null;
    }

    start = () => {
        if (!this.isPaused) {
            this.totalTime = (this.state.minute * 60) + this.state.second
        }
        
        if ((this.state.second > 0 || this.state.minute > 0) && !this.intervalID) {
            this.indicatorController();
            
            $(".timer__indicator-bar").style.animationPlayState = "running";
            $('.timer').style.borderColor = '#3498db';
            
            this.toggleDisplay('1.535');
            
            this.intervalID = setInterval(() => {
                this.decrement();
            }, 1)
        }
    }

    pause = () => {
        if (this.intervalID) {
            this.isPaused = true;
            this.clearInterval();
            
            $(".timer__indicator-bar").style.animationPlayState = "paused";
            $('.timer').style.borderColor = '#f1c40f'
        }
    }

    reset = () => {
        this.toggleDisplay('1');

        this.totalTime = 0;
        this.isPaused = false;
        
        this.setState({
            minute: 0,
            second: 0,
            milliseconds: 250
        }, this.clearInterval)
        
        $('.timer').style.borderColor = '#1abc9c';

        $(".timer__indicator-bar").classList.remove('fill-bar');
    }

    render() {
        const { minute, second } = this.state;

        return (
            <>
                <div className="timer-display">
                    <Button title="+" modifierClass="timer__increment" click={ this.increment }/>

                    <div className="timer__display">
                        <code>
                            <span className="timer__minute">{ minute < 10 ? '0' + minute : minute }</span> : <span className="timer__second">{ second < 10 ? '0' + second : second }</span>
                        </code>

                        <div className="timer__indicator-bar"></div>
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