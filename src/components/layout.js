import React, { Component } from 'react'
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import $ from 'jquery'

import "./layout.css"

class Layout extends Component {

  componentDidMount() {
    const navbarCollapse = function() {
      const m = $("#mainNav")
      if (m.offset().top > 100) {
        m.addClass("navbar-shrink")
      } else {
        m.removeClass("navbar-shrink")
      }
    }
    navbarCollapse()

    $(window)
      .off('scroll.Layout')
      .on('scroll.Layout', navbarCollapse)

    // $('#navbarResponsive a')
    //   .on('click.smoothscroll', function(e){
    //     if (this.hash !== "") {
    //       e.preventDefault();
    //       var hash = this.hash;
    //       $('html, body').animate({
    //         scrollTop: $(hash).offset().top
    //       }, 800, function(){
    //         window.location.hash = hash;
    //       })
    //     }
    //   })

    // setTimeout(() => {
    //   if (window.location.hash !== "") {
    //     $('html, body').animate({
    //       scrollTop: $(window.location.hash).offset().top
    //     }, 800)
    //   }
    // }, 500)
  }

  componentWillUnmount() {
    $(window)
      .off('scroll.Layout')
  }

  render() {

    return (
      <>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
        </Helmet>

        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/">Brainhack Global 2019</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive">
              Menu
              <FontAwesomeIcon className="ml-2" icon={faBars} />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/#about" data-toggle="collapse" data-target="#navbarResponsive">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/#code-of-conduct" data-toggle="collapse" data-target="#navbarResponsive">Code of Conduct</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/#host" data-toggle="collapse" data-target="#navbarResponsive">Host an Event</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/locations" data-toggle="collapse" data-target="#navbarResponsive">Locations</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/#faq" data-toggle="collapse" data-target="#navbarResponsive">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        { this.props.children }

        <section className="contact-section bg-black">
          <div className="container">
            <div className="social d-flex justify-content-center">
              <a href="https://twitter.com/brainhackorg" className="mx-2">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://github.com/brainhackorg" className="mx-2">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-black small text-center text-white-50">
          <div className="container">
            Copyright &copy; Brainhack 2019
          </div>
        </footer>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
