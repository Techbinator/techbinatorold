import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import {$} from 'meteor/jquery'
import MetisMenu from 'metismenu'


class Navigation extends Component {

    componentDidMount() {
        $("#side-menu").metisMenu()
    }

    activeRoute(routeName) {
        return FlowRouter.current().route.name === routeName ? "active" : ""
    }

    secondLevelActive(routeName) {
        return FlowRouter.current().route.name === routeName ? "nav nav-second-level collapse in" : "nav nav-second-level collapse"
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> <span>
                             </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Example user</strong>
                             </span> <span className="text-muted text-xs block">Example position<b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="#"> Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                IN+
                            </div>
                        </li>
                        <li className={this.activeRoute("dashboard")}>
                            <a href="/app"><i className="fa fa-diamond"></i> <span className="nav-label">Dashboard</span></a>
                        </li>
                        <li className={this.activeRoute("minor")}>
                            <a href="/app"><i className="fa fa-th-large"></i> <span className="nav-label">Minor view</span></a>
                        </li>
                        <li className="">
                            <a href="#"><i className="fa fa-edit"></i> <span className="nav-label">Forms</span><span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse">
                                <li><a href="form_basic.html">Basic form</a></li>
                                <li><a href="form_advanced.html">Advanced Plugins</a></li>
                                <li><a href="form_wizard.html">Wizard</a></li>
                                <li><a href="form_file_upload.html">File Upload</a></li>
                                <li className="active"><a href="form_editors.html">Text Editor</a></li>
                                <li><a href="form_autocomplete.html">Autocomplete</a></li>
                                <li><a href="form_markdown.html">Markdown</a></li>
                            </ul>
                        </li>
                    </ul>

            </nav>
        )
    }
}

export default Navigation
