import React from 'react'
import { Route } from "react-router-dom"
import Home from "../components/Home"
import Trending from "../components/Trending"
import Upload from "../components/Upload"
import Subscriptions from "../components/Subscriptions"
import Notifications from "../components/Notifications"
import Profile from "../components/Profile"
import Search from "../components/Search"
import Saved from "../components/Saved"
import Genre from "../components/Genre"
import Error404 from "../components/Error404"

const ComponentsRoute = (props) => (
    <div className="page-wrapper">
        <Route 
            exact path="/" 
            render={
                (propz) => <Home {...propz} user={props.initialData.user} />
            }
        />
        <Route 
            path="/trending" 
            render={
                (propz) => <Trending {...propz} user={props.initialData.user} />
            }
        />
        <Route 
            path="/upload" 
            render={
                (propz) => <Upload {...propz} user={props.initialData.user} />
            }
        />
        <Route 
            path="/subscriptions" 
            render={
                (propz) => <Subscriptions {...propz} user={props.initialData.user} />
            }
        />
        <Route 
            path="/notifications" 
            render={
                (propz) => <Notifications {...propz} user={props.initialData.user} />
            }
        />
        <Route 
            path="/profile" 
            render={
                (propz) => <Profile {...propz} user={props.initialData.user} />
            }
        />
        <Route 
            path="/search" 
            render={
                (propz) => <Search {...propz} user={props.initialData.user} />
            }
        />
        <Route 
            path="/saved" 
            render={
                (propz) => <Saved {...propz} user={props.initialData.user} />
            }
        />
        <Route 
            path="/genre/:name" 
            render={
                (propz) => <Genre {...propz} user={props.initialData.user} />
            }
        />
        <Route 
            exact path="/error" 
            render={
                (propz) => <Error404 {...propz} user={props.initialData.user} />
            }
        />
        
    </div>
)

export default ComponentsRoute