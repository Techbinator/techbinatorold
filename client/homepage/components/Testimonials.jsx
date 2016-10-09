import React, {Component} from 'react'

export default class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials" className="navy-section testimonials" style={{marginTop: 0}}>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center wow zoomIn">
                      <i className="fa fa-comment big-icon"></i>
                      <h1>
                          What our users say
                      </h1>
                      <div className="testimonials-text">
                          <i>"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."</i>
                      </div>
                      <small>
                          <strong>12.02.2014 - Andy Smith</strong>
                      </small>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}
