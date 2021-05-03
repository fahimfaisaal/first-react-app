import { Component } from 'react';
import Child from './Child';

class Parent extends Component {

    getContext(context) {
        console.log('I am from ', context)
    }

    render() {
        this.getContext(this);

        return <div className="parent">
            <h1>Hello i am parent Heading!</h1>
            <Child func={this.getContext} />
        </div>
    }
}

export default Parent;