import React, {Component} from 'react'

export default class Pricing extends Component {
  render() {
    return (
      <section id="pricing" className="pricing">
          <div className="container">
              <div className="row m-b-lg">
                  <div className="col-lg-12 text-center">
                      <div className="navy-line"></div>
                      <h1>App Pricing</h1>
                      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-4 wow zoomIn">
                      <ul className="pricing-plan list-unstyled">
                          <li className="pricing-title">
                              Basic
                          </li>
                          <li className="pricing-desc">
                              Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.
                          </li>
                          <li className="pricing-price">
                              <span>$16</span> / month
                          </li>
                          <li>
                              Dashboards
                          </li>
                          <li>
                              Projects view
                          </li>
                          <li>
                              Contacts
                          </li>
                          <li>
                              Calendar
                          </li>
                          <li>
                              AngularJs
                          </li>
                          <li>
                              <a className="btn btn-primary btn-xs" href="#">Signup</a>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-4 wow zoomIn">
                      <ul className="pricing-plan list-unstyled selected">
                          <li className="pricing-title">
                              Standard
                          </li>
                          <li className="pricing-desc">
                              Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.
                          </li>
                          <li className="pricing-price">
                              <span>$22</span> / month
                          </li>
                          <li>
                              Dashboards
                          </li>
                          <li>
                              Projects view
                          </li>
                          <li>
                              Contacts
                          </li>
                          <li>
                              Calendar
                          </li>
                          <li>
                              AngularJs
                          </li>
                          <li>
                              <strong>Support platform</strong>
                          </li>
                          <li className="plan-action">
                              <a className="btn btn-primary btn-xs" href="#">Signup</a>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-4 wow zoomIn">
                      <ul className="pricing-plan list-unstyled">
                          <li className="pricing-title">
                              Premium
                          </li>
                          <li className="pricing-desc">
                              Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.
                          </li>
                          <li className="pricing-price">
                              <span>$160</span> / month
                          </li>
                          <li>
                              Dashboards
                          </li>
                          <li>
                              Projects view
                          </li>
                          <li>
                              Contacts
                          </li>
                          <li>
                              Calendar
                          </li>
                          <li>
                              AngularJs
                          </li>
                          <li>
                              <a className="btn btn-primary btn-xs" href="#">Signup</a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="row m-t-lg">
                  <div className="col-lg-8 col-lg-offset-2 text-center m-t-lg">
                      <p>*Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. <span className="navy">Various versions</span>  have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}
