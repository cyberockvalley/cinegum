import React, { Component } from 'react'
import Header from './Header'
import MenuBar from './MenuBar'
import Footer from './Footer'

class Home extends Component {
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
                    <div className="location" id="home">
                        <h1 id="home">
                            Popular on Cinegum
                        </h1>
                        <div className="box">
                            <a href="">
                                <img alt="" src="/public/res/images/movies/p1.PNG"/>
                            </a>
                            <a href="">
                                <img alt="" src="/public/res/images/movies/p2.PNG"/>
                            </a>
                            <a href="">
                                <img alt="" src="/public/res/images/movies/p3.PNG"/>
                            </a>
                            <a href="">
                                <img alt="" src="/public/res/images/movies/p4.PNG"/>
                            </a>
                            <a href="">
                                <img alt="" src="/public/res/images/movies/p5.PNG"/>
                            </a>
                            <a href="">
                                <img alt="" src="/public/res/images/movies/p6.PNG"/>
                            </a>
                            <a href="">
                                <img alt="" src="/public/res/images/movies/p7.PNG"/>
                            </a>
                            <a href="">
                                <img alt="" src="/public/res/images/movies/p8.PNG"/>
                            </a>
                            <a href="">
                                <img alt="" src="/public/res/images/movies/p9.PNG"/>
                            </a>
                            <a href="">
                                <img alt="" src="/public/res/images/movies/p10.PNG"/>
                            </a>
                            <a href="">
                                <img alt="" src="/public/res/images/movies/p11.PNG"/>
                            </a>
                            <a href="">
                                <img alt="" src="/public/res/images/movies/p12.PNG"/>
                            </a>
                        </div>
                    </div>
                    <h1 id="myList">
                        Trending Now
                    </h1>
                    <div className="box">
                        <a href="">
                            <img alt="" src="/public/res/images/movies/t1.PNG"/>
                        </a>
                        <a href="">
                        <   img alt="" src="/public/res/images/movies/t2.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/t3.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/t4.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/t5.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/t6.PNG"/>
                        </a>
                    </div>
                    <h1 id="tvShows">
                        TV Shows
                    </h1>
                    <div className="box">
                        <a href="">
                            <img alt="" src="/public/res/images/movies/tv1.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/tv2.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/tv3.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/tv4.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/tv5.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/tv6.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/tv7.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/tv8.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/tv9.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/tv10.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/tv11.PNG"/>
                        </a>
                        <a href="">
                        <   img alt="" src="/public/res/images/movies/tv12.PNG"/>
                        </a>
                    </div>
                    <h1 id="movies">
                        Blockbuster Action & Adventure
                    </h1>
                    <div className="box">
                        <a href="">
                        <   img alt="" src="/public/res/images/movies/m1.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/m2.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/m3.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/m4.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/m5.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/m6.PNG"/>
                        </a>
                    </div>
                    <h1 id="originals">
                        Cinegum Originals
                    </h1>
                    <div className="box">
                        <a href="">
                            <img alt="" src="/public/res/images/movies/o1.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/o2.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/o3.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/o4.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/o5.PNG"/>
                        </a>
                        <a href="">
                            <img alt="" src="/public/res/images/movies/o6.PNG"/>
                        </a>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Home