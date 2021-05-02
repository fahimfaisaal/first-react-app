import React from 'react';

const MyComponent = (props) => {
    const { name } = props;
    return (
        <h4>My name is { name }</h4>
    )
}

export default MyComponent;