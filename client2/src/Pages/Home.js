import React from 'react';
import ViewProducts from '../components/ViewProducts';
import LoginButton from '../components/LoginButton';
import logo from '../logo.svg';
// import { Link } from 'react-router';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends React.Component {
  render() {
  return (
    <div className="App">

    <div id="overlayer"></div>
    <div className="loader">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>

    <div className="site-wrap">



      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>


      <div className="site-navbar-wrap js-site-navbar bg-white" style={{position: "fixed", boxShadow: "0 5px 5px rgba(0,0,0,0.2)"}}>

        <div className="container">
          <div className="site-navbar bg-light">
            <div className="row align-items-center">
              <div className="col-2">
                <h2 className="mb-0 site-logo"><a href="/"><img src="images/logo.jpg" width="250" height="55"/></a></h2>
              </div>
              <div className="col-10">
                <nav className="site-navigation text-right" role="navigation">
                  <div className="container">
                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li className="active"><a href="index.html">Home</a></li>
                      <li className="has-children">
                        <a href="about.html">About</a>
                        <ul className="dropdown arrow-top">
                          <li><a href="testimonials.html">Testimonials</a></li>
                          <li><a href="gallery.html">Gallery</a></li>
                          <li><a href="faq.html">Forum</a></li>
                          <li><a href="why-choose-us.html">Why Choose Us</a></li>
                        </ul>
                      </li>
                      <li><a href="services.html">Services</a></li>
                      <li><a href="contact.html">Contact</a></li>
                      <li><LoginButton /></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slide-one-item home-slider owl-carousel">

        <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: "url('images/hero_2.jpg')"}} data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 text-center" data-aos="fade">
                <h1 className="font-secondary  font-weight-bold text-uppercase">Welcome to Consider Herbs</h1>
                <a href="/about" style={{backgroundColor: "black"}}>ROUTING IN REACT2</a><br/>
                <Link to="/about">ROUTING IN REACT</Link>
                <ViewProducts/>
              </div>
            </div>
          </div>
        </div>

        <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: "url('images/hero_1.jpg')"}} data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 text-center" data-aos="fade">
                <h1 className="font-secondary font-weight-bold text-uppercase">Benefits of Herbs Treatment</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slant-1"></div>

      <div className="site-section first-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center" data-aos="fade">
              <span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
              <h2 className="site-section-heading text-uppercase text-center font-secondary">Herb Medicine</h2>
            </div>
          </div>
          <div className="row border-responsive">
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right" data-aos="fade-up" data-aos-delay="">
              <div className="text-center">
                <span className="flaticon-money-bag-with-dollar-symbol display-4 d-block mb-3 text-primary"></span>
                <h3 className="text-uppercase h4 mb-3">Cheaper</h3>
                <p>Herb medicine is usually cheaper than traditional methods</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <span className="flaticon-bar-chart display-4 d-block mb-3 text-primary"></span>
                <h3 className="text-uppercase h4 mb-3">Analytics</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <span className="flaticon-medal display-4 d-block mb-3 text-primary"></span>
                <h3 className="text-uppercase h4 mb-3">3 Years Experience</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <span className="flaticon-box display-4 d-block mb-3 text-primary"></span>
                <h3 className="text-uppercase h4 mb-3">Free Package</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    <div className="site-half">
      <div className="img-bg-1" style={{backgroundImage: "url('images/img_4.jpg')"}} data-aos="fade"></div>
      <div className="container">
        <div className="row no-gutters align-items-stretch">
          <div className="col-lg-5 ml-lg-auto py-5">
            <span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
            <h2 className="site-section-heading text-uppercase font-secondary mb-5">Clean Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis nesciunt veniam qui fugit doloremque numquam quod.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam nesciunt recusandae repellendus asperiores amet.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="site-half block">
      <div className="img-bg-1 right" style={{backgroundImage: "url('images/img_5.jpg')"}} data-aos="fade"></div>
      <div className="container">
        <div className="row no-gutters align-items-stretch">
          <div className="col-lg-5 mr-lg-auto py-5">
            <span className="caption d-block mb-2 font-secondary font-weight-bold">Easy To Use Templates</span>
            <h2 className="site-section-heading text-uppercase font-secondary mb-5">Free HTML5 Templates</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis nesciunt veniam qui fugit doloremque numquam quod.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam nesciunt recusandae repellendus asperiores amet.</p>
          </div>
        </div>
      </div>
    </div>


    <div className="site-section ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="caption d-block mb-2 font-secondary font-weight-bold">Products &amp; Services</span>
              <h2 className="site-section-heading text-uppercase text-center font-secondary">Share Before You Download</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 block-13 nav-direction-white">
              <div className="nonloop-block-13 owl-carousel">
                <div className="media-image">
                  <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
                  <div className="media-image-body">
                    <h2 className="font-secondary text-uppercase">Pixel Perfect</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                  </div>
                </div>
                <div className="media-image">
                  <img src="images/img_2.jpg" alt="Image" className="img-fluid"/>
                  <div className="media-image-body">
                    <h2 className="font-secondary text-uppercase">Template Under CCA 3.0 Unported</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                  </div>
                </div>
                <div className="media-image">
                  <img src="images/img_3.jpg" alt="Image" className="img-fluid"/>
                  <div className="media-image-body">
                    <h2 className="font-secondary text-uppercase">Useful Web Templates</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                  </div>
                </div>
                <div className="media-image">
                  <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
                  <div className="media-image-body">
                    <h2 className="font-secondary text-uppercase">HTML5 / CSS3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                  </div>
                </div>
                <div className="media-image">
                  <img src="images/img_4.jpg" alt="Image" className="img-fluid"/>
                  <div className="media-image-body">
                    <h2 className="font-secondary text-uppercase">Bootstrap 4</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                  </div>
                </div>
                <div className="media-image">
                  <img src="images/img_5.jpg" alt="Image" className="img-fluid"/>
                  <div className="media-image-body">
                    <h2 className="font-secondary text-uppercase">SCSS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="site-section section-counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p className="mb-5"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></p>
            </div>
            <div className="col-lg-5 ml-auto">
              <h2 className="site-section-heading mb-3 font-secondary text-uppercase">Free Templates By Colorlib</h2>
              <p className="mb-5">Ullam ut modi cum voluptatibus atque nulla quidem maxime enim animi cupiditate, mollitia. </p>

              <div className="row">
                <div className="col-lg-6">
                  <div className="counter">
                    <span className="caption">Current Downloads</span>
                    <span className="number" data-number="49020">0</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="counter">
                    <span className="caption">Number of Templates</span>
                    <span className="number" data-number="275">0</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="site-section block-14 nav-direction-white">

        <div className="container">

          <div className="row mb-5">
            <div className="col-md-12">
              <h2 className="site-section-heading text-center text-uppercase">Testimonials</h2>
            </div>
          </div>

          <div className="nonloop-block-14 owl-carousel">


              <div className="d-block block-testimony mx-auto text-center">
                <div className="person w-25 mx-auto mb-4">
                  <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"/>
                </div>
                <div>
                  <h2 className="h5 mb-4">Katie Johnson</h2>
                  <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                </div>
              </div>

              <div className="d-block block-testimony mx-auto text-center">
                <div className="person w-25 mx-auto mb-4">
                  <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"/>
                </div>
                <div>
                  <h2 className="h5 mb-4">Jun Mars</h2>
                  <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                </div>
              </div>

              <div className="d-block block-testimony mx-auto text-center">
                <div className="person w-25 mx-auto mb-4">
                  <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"/>
                </div>
                <div>
                  <h2 className="h5 mb-4">Shane Holmes</h2>
                  <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                </div>
              </div>

              <div className="d-block block-testimony mx-auto text-center">
                <div className="person w-25 mx-auto mb-4">
                  <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"/>
                </div>
                <div>
                  <h2 className="h5 mb-4">Mark Johnson</h2>
                  <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                </div>
              </div>

          </div>

        </div>

      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12" data-aos="fade">
              <h2 className="site-section-heading text-center text-uppercase">Recent Blog Posts</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
              <div className="media-image">
                <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></a>
                <div className="media-image-body">
                  <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You Learn HTML & CSS in 2019?</a></h2>
                  <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="200">
              <div className="media-image">
                <a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid"/></a>
                <div className="media-image-body">
                  <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You Learn HTML & CSS in 2019?</a></h2>
                  <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="300">
              <div className="media-image">
                <a href="single.html"><img src="images/img_3.jpg" alt="Image" className="img-fluid"/></a>
                <div className="media-image-body">
                  <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You Learn HTML & CSS in 2019?</a></h2>
                  <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-primary">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-center mb-3 mb-md-0">
              <h2 className="text-uppercase text-white mb-4" data-aos="fade-up">Try For Your Next Project</h2>
              <a href="#" className="btn btn-bg-primary font-secondary text-uppercase" data-aos="fade-up" data-aos-delay="100">Contact Us</a>
            </div>
          </div>
        </div>
      </div>




      <footer className="site-footer bg-dark">
        <div className="container">


          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h3 className="footer-heading mb-4 text-white">About</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet.</p>
              <p><a href="#" className="btn btn-primary text-white px-4">Read More</a></p>
            </div>
            <div className="col-md-5 mb-4 mb-md-0 ml-auto">
              <div className="row mb-4">
                <div className="col-md-6">
                  <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
                    <ul className="list-unstyled">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contacts</a></li>
                      <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
                <div className="col-md-6">
                  <h3 className="footer-heading mb-4 text-white">Free Templates</h3>
                    <ul className="list-unstyled">
                      <li><a href="#">HTML5 / CSS3</a></li>
                      <li><a href="#">Clean Design</a></li>
                      <li><a href="#">Responsive</a></li>
                      <li><a href="#">Multi Purpose Template</a></li>
                    </ul>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-12">
                <h3 className="footer-heading mb-4 text-white">Stay up to date</h3>
                <form action="#" className="d-flex footer-subscribe">
                  <input type="text" className="form-control rounded-0" placeholder="Enter your email"/>
                  <input type="submit" className="btn btn-primary rounded-0" value="Subscribe"/>
                </form>
              </div>
              </div>
            </div>


            <div className="col-md-2">

              <div className="row">
              <div className="col-md-12"><h3 className="footer-heading mb-4 text-white">Social Icons</h3></div>
                <div className="col-md-12">
                  <p>
                    <a href="#" className="pb-2 pr-2 pl-0"><span className="icon-facebook"></span></a>
                    <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                    <a href="#" className="p-2"><span className="icon-instagram"></span></a>
                    <a href="#" className="p-2"><span className="icon-vimeo"></span></a>

                  </p>
                </div>
            </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Project made with <i className="icon-heart text-danger" aria-hidden="true"></i> by Short On Time.
              </p>


            </div>

          </div>
        </div>
      </footer>
    </div>
    </div>
  );
  }
}

export default Home;
