import PropTypes from 'prop-types';

const RadioInput = props => (
    <label className="radio-group">
        <input
            type="radio"
            className="radio-input"
            name={props.name}
            id={props.value}
            value={props.value}
            onChange={props.onChange}
        />
        <span htmlFor={props.value}>{props.label}</span>
    </label>
)

RadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default RadioInput;