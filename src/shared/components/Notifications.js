import React, { Component } from 'react'
import Header from './Header'
import MenuBar from './MenuBar'
import Footer from './Footer'

class Notifications extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: props.user
        }
    }

    render() {
        return (
            <div>
                <Header />
                <MenuBar />
                <section className="main-container can-have-left-menu">
                    Welcome Notifications
                </section>
                <Footer />
            </div>
        )
    }
}

export default Notifications