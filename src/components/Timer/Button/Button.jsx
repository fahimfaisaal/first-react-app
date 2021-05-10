import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { title, modifierClass, click } = this.props;
        
        return <button onClick={ click } className={ `btn ${modifierClass}` }>{ title }</button>
    }
}

export default Button;