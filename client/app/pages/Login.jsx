import React,{Component} from 'react'
import 'animate.css'

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
            <form className="m-t" role="form" action="index.html">
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Username" required="" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="" />
                </div>
                <button type="submit" className="btn btn-primary block full-width m-b">Login</button>

                <a href="#"><small>Forgot password?</small></a>
                <p className="text-muted text-center"><small>Do not have an account?</small></p>
                <a className="btn btn-sm btn-white btn-block" href="/register">Create an account</a>
            </form>
            <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
        </div>
      </div>

    )
  }
}
