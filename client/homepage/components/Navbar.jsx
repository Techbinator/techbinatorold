import React, {Component} from 'react'
import { topNavScrolling, pageScrolling, cbpAnimatedHeader } from '../helpers/scrollHelpers';


export default class Navbar extends Component {

  componentDidMount(){
    topNavScrolling()
    pageScrolling()
    new cbpAnimatedHeader
   }
  render() {
    return (
      <div className="navbar-wrapper">
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">WEBAPPLAYERS</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a className="page-scroll" href="#page-top">Home</a></li>
                            <li><a className="page-scroll" href="#features">Features</a></li>
                            <li><a className="page-scroll" href="#team">Team</a></li>
                            <li><a className="page-scroll" href="#testimonials">Testimonials</a></li>
                            <li><a className="page-scroll" href="#pricing">Pricing</a></li>
                            <li><a className="page-scroll" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
    )
  }
}
