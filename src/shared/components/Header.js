import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: props.user
        }
    }

    render() {
        return (
            <header>
                <div className="nav-icon back-arrow"></div>
                <div className="logo">
                    <a href="#home" id="logo">
                        <img alt="CineGum" src="/public/logo.png"/>
                    </a>
                </div>
                <div className="nav-end">
                    <form className="search-form">
                        <input type="text" name="query" placeholder="Search" />
                        <button className="searchbox-button fa fa-search" type="submit" name="submit"></button>
                    </form>
                    <div className="after-search">
                        <div className="fa fa-upload"></div>
                        <div className="fa fa-sign-in"></div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header