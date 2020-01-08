import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: props.user
        }
    }

    render() {
        return (
            <div>
                Footer
            </div>
        )
    }
}

export default Footer