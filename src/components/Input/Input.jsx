import { Component } from 'react';

class Input extends Component {
    render() {
        const { classes, type, value, name, placeHolder, change, focus, blur } = this.props;
        
        return <input type={type}
            placeholder={placeHolder}
            value={value}
            name={name}
            className={classes}
            onChange={change}
            onFocus={focus}
            onBlur={blur} />
    }
}

export default Input;