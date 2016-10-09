import React,{Component} from 'react'
import 'animate.css'
import RegisterForm from '../forms/Register'
import {$} from 'meteor/jquery'
import { Accounts } from 'meteor/accounts-base'

export default class Register extends Component {
  createUser(e) {
      e.preventDefault()
      const
        name = $('#name').val(),
        email = $('#email').val(),
        password = $('#password').val().trim()
      //TODO validation

      Accounts.createUser(
        {
          email: email,
          password: password,
          profile: {
            name: name
          }
        },
        function(error) {
          if (error) {
            Bert.alert( error.reason, 'danger', 'fixed-top', 'fa-frown-o' )
          } else {
            FlowRouter.go('home')
          }
        }
      )
  }
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
            <RegisterForm
              submitBtnLabel="Register"
              submitAction={this.createUser}
            />
            <p className="text-muted text-center"><small>Already have an account?</small></p>
            <a className="btn btn-sm btn-white btn-block" href="/login">Login</a>
            <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
        </div>
    </div>
    )
  }
}
