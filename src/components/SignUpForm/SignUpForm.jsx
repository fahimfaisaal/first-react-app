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
            phone: '',
            mail: '',
            password: '',
        },
        agreement: false,
        errors: {}
    }

    // handleBlur = event => {
    //     const value = event.target.value;
    //     const id = event.target.id;

    // }

    handleChange = event => {
        const value = event.target.value;
        const type = event.target.type;
        let regex;

        switch (type) {
            case 'text': regex = /[a-z]/i;
                break;
            case 'number': regex = /[0-9]/;
                break;
            default: regex = /./
        }

        value
            .split('')
            .every(letter => regex.test(letter)) && this.setState({
                ...this.state,
                values: {
                    ...this.state.values,
                    [event.target.name]: value
                }
        })
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

        const immutableState = { ...this.state }
        delete immutableState.errors[name];

        this.setState({ immutableState })
    }

    notValid = event => {
        const name = event.target.name;

        this.setState({
            ...this.state,
            errors: {
                ...this.state.errors,
                [name]: `Invalid ${name}`
            }
        })
    }

    handleMail = event => {
        const value = event.target.value;
        const regex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(value);

        value && (
            regex ? this.isValid(event)
                : this.notValid(event)
       )
    }

    handleDate = event => {
        const value = event.target.value;
        const currentYear = new Date().getFullYear();
        const inputYear = value.split('-')[0]

        if (inputYear > currentYear || inputYear < 1900) {
            this.setState({
                ...this.state,
                errors: {
                    ...this.state.errors,
                    [event.target.name]: 'Invalid year ' +  inputYear
                }
            })

            return
        }

        this.setState({
            ...this.state,
            values: {
                ...this.state.values,
                [event.target.name]: value 
            }
        })
        
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
                    handleMail={this.handleMail}
                    handleBlur={this.handleBlur}
                    agree={this.state.agreement}
                />
            </div>
        )
    }
}

export default SignUpForm;