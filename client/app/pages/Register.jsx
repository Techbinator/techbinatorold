import React,{Component,findDOMNode} from 'react'
import 'animate.css'
import RegisterForm from '../forms/Register'
import {$} from 'meteor/jquery'


export default class Register extends Component {
  render() {
    return (
      <div className="middle-box text-center loginscreen   animated fadeInDown">
        <div>
            <a href="/">
              <div>
                  <h1 className="logo-name">IN+</h1>
              </div>
            </a>
            <h3>Register to IN+</h3>
            <p>Create account to see it in action.</p>
            <RegisterForm />
            <p className="text-muted text-center"><small>Already have an account?</small></p>
            <a className="btn btn-sm btn-white btn-block" href="/login">Login</a>
            <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
        </div>
    </div>
    )
  }
}
