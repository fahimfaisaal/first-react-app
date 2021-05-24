import PropTypes from 'prop-types';
import TextInput from '../TextInput/TextInput';

const Form = ({ values, handleChange, handleBlur, handleMail }) => (
    <form>
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
                label="Mail"
                value={values.mail}
                handleChange={handleChange}
                handleBlur={handleMail}
            />
        <button type="submit">Submit</button>
    </form>
)

Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func,
    handleMail: PropTypes.func,
}

export default Form;