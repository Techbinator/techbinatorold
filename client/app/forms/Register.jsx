import React, {Component, PropTypes} from 'react'

export default class RegisterForm extends Component {

  render() {
    return(
      <form className="m-t" role="form" onSubmit={this.props.submitAction}>
          <div className="form-group">
              <input id="name" type="text" className="form-control" placeholder="Name" required="" />
          </div>
          <div className="form-group">
              <input id="email" type="email" className="form-control" placeholder="Email" required="" />
          </div>
          <div className="form-group">
              <input id="password" type="password" className="form-control" placeholder="Password" required="" />
          </div>
          <button type="submit" className="btn btn-primary block full-width m-b">{this.props.submitBtnLabel}</button>
      </form>
    )
  }
}
RegisterForm.propTypes = {
  submitAction: React.PropTypes.func.isRequired
}

RegisterForm.defaultProps = {
    submitBtnLabel: "Submit"
}
