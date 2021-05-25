import PropTypes from 'prop-types';
import RadioInput from '../RadioInput/RadioInput';
import TextInput from '../TextInput/TextInput';

const Form = ({ values, agree, handleChange, handleBlur, handleMail }) => (
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

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agree: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func,
    handleMail: PropTypes.func,
}

export default Form;