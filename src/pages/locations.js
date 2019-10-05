import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"

import 'bootstrap'


class LocationsPage extends Component {

  render() {

    return (
      <Layout>
        <SEO title="Locations" />

        <span id="locations" className="anchor"></span>
        <section className="locations-section p-lg-5">
          <div className="container bg-light mt-5 pt-5">
            <div className="row justify-content-center no-gutters">
              <div className="col-12 col-lg-9 mb-5">
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
                    edges.sort((a, b) => a.node.fileAbsolutePath > b.node.fileAbsolutePath ? 1 : -1).map(({ node, node: { frontmatter: info } }, si) => (
                      <div key={si}>
                        <span className="anchor" id={`location-${node.id}`}></span>
                        <h3 className="mt-5">{ info.title }</h3>

                        <p>Organizers: { info.organizers.join(', ') }</p>
                        { info.website ? (<p>Website: <a href={ info.website }>{ info.website }</a></p>) : null }
                        { info.address ? (<p>Address: <a href={`http://maps.google.com/?q=${info.position.lat},${info.position.lng}`}>{ info.address }</a></p>) : null }
                        { info.contact ? (<p>Contact: { info.contact.join(',') }</p>) : null }
                        
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

export default LocationsPage
