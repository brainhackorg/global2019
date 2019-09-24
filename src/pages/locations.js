import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"

import $ from 'jquery'
import 'bootstrap'


class LocationsPage extends Component {

  render() {

    return (
      <Layout>
        <SEO title="Locations" />

        <span id="locations" className="anchor"></span>
        <section className="locations-section bg-dark p-lg-5">
          <div className="container bg-light mt-5 pt-5">
            <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
              <div className="col-12 col-lg-9">
                <h2 className="text-black mb-3 text-center">Locations</h2>
                <StaticQuery
                  query={graphql`
                    query {
                      allMarkdownRemark(filter:{
                        fileAbsolutePath:{
                          regex: "/sites/"
                        }
                      }) {
                        edges {
                          node {
                            id
                            fileAbsolutePath
                            frontmatter {
                              title
                              organizers
                              contact
                              website
                              address
                              position {
                                lat
                                lng
                              }
                              dates
                            }
                          }
                        }
                      }
                    }
                  `}
                  render={ ({ allMarkdownRemark: { edges } }) => (
                    edges.sort((a, b) => a.node.fileAbsolutePath > b.node.fileAbsolutePath ? 1 : -1).map(({ node: { frontmatter: info } }, si) => (
                      <div key={si}>
                        <h3>{ info.title }</h3>

                        <p>Organizers: { info.organizers.join(', ') }</p>
                        { info.website ? (<p>Website: <a href="">{ info.website }</a></p>) : null }
                        { info.address ? (<p>Address: { info.address }</p>) : null }
                        { info.contact ? (<p>Contact: { info.contact }</p>) : null }
                        
                        <hr className="d-none d-lg-block mb-5 ml-0" />
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

export default LocationsPage
