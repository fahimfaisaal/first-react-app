import { Component } from 'react';
import Greet from '../Greet/Greet';
import Input from '../Input/Input';

class Validation extends Component {
    state = {
        firstName: '',
        lastName: '',
        mail: '',
        passWord: '',
        splitPass: {
            specialCharLen: 0,
            specialChar: '',
            upperCaseChar: '',
            upperCaseCharLen: 0,
            lowerCaseChar: '',
            lowerCaseCharLen: 0,
            digitChar: '',
            digitCharLen: 0
        }
    }

    isValid(value, cb) {
        return value
            .split('')
            .every(letter => cb(letter));
    }

    handleOnChange = event => {
        const value = event.target.value;

        if (this.isValid(value, letter => /[a-z]/i.test(letter)) && value.length <= 15) {
            this.setState({
                [event.target.name]: value
            })
        }
    }

    handleOnChangeMail = event => {
        const value = event.target.value;

        this.setState({
            [event.target.name]: value
        })
    }

    handlePassword = event => {
        const value = event.target.value;

        this.setState({
            [event.target.name]: value
        })

        this.charValidator(value, 'specialChar', letter =>  /\W/.test(letter) || letter === '_');
        this.charValidator(value, 'upperCaseChar', letter =>  /[A-Z]/.test(letter));
        this.charValidator(value, 'lowerCaseChar', letter =>  /[a-z]/.test(letter));
        this.charValidator(value, 'digitChar', letter =>  /[0-9]/.test(letter));
    }

    handleMail = event => {
        const value = event.target.value;
        const validMail = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/

        value && (validMail.test(value) ? this.setState({
            mail: value
        }) : this.setState({
            mail: ''
        }, () => alert("Invalid mail")))
    }


    charValidator(value, name, cb) {
        const validSpecialCharObj = this.splitPassword(value, name, letter => cb(letter))

        const { length, [name]: validSpecialChar } = validSpecialCharObj

        this.setState(prevState => ({
            ...prevState,
            splitPass: {
                ...prevState.splitPass,
                [name + 'Len']: length,
                [name]: validSpecialChar
            }
        }))
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
        const { firstName, lastName, mail, password } = this.state;
        const {
            specialChar,
            specialCharLen,
            upperCaseChar,
            upperCaseCharLen,
            lowerCaseChar,
            lowerCaseCharLen,
            digitChar,
            digitCharLen
        } = this.state.splitPass

        return (
            <>
                <div className="input-field">
                    <br />
                    <Input type="text" placeHolder="First name" name="firstName" value={ firstName } change={ this.handleOnChange } />
                    <br />
                    <Input type="text" placeHolder="Last name" name="lastName" value={ lastName } change={ this.handleOnChange }/>
                    <br />
                    <Input type="mail" placeHolder="Gmail" name="mail" value={mail} blur={this.handleMail} change={ this.handleOnChangeMail }/>
                    <br />
                    <Input type="password" placeHolder="Password" name="password" value={ password } change={ this.handlePassword } />
                </div>
                <div className="greet">
                    <Greet firstName={firstName ? "Assalamu-alaikum, " + firstName : ""} />
                    <br />
                    <p>special characters length: { specialCharLen }</p>
                    <p>special characters: { specialChar }</p>
                    <p>uppercase characters length: { upperCaseCharLen }</p>
                    <p>uppercase characters: { upperCaseChar }</p>
                    <p>lowercase characters length: { lowerCaseCharLen }</p>
                    <p>lowercase characters: { lowerCaseChar }</p>
                    <p>digit characters length: { digitCharLen }</p>
                    <p>digit characters: { digitChar }</p>
                </div>
            </>
        )
    }
}

export default Validation;