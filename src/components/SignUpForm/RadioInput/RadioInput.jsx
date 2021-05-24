import PropTypes from 'prop-types';

const RadioInput = props => (
    <div className="radio-input">
        <input
            type="radio"
            name={props.name}
            id={props.name}
            value={props.value}
            onChange={props.onChange}
        />
        <label htmlFor={props.name}>{props.label}</label>
    </div>
)

RadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default RadioInput;