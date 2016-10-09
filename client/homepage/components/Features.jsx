import React, {Component} from 'react'

export class Features1 extends Component {
  render() {
    return (
      <section id="features" className="container services">
          <div className="row">
              <div className="col-sm-3">
                  <h2>Full responsive</h2>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
              </div>
              <div className="col-sm-3">
                  <h2>LESS/SASS Files</h2>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
              </div>
              <div className="col-sm-3">
                  <h2>6 Charts Library</h2>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
              </div>
              <div className="col-sm-3">
                  <h2>Advanced Forms</h2>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
              </div>
          </div>
      </section>

    )
  }
}

export class Features2 extends Component {
  render() {
    return (
      <section  className="container features">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <div className="navy-line"></div>
                  <h1>Over 40+ unique view<br/> <span className="navy"> with many custom components</span> </h1>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
              </div>
          </div>
          <div className="row">
              <div className="col-md-3 text-center wow fadeInLeft">
                  <div>
                      <i className="fa fa-mobile features-icon"></i>
                      <h2>Full responsive</h2>
                      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  </div>
                  <div className="m-t-lg">
                      <i className="fa fa-bar-chart features-icon"></i>
                      <h2>6 Charts Library</h2>
                      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  </div>
              </div>
              <div className="col-md-6 text-center  wow zoomIn">
                  <img src="img/landing/perspective.png" alt="dashboard" className="img-responsive"/>
              </div>
              <div className="col-md-3 text-center wow fadeInRight">
                  <div>
                      <i className="fa fa-envelope features-icon"></i>
                      <h2>Mail pages</h2>
                      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  </div>
                  <div className="m-t-lg">
                      <i className="fa fa-google features-icon"></i>
                      <h2>AngularJS version</h2>
                      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12 text-center">
                  <div className="navy-line"></div>
                  <h1>Discover great feautres</h1>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
              </div>
          </div>
          <div className="row features-block">
              <div className="col-lg-6 features-text wow fadeInLeft">
                  <small>INSPINIA</small>
                  <h2>Perfectly designed </h2>
                  <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.</p>
                  <a href="" className="btn btn-primary">Learn more</a>
              </div>
              <div className="col-lg-6 text-right wow fadeInRight">
                  <img src="img/landing/dashboard.png" alt="dashboard" className="img-responsive pull-right"/>
              </div>
          </div>
      </section>
    )
  }
}


export class Features3 extends Component {
  render() {
    return (
      <section className="features">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <div className="navy-line"></div>
                      <h1>Even more great feautres</h1>
                      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
                  </div>
              </div>
              <div className="row features-block">
                  <div className="col-lg-3 features-text wow fadeInLeft">
                      <small>INSPINIA</small>
                      <h2>Perfectly designed </h2>
                      <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.</p>
                      <a href="" className="btn btn-primary">Learn more</a>
                  </div>
                  <div className="col-lg-6 text-right m-t-n-lg wow zoomIn">
                      <img src="img/landing/iphone.jpg" className="img-responsive" alt="dashboard"/>
                  </div>
                  <div className="col-lg-3 features-text text-right wow fadeInRight">
                      <small>INSPINIA</small>
                      <h2>Perfectly designed </h2>
                      <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.</p>
                      <a href="" className="btn btn-primary">Learn more</a>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export class Features4 extends Component {
  render() {
    return (
      <section className="features">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <div className="navy-line"></div>
                      <h1>More and more extra great feautres</h1>
                      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-5 col-lg-offset-1 features-text">
                      <small>INSPINIA</small>
                      <h2>Perfectly designed </h2>
                      <i className="fa fa-bar-chart big-icon pull-right"></i>
                      <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.</p>
                  </div>
                  <div className="col-lg-5 features-text">
                      <small>INSPINIA</small>
                      <h2>Perfectly designed </h2>
                      <i className="fa fa-bolt big-icon pull-right"></i>
                      <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-5 col-lg-offset-1 features-text">
                      <small>INSPINIA</small>
                      <h2>Perfectly designed </h2>
                      <i className="fa fa-clock-o big-icon pull-right"></i>
                      <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.</p>
                  </div>
                  <div className="col-lg-5 features-text">
                      <small>INSPINIA</small>
                      <h2>Perfectly designed </h2>
                      <i className="fa fa-users big-icon pull-right"></i>
                      <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.</p>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}
