import { Component } from 'react';
import Form from './Form/Form';
import Util from './Util';

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
            mail: '',
            password: '',
        },
        passwordStrengthStatus: '',
        strongPassStrength: [],
        agreement: false,
        errors: {}
    }

    fillInput(event, value) {
        value ?
            event.target.classList.add('is-fill-input')
        : event.target.classList.remove('is-fill-input')
    }

    passController(strongPassDetections) {
        const strongPassStrength = [...Object.keys(strongPassDetections)]
            .filter(values => strongPassDetections[values] === true);
        
        const matchLength = strongPassStrength.length;
        let passwordStrengthStatus = ['', 'low', 'week', 'medium', 'strong', 'super'];
        
        const passLength = this.state.values.password.length;
        
        if (passLength > 10 && matchLength !== 5) {
            passwordStrengthStatus = passwordStrengthStatus[4];
        } else {
            passwordStrengthStatus = passwordStrengthStatus[matchLength];
        }

        this.setState({ passwordStrengthStatus, strongPassStrength });
    }

    handlePass = event => {
        const password = event.target.value;

        this.setState({
            ...this.state,
            values: {
                ...this.state.values,
                password
            }
        })

        const splitPass = Util.splitString(password);

        const strongPassDetections = {
            length: splitPass.length > 7 ? true : false,
            uppercase: Util.trueFalse(splitPass.uppercase),
            lowercase: Util.trueFalse(splitPass.lowercase),
            digit: Util.trueFalse(splitPass.digit),
            specialChar: Util.trueFalse(splitPass.specialChar)
        }

        this.passController(strongPassDetections);
        this.fillInput(event, password)
    }

    handleChange = event => {
        const value = event.target.value;
        const type = event.target.type;
        const numberTypeValidation = type === 'number' && value.length < 11
        let regex;

        switch (type) {
            case 'text': regex = /[^a-z]/i;
                break;
            case 'number': regex = /[\D]/;
                break;
            default: regex = /[^\s\S]/
        }

        this.fillInput(event, value);

        if (numberTypeValidation || type !== 'number')
            this.setState({
                ...this.state,
                values: {
                    ...this.state.values,
                    [event.target.name]: value.replace(regex, '')
                }
            }, () => event.target.name === 'country' && this.setState({
                ...this.state,
                values: {
                    ...this.state.values,
                    callingCode: document.querySelector('.calling-code').innerText
                }
            }))
    }

    handleConfirmPass = event => {
        const password = this.state.values.password;
        const confirmPassword = event.target.value;

        if (password !== confirmPassword) {
            this.notValid(event, "Password doesn't match!", () => console.log(this.state.errors));
        }

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
        const mailRegExp = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(value);

        this.fillInput(event, value);

        value && (
            mailRegExp ? this.isValid(event)
                : this.notValid(event, 'Invalid Mail')
       )
    }

    handleDate = event => {
        const value = event.target.value;
        const currentYear = new Date().getFullYear();
        const inputYear = value.split('-')[0]

        this.fillInput(event, value);

        if (inputYear > currentYear || inputYear < 1900) {
            this.notValid(event, 'Invalid Date');
            
            return
        }

        this.isValid(event)
    }

    handleCheck = event => {
        const isChecked = event.target.checked;
        const name = event.target.name;

        this.setState({[name]: isChecked})
    }

    render() {
        const {
            values,
            passwordStrengthStatus,
            strongPassStrength,
            countries,
            agreement
        } = this.state;

        return (
            <div className="container">
                <Form
                    values={values}
                    passwordStrengthStatus={passwordStrengthStatus}
                    strongPassStrength={strongPassStrength}
                    countries={countries}
                    agree={agreement}
                    handleChange={this.handleChange}
                    handleDate={this.handleDate}
                    handleMail={this.handleMail}
                    handleBlur={this.handleBlur}
                    handleCheck={this.handleCheck}
                    handlePass={this.handlePass}
                    handleConfirmPass={this.handleConfirmPass}
                />
            </div>
        )
    }
}

export default SignUpForm;