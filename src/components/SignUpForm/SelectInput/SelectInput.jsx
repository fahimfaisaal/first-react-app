import PropTypes from 'prop-types';

const SelectInput = props => {
    const options = props.options.map(option => <option value={option} key={option}>{ option }</option>);
    
    return (
        <select
            className={`select-input${props.className && ' ' + props.className}${props.isDisabled && ' disabled'}`}
            id={props.name}
            name={props.name}
            onChange={props.handleChange}
            disabled={props.isDisabled}
        >
            <option value="">{`Select ${props.name}`}</option>
            {options}
        </select>
    )
}

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

SelectInput.defaultProps = {
    name: '',
    className: '',
    isDisabled: false,
    options: []
}

export default SelectInput;

