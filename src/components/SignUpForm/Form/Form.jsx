import PropTypes from 'prop-types';
import { Component } from 'react';
import RadioInput from '../RadioInput/RadioInput';
import SelectInput from '../SelectInput/SelectInput';
import TextInput from '../TextInput/TextInput';
import Util from '../Util';

class Form extends Component {
    state = {
        loading: true,
        callingCodes: {}
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
        const { values, agree, handleChange, handleDate, handleMail } = this.props;

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

                {!this.state.loading &&
                    <SelectInput
                    name="country"
                    options={Object.keys(this.state.callingCodes)}
                    handleChange={handleChange}
                    />
                }

                <div className="phone-input">
                    <span className="calling-code">{values.country ? this.state.callingCodes[values.country] : '+' }</span>
                    <TextInput
                        type="number"
                        label="Phone"
                        name="phone"
                        groupClass="phone-group"
                        value={values.phone}
                        isDisabled={!Util.trueFalse(values.country)}
                        handleChange={handleChange}
                    />
                </div>

                <TextInput
                    type="email"
                    name="mail"
                    label="example@gmail.com"
                    value={values.mail}
                    handleChange={handleChange}
                    handleBlur={handleMail}
                />
                 
                <div className="gender">
                    <p>Gender :</p>
                    <RadioInput name="gender" value="Male" label="Male" onChange={handleChange}/>
                    <RadioInput name="gender" value="Female" label="Female" onChange={handleChange}/>
                    <RadioInput name="gender" value="Other" label="Other" onChange={handleChange}/>
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