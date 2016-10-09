import React, {Component} from 'react'

export default class Team extends Component {
  render() {
    return (
      <section id="team" className="gray-section team">
          <div className="container">
              <div className="row m-b-lg">
                  <div className="col-lg-12 text-center">
                      <div className="navy-line"></div>
                      <h1>Our Team</h1>
                      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-4 wow fadeInLeft">
                      <div className="team-member">
                          <img src="img/landing/avatar3.jpg" className="img-responsive img-circle img-small" alt=""/>
                          <h4><span className="navy">Amelia</span> Smith</h4>
                          <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus. </p>
                          <ul className="list-inline social-icon">
                              <li><a href="#"><i className="fa fa-twitter"></i></a>
                              </li>
                              <li><a href="#"><i className="fa fa-facebook"></i></a>
                              </li>
                              <li><a href="#"><i className="fa fa-linkedin"></i></a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-sm-4">
                      <div className="team-member wow zoomIn">
                          <img src="img/landing/avatar1.jpg" className="img-responsive img-circle" alt=""/>
                          <h4><span className="navy">John</span> Novak</h4>
                          <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.</p>
                          <ul className="list-inline social-icon">
                              <li><a href="#"><i className="fa fa-twitter"></i></a>
                              </li>
                              <li><a href="#"><i className="fa fa-facebook"></i></a>
                              </li>
                              <li><a href="#"><i className="fa fa-linkedin"></i></a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-sm-4 wow fadeInRight">
                      <div className="team-member">
                          <img src="img/landing/avatar2.jpg" className="img-responsive img-circle img-small" alt=""/>
                          <h4><span className="navy">Peter</span> Johnson</h4>
                          <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.</p>
                          <ul className="list-inline social-icon">
                              <li><a href="#"><i className="fa fa-twitter"></i></a>
                              </li>
                              <li><a href="#"><i className="fa fa-facebook"></i></a>
                              </li>
                              <li><a href="#"><i className="fa fa-linkedin"></i></a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}
