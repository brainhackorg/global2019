import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import MapContainer from "../components/maps"

import $ from 'jquery'
import 'bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'


class IndexPage extends Component {

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
      .off('scroll.IndexPage')
      .on('scroll.IndexPage', navbarCollapse)

    $('#mainNav a')
      .on('click.smoothscroll', function(e){
        if (this.hash !== "") {
          e.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          })
        }
      })

    setTimeout(() => {
      if (window.location.hash !== "") {
        $('html, body').animate({
          scrollTop: $(window.location.hash).offset().top
        }, 800)
      }
    }, 500)
  }

  componentWillUnmount() {
    $(window)
      .off('scroll.IndexPage')
  }

  render() {

    return (
      <Layout>
        <SEO title="Home" />

        <header className="masthead">
          <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">
              <h1 className="mx-auto text-uppercase">Brainhack Global</h1>
              <h2 className="mx-auto mt-2 mb-5">Researchers from across the globe and a myriad of disciplines working together on innovative projects related to neuroscience.</h2>
            </div>
          </div>
        </header>

        <span id="about" className="anchor"></span>
        <section className="about-section bg-light">
          <div className="container">
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <div className="col-xl-8 col-lg-7">
                <MapContainer />
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="featured-text text-center text-lg-left">
                  <p className="text-black-50">
                    Brainhack is a unique conference that convenes researchers from across the globe
                    and a myriad of disciplines to work together on innovative projects related to
                    neuroscience.
                  </p>
                  <p className="text-black-50">
                    Year after year, global Brainhack events have brought together
                    researchers to participate in <strong>open collaboration</strong>, and regional
                    Brainhack events keep the momentum going throughout the year.
                  </p>
                  <p className="text-black-50">
                    Brainhack Global 2019 will unite several
                    regional Brainhack events throughout the world.
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center no-gutters">
              <div className="col-lg-6 bg-digital"></div>
              <div className="col-lg-6">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <h4 className="text-white">Organising Team</h4>
                      <p className="mb-0 text-white"><a href="https://twitter.com/RCCraddock">Cameron Craddock</a></p>
                      <p className="mb-0 text-white"><a href="https://twitter.com/DanielMargulies">Daniel Margulies</a></p>
                      <p className="mb-0 text-white"><a href="https://twitter.com/pierre_bellec">Pierre Bellec</a></p>
                      <p className="mb-0 text-white"><a href="https://twitter.com/complexbrains">Isil Poyraz Bilgin</a></p>
                      <p className="mb-0 text-white"><a href="https://twitter.com/sofie_vdbos">Sofie Van Den Bossche</a></p>
                      <p className="mb-0 text-white"><a href="https://twitter.com/iamdamion">Damion V. Demeter</a></p>
                      <p className="mb-0 text-white"><a href="https://twitter.com/anibalsolon">Anibal Sólon Heinsfeld</a></p>
                      <p className="mb-0 text-white"><a href="https://twitter.com/peerherholz">Peer Herholz</a></p>
                      <p className="mb-0 text-white"><a href="https://github.com/jhlegarreta">Jon Haitz Legarreta</a></p>
                      <hr className="d-none d-lg-block mb-0 ml-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span id="code-of-conduct" className="anchor"></span>
            <div className="row text-center mb-4 mb-lg-5 mt-4 mt-lg-5">
              <div className="col-lg-8 offset-lg-2">
                <h4 className="mt-5 mb-3">Code of Conduct</h4>
                <p>
                  Brainhack Global is dedicated to a <strong>harassment-free conference</strong> experience for everyone. <br />
                  Our anti-harassment policy can be found here:
                </p>
                <p><a href="http://brainhack.org/code-of-conduct.html" className="btn btn-primary mx-auto">Code of Conduct</a></p>
              </div>
            </div>
          </div>
        </section>

        <span id="host" className="anchor"></span>
        <section className="host-section text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-white mb-4">Host a Local Brainhack</h2>
                <p className="text-white mb-5">
                  We are currently recruiting sites to host <br /> local events during Brainhack Global 2019!
                </p>

                <p className="text-white">
                  For this year, we built up a welcoming pack to <strong>help you organize your local Brainhack</strong>.
                  It includes guidelines, checklists, template forms, press release material, and more!<br />
                  Check it out:
                </p>

                <p><a href="submit" className="btn btn-primary mx-auto">Get from Github</a></p>
              </div>
            </div>
          </div>
        </section>

        <span id="faq" className="anchor"></span>
        <section className="faq-section bg-light">
          <div className="container">
            <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
              <div className="col-12 col-lg-9">
                <h2 className="text-black mb-3 text-center">FAQ</h2>
                <StaticQuery
                  query={graphql`
                    query {
                      allMarkdownRemark(filter:{
                        fileAbsolutePath:{
                          regex: "/faq/"
                        }
                      }) {
                        edges {
                          node {
                            id
                            fileAbsolutePath
                            frontmatter {
                              section
                              faq {
                                question
                                answer
                              }
                            }
                          }
                        }
                      }
                    }
                  `}
                  render={ ({ allMarkdownRemark: { edges } }) => (
                    edges.sort((a, b) => a.node.fileAbsolutePath > b.node.fileAbsolutePath ? 1 : -1).map(({ node }, si) => (
                      <div key={si} className="faq-section-section">
                        <h3>{ node.frontmatter.section }</h3>
                        <div className="accordion" id="faq">
                          { node.frontmatter.faq.map(((f, i) => (
                            <div key={i} className="card">
                              <div className="card-header" data-toggle="collapse" data-target={`#collapse-${si}-${i}`} dangerouslySetInnerHTML={{ __html: f.question }}></div>
                              <div id={`collapse-${si}-${i}`} className="collapse" data-parent="#faq">
                                <div className="card-body" dangerouslySetInnerHTML={{ __html: f.answer }}></div>
                              </div>
                            </div>
                          ))) }
                        </div>
                        <hr className="d-none d-lg-block mb-0 ml-0" />
                      </div>
                    ))
                  )}
                />
              </div>
            </div>
          </div>
        </section>
        
      </Layout>
    )
  }
}

export default IndexPage
