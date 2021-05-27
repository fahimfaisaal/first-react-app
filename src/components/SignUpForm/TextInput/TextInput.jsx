import PropTypes from 'prop-types';

const TextInput = props => (
    <div className={`text-group${props.groupClass && ' ' + props.groupClass}`}>
        <input
            type={props.type}
            name={props.name}
            id={props.name}
            className={`text-input${props.inputClass && ' ' + props.inputClass}${props.isDisabled ? ' disabled' : ''}`}
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            disabled={props.isDisabled}
        />
        <label htmlFor={props.name}>{props.label}</label>
        
        {props.fontClass && <i className={props.fontClass}></i>}

        {props.errorMessage && (
            <div className="error-block">
                <p className="error-message">{ props.errorMessage }</p>
            </div>
        )}
    </div>
)

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    isDisabled: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    inputClass: PropTypes.string,
    fontClass: PropTypes.string,
    groupClass: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func
}

TextInput.defaultProps = {
    label: '',
    type: 'text',
    groupClass: '',
    inputClass: '',
    fontClass: '',
    errorMessage: '',
    isDisabled: false
}

export default TextInput;