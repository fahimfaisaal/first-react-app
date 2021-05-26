import PropTypes from 'prop-types';

const SelectInput = props => {
    const options = props.options.map(option => <option value={option} key={option}>{ option }</option>);
    
    return (
        <select name={props.name} onChange={props.handleChange}>
            <option value="">{`Select ${props.name}`}</option>
            {options}
        </select>
    )
}

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
}

SelectInput.defaultProps = {
    name: '',
    options: []
}

export default SelectInput;

