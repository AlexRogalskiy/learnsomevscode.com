import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { rhythm } from "../utils/typography"

class IndexPage extends React.Component {
  componentDidMount() {
    const script = document.createElement("script")
    script.async = true
    script.src = "https://learnsomevscode.ck.page/6894801fd3/index.js"
    script.setAttribute("data-uid", "6894801fd3")
    this.signupForm.appendChild(script)
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" keywords={[`vscode`, `tips`, `blog`]} />
        <div ref={el => (this.signupForm = el)}></div>
        <h2>Latest articles</h2>
        <ul style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li key={node.fields.slug}>
                <Link
                  style={{ boxShadow: `none` }}
                  to={`blog${node.fields.slug}`}
                >
                  {title}
                </Link>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </li>
            )
          })}
        </ul>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
