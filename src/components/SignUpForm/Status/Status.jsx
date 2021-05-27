import PropTypes from 'prop-types';

const Status = ({value, className}) => (
    <span className={`status${className && ' ' + className}`}>{value}</span>
)

Status.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string.isRequired
}

Status.defaultProps = {
    className: ''
}

export default Status;
