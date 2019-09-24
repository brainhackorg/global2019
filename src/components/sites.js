import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Sites = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            title
            organizers
            address
            website
            dates
          }
        }
      }
    }
  }
  `)

  return data.allMarkdownRemark.edges.map((e) => 
    <p key={e.node.id}>
      { e.node.frontmatter.path }
    </p>
  )
}

export default Sites
