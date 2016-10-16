import React from 'react'
import Navigation from '../common/Navigation'
import Footer from '../common/Footer'
import TopHeader from '../common/TopHeader'
import { correctHeight, detectBody } from '../helpers/Template'
import {$} from 'meteor/jquery'

class Main extends React.Component {

    render() {
        // let wrapperClass = "gray-bg " + this.props.location.pathname
        return (
            <div id="wrapper">
              <Navigation/> 

                {/* <div id="page-wrapper" className={wrapperClass}> */}
                <div id="page-wrapper" className="gray-bg">

                    <TopHeader />

                    {this.props.children}

                    <Footer />

                </div>

            </div>

        )
    }

    componentDidMount() {

        // Run correctHeight function on load and resize window event
        $(window).bind("load resize", function() {
            correctHeight()
            detectBody()
        })

        // Correct height of wrapper after metisMenu animation.
        $('.metismenu a').click(() => {
            setTimeout(() => {
                correctHeight()
            }, 300)
        })
    }
}

export default Main
