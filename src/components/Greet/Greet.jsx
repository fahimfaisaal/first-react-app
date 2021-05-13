import { Component } from 'react'

class Greet extends Component {
    render() {
        return <h2>{ this.props.firstName }</h2>
    }
}

export default Greet;