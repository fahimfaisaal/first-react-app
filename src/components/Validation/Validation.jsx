import { Component } from 'react';
import Greet from '../Greet/Greet';

class Validation extends Component {
    state = {
        firstName: '',
        lastName: ''
    }

    keepFirstName = event => {
        const value = event.target.value;
        const isValid = value.split('').every(letter => /[a-z]/i.test(letter));

        if (isValid && value.length <= 15) {
            this.setState({
                firstName: value
            })
        }
    }

    keepLastName = event => {
        const value = event.target.value;
        const isValid = value.split('').every(letter => /[a-z]/i.test(letter));

        if (isValid && value.length <= 15) {
            this.setState({
                lastName: value
            })
        }
    }

    render() {
        const { firstName, lastName } = this.state;

        return <div className="input-field">
            <input type="text" placeholder="Enter your first name" value={ firstName } onChange={ this.keepFirstName }/>
            <br />
            <input type="text" placeholder="Enter your last name" value={ lastName} onChange={ this.keepLastName }/>
            <br />
            <Greet firstName={firstName ? "Assalamu-alaikum, " + firstName : ""} />
        </div>
    }
}

export default Validation;