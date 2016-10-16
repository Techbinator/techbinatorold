import React, {Component, PropTypes} from 'react'
import { Accounts } from 'meteor/accounts-base'

export default class LoginForm extends Component {

  loginUser(e) {
      e.preventDefault()
      //prepare user object in requested format
      const user = {
        'username': this.refs.username.value,
        'password': this.refs.password.value
      }
      Meteor.loginWithPassword(user.username, user.password, function(error){
        if(error !== undefined){
          //in case of error user bert to show it
          Bert.alert( error, 'danger', 'growl-top-right' )
        } else {
          FlowRouter.go('dashboard')
        }
      });
  }

  render() {
    return(
      <form className="m-t" role="form" onSubmit={this.loginUser.bind(this)}>
          <div className="form-group">
              <input type="email" ref="username" className="form-control" placeholder="Username" required="" />
          </div>
          <div className="form-group">
              <input type="password" ref="password" className="form-control" placeholder="Password" required="" />
          </div>
          <button type="submit" className="btn btn-primary block full-width m-b">Login</button>

          <a href="#"><small>Forgot password?</small></a>
      </form>
    )
  }
}
