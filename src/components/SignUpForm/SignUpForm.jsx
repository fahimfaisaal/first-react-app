import { Component } from 'react';
import Form from './Form/Form';
// import Util from './Util';

class SignUpForm extends Component {
    state = {
        values: {
            firstName: '',
            lastName: '',
            birthDate: '',
            gender: '',
            country: '',
            callingCode: '',
            phone: '',
            zipCode: '',
            mail: '',
            password: '',
        },
        agreement: false,
        errors: {}
    }

    handleChange = event => {
        const value = event.target.value;
        const type = event.target.type;
        const numberTypeValidation = type === 'number' && value.length < 11
        let regex;

        switch (type) {
            case 'text': regex = /[a-z]/i;
                break;
            case 'number': regex = /[0-9]/;
                break;
            default: regex = /./
        }

        value ?
            event.target.classList.add('is-fill-input')
        : event.target.classList.remove('is-fill-input')

        value
            .split('')
            .every(letter => regex.test(letter)) && (numberTypeValidation || type !== 'number')
            && this.setState({
                ...this.state,
                values: {
                    ...this.state.values,
                    [event.target.name]: value
                }
            }, () => event.target.name === 'country' && this.setState({
                ...this.state,
                values: {
                    ...this.state.values,
                    callingCode: document.querySelector('.calling-code').innerText
                }
            }))
    }

    isValid = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            ...this.state,
            values: {
                ...this.state.values,
                [name]: value
            }
        })

        if (name in this.state.errors) {
            const immutableState = { ...this.state }
            delete immutableState.errors[name];

            this.setState({ immutableState })
        }
    }

    notValid = (event, errorMsg) => {
        const name = event.target.name;

        this.setState({
            ...this.state,
            errors: {
                ...this.state.errors,
                [name]: errorMsg
            }
        })
    }

    handleMail = event => {
        const value = event.target.value;
        const regex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(value);

        value && (
            regex ? this.isValid(event)
                : this.notValid(event, 'Invalid Mail')
       )
    }

    handleDate = event => {
        const value = event.target.value;
        const currentYear = new Date().getFullYear();
        const inputYear = value.split('-')[0]

        console.log(this.state.values.birthDate)

        if (inputYear > currentYear || inputYear < 1900) {
            this.notValid(event, 'Invalid Date');
            return
        }

        this.isValid(event)
    }

    /**
     * Split the password
     * @param {String} pass
     * @param {String} action 
     * @param {function} conditionCB 
     * @returns {Object}
     */
    splitPassword([...pass], action, conditionCB) {
        const splitPass = {
            length: 0,
            [action]: []
        }

        pass
            .reduce((obj, letter) => {
                if (conditionCB(letter)) {
                    obj[action].push(letter)
                }

                return obj;
            }, splitPass)

        splitPass.length = splitPass[action].length;
        splitPass[action] = splitPass[action].sort((a, b) => {
            if (a > b) {
                return 1;
            }

            return -1;
        }).join('');
        
        return splitPass;
    }

    render() {
        return (
            <div className="container">
                <Form
                    values={this.state.values}
                    handleChange={this.handleChange}
                    handleDate={this.handleDate}
                    handleMail={this.handleMail}
                    handleBlur={this.handleBlur}
                    countries={this.state.countries}
                    agree={this.state.agreement}
                />
            </div>
        )
    }
}

export default SignUpForm;