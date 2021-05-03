import { Component } from 'react';

class Child extends Component {
    render() {
        this.props.func(this);

        return <div className="children">
            <h2>I am children heading!</h2>
            {this.props.children}
        </div>
    }
}

export default Child;