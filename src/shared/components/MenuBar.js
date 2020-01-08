import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MenuBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: props.user
        }
    }

    render() {
        return (
            <div class="menu-bar">
                <Link to="/" class="menu-bar-item active">
                    <div className="fa fa-2x fa-home"></div>
                    <div className="title">Home</div>
                </Link>
                <Link to="/trending" class="menu-bar-item">
                    <div className="fa fa-2x fa-fire"></div>
                    <div className="title">Trending</div>
                </Link>
                <Link to="/saved" class="menu-bar-item">
                    <div className="fa fa-2x fa-heart"></div>
                    <div className="title">Saved</div>
                </Link>
                <Link to="/subscriptions" class="menu-bar-item">
                    <div className="fa fa-2x fa-th-list"></div>
                    <div className="title">Subscriptions</div>
                    <i class="fas fa-clipboard-list"></i>
                </Link>
                <Link to="/notifications" class="menu-bar-item">
                    <div className="fa fa-2x fa-bell"></div>
                    <div className="title">Notifications</div>
                </Link>
            </div>
        )
    }
}

export default MenuBar