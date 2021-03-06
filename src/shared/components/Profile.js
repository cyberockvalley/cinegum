import React, { Component } from 'react'
import Header from './Header'
import MenuBar from './MenuBar'
import Footer from './Footer'

class Profile extends Component {
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
                    Welcome Profile
                </section>
                <Footer />
            </div>
        )
    }
}

export default Profile