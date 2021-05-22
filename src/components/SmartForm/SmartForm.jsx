import { Component } from 'react';
import Country from './Country/Country';
import Gender from './Gender/Gender';
import Skills from './Skills/Skills';

class SmartForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        mail: '',
        birthDate: '',
        country: '',
        gender: '',
        skills: [],
        agree: false
    }

    handleOnChange = event => {
        const type = event.target.type;
        const value = event.target.value;
        let regex = /./;

        if (type === 'text') {
            regex = /[a-z]/i;
        }

       value.split("").every(letter => regex.test(letter)) && this.setState({
            [event.target.name]: value
        })
    }

    handleMail = event => {
        const value = event.target.value;
        const validMail = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/

        value && (
            validMail.test(value) ? this.setState({
                mail: value
            })
            : this.setState({
                mail: ''
            }, () => alert("Invalid mail"))
        )
    }

    handleSkills = event => {
        const isChecked = event.target.checked;
        const value = event.target.value;
        const { skills } = this.state

        isChecked && this.setState({
            skills: [...skills, value]
        })

        !isChecked && this.setState({
            skills: skills.filter(skill => skill !== value)
        })
    }

    handleTerms = event => {
        this.setState({
            agree: event.target.checked
        })
    }

    handleSubmit = event => {
        const state = this.state;
        event.preventDefault();
        
        console.log(state);

        localStorage.setItem('state', JSON.stringify(state));

        event.target.reset();
        this.setState(this.resetObject(state));
    }

    handleDate = event => {
        let value = event.target.value;
        const currentYear = new Date().getFullYear();
        const inputYear = value.split("-")[0]

        if (inputYear < 1900 || inputYear > currentYear) {
            value = '';
        }

        this.setState({
            [event.target.name]: value
        }, () => !value && alert('Invalid Date!'))
    }

    sObject(val) {
        const type = typeof val;
  
        if (val === null) {
            return false;
        }
        
        if (type === 'object') {
            return true
        }
        
        return false
    }

    resetObject(object) {
        const resetObj = {};
        
        for (let key in object) {
            resetObj[key] = (
                typeof object[key] === 'string' ? ''
                    : typeof object[key] === 'number' ? 0
                        : typeof object[key] === 'bigint' ? 0n
                            : typeof object[key] === 'boolean' ? false
                                : Array.isArray(object[key]) ? []
                                    : this.isObject(object[key]) ? this.resetObject(object[key])
                                        : null
            );
        }
        
        return resetObj;
    }


    render() {
        const { firstName, lastName, mail, birthDate, country, agree } = this.state;

        return (
            <form className="form-container" onSubmit={this.handleSubmit}>
                <h1>Enter Your Details and get an Object</h1>

                <input className="form-control" type="text" name="firstName" placeholder="First name" value={firstName} onChange={this.handleOnChange} />
                <br />
                <input className="form-control" type="text" name="lastName" placeholder="Last name" value={lastName} onChange={this.handleOnChange} />
                <br />
                <input className="form-control" type="email" name="mail" placeholder="Email" value={mail} onChange={this.handleOnChange} onBlur={this.handleMail} />
                <br />
                <input className="form-control" type="date" name="birthDate" value={birthDate} onChange={this.handleOnChange} onBlur={this.handleDate} />
                <br />

                <Country country={country} handleOnChange={this.handleOnChange} />
                
                <Gender handleOnChange={this.handleOnChange} />
                
                <Skills handleSkills={this.handleSkills} />
                
                <div className="terms">
                    <input type="checkbox" name="terms" checked={ agree } onChange={this.handleTerms} />
                    <label htmlFor="terms">I'm agree to all terms and condition</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default SmartForm;