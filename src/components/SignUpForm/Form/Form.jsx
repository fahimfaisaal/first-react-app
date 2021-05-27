import PropTypes from 'prop-types';
import { Component } from 'react';
import RadioInput from '../RadioInput/RadioInput';
import SelectInput from '../SelectInput/SelectInput';
import Status from '../Status/Status';
import TextInput from '../TextInput/TextInput';
import Util from '../Util';

class Form extends Component {
    state = {
        loading: true,
        callingCodes: {}
    }

    genderEmojis = {
        male: '👳🏻‍♂️',
        female: '🧕🏻',
        other: '😶'
    }

    async componentDidMount() {
        const url = 'https://restcountries.eu/rest/v2/all';
        const response = await fetch(url);
        const allCountries = await response.json();

        this.setState({
            loading: false,
            callingCodes: allCountries.reduce((acc, country) => {
                acc[country.name] = '+' + country.callingCodes[0];

                return acc;
            }, {})
        })
    }

    render() {
        const { values, agree, handleChange, handleDate, handleMail, handleCheck } = this.props;
        console.log(agree)
        return (
            <form>
                <h2 className="header">Sign Up</h2>

                <div className="names">
                    <TextInput
                        name="firstName"
                        label="First Name"
                        value={values.firstName}
                        handleChange={handleChange}
                    />
                    <TextInput
                        name="lastName"
                        label="Last Name"
                        value={values.lastName}
                        handleChange={handleChange}
                    />
                </div>

                <TextInput
                    type="date"
                    name="birthDate"
                    label="Birth date"
                    groupClass="birth-date"
                    value={values.birthDate}
                    handleChange={handleChange}
                    handleBlur={(values.birthDate !== '') ? handleDate : null}
                />

                 <div className="gender">     
                    <div className="gender-items">
                        <RadioInput
                            name="gender"
                            value="Male"
                            label="Male"
                            onChange={handleChange}
                        />
                        <RadioInput
                            name="gender"
                            value="Female"
                            label="Female"
                            onChange={handleChange}
                        />
                        <RadioInput 
                            name="gender" 
                            value="Other" 
                            label="Other" 
                            onChange={handleChange}
                        />
                    </div>
                    
                    <Status
                        className="gender-status"
                        value={
                            values.gender ?
                                this.genderEmojis[values.gender.toLowerCase()]
                                : '----'
                        }
                    />
                </div>

                {!this.state.loading &&
                    <SelectInput
                    name="country"
                    className="select-country"
                    options={Object.keys(this.state.callingCodes)}
                    handleChange={handleChange}
                    isDisabled={!Util.trueFalse(values.gender)}
                    />
                }

                <div className="phone-input">
                    <Status
                        className="calling-code"
                        value={
                            values.country ?
                                this.state.callingCodes[values.country]
                                : '----'
                        }
                    />

                    <TextInput
                        type="number"
                        label="Phone"
                        name="phone"
                        groupClass="phone-group"
                        value={values.phone}
                        handleChange={handleChange}
                        isDisabled={!Util.trueFalse(values.country)}
                    />
                </div>

                <TextInput
                    type="email"
                    name="mail"
                    label="example@gmail.com"
                    value={values.mail}
                    handleChange={handleChange}
                    handleBlur={handleMail}
                    isDisabled={!Util.trueFalse(values.phone)}
                />

                <div className="password">
                    <TextInput
                        type="password"
                        name="password"
                        label="Password"
                        value={values.password}
                        handleChange={handleChange}
                        isDisabled={!Util.trueFalse(values.mail)}
                    />
                    <TextInput
                        type="password"
                        name="confirmPassword"
                        label="Confirm password"
                        handleChange={handleChange}
                        isDisabled={
                            !(Util.trueFalse(values.mail) && Util.trueFalse(values.password))
                        }
                    />
                </div>

                <div className="agreement">
                    <label className="checkbox bounce">
                        <input
                            type="checkbox"
                            name="agreement"
                            onChange={handleCheck}
                        />
                        <svg viewBox="0 0 21 21">
                            <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                        </svg>
                    </label>
                    <label className={!agree ? 'agreement-unchecked-label' : ''}>I accept terms and conditions</label>
                </div>
                
                <button type="submit" disabled={!agree}>Submit</button>
            </form>
        )
   }
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agree: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func,
    handleMail: PropTypes.func,
}

export default Form;