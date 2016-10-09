import React, {Component} from 'react'

export default class Comments extends Component {
  render() {
    return (
      <section className="comments gray-section" style={{marginTop: 0}}>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <div className="navy-line"></div>
                      <h1>What our partners say</h1>
                      <p>Donec sed odio dui. Etiam porta sem malesuada. </p>
                  </div>
              </div>
              <div className="row features-block">
                  <div className="col-lg-4">
                      <div className="bubble">
                          "Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                      </div>
                      <div className="comments-avatar">
                          <a href="" className="pull-left">
                              <img alt="image" src="img/landing/avatar3.jpg"/>
                          </a>
                          <div className="media-body">
                              <div className="commens-name">
                                  Andrew Williams
                              </div>
                              <small className="text-muted">Company X from California</small>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="bubble">
                          "Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                      </div>
                      <div className="comments-avatar">
                          <a href="" className="pull-left">
                              <img alt="image" src="img/landing/avatar1.jpg"/>
                          </a>
                          <div className="media-body">
                              <div className="commens-name">
                                  Andrew Williams
                              </div>
                              <small className="text-muted">Company X from California</small>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="bubble">
                          "Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                      </div>
                      <div className="comments-avatar">
                          <a href="" className="pull-left">
                              <img alt="image" src="img/landing/avatar2.jpg"/>
                          </a>
                          <div className="media-body">
                              <div className="commens-name">
                                  Andrew Williams
                              </div>
                              <small className="text-muted">Company X from California</small>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}
