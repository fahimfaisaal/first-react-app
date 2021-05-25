import PropTypes from 'prop-types';

const TextInput = props => (
    <div className="text-group">
        <input
            type={props.type}
            name={props.name}
            id={props.name}
            className={`text-input ${props.inputClass}`}
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
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
    value: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    inputClass: PropTypes.string,
    fontClass: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func
}

TextInput.defaultProps = {
    label: '',
    type: 'text',
    inputClass: '',
    fontClass: '',
    errorMessage: ''
}

export default TextInput;