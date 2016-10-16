import React,{Component} from 'react'
import 'animate.css'
import LoginForm from '../forms/Login'

export default class Login extends Component {

  render() {
    return (
      <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <a href="/">
              <div>
                  <h1 className="logo-name">IN+</h1>
              </div>
            </a>
            <h3>Welcome to IN+</h3>
            <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.
            </p>
            <p>Login in. To see it in action.</p>
            <LoginForm />
            <p className="text-muted text-center"><small>Do not have an account?</small></p>
            <a className="btn btn-sm btn-white btn-block" href="/register">Create an account</a>
            <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
        </div>
      </div>

    )
  }
}
