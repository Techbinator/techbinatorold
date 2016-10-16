import React, {Component, PropTypes} from 'react'
import { Accounts } from 'meteor/accounts-base'

export default class RegisterForm extends Component {

  createUser(e) {
      e.preventDefault()
      //prepare user object in requested format
      const user = {
        'username': this.refs.username.value,
        'email': this.refs.email.value,
        'password': this.refs.password.value
      }
      //use meteor`s crate user method
      Accounts.createUser(user, function(error){
        if( error){
          //in case of error user bert to show it
          Bert.alert( error, 'danger', 'growl-top-right' )
        } else {
          FlowRouter.go('dashboard')
        }
      })
  }

  render() {
    return(
      <form className="m-t" role="form" onSubmit={this.createUser.bind(this)}>
          <div className="form-group">
              <input id="name" ref="username" type="text" className="form-control" placeholder="Username" required="" />
          </div>
          <div className="form-group">
              <input id="email" ref="email" type="email" className="form-control" placeholder="Email" required="" />
          </div>
          <div className="form-group">
              <input id="password" ref="password" type="password" className="form-control" placeholder="Password" required="" />
          </div>
          <button type="submit" className="btn btn-primary block full-width m-b">Submit</button>
      </form>
    )
  }
}
