import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About — {site.siteMetadata.title}</title>
        <meta name="description" content={"About page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail-1" style={{backgroundImage: `url('/assets/image-8.jpeg')`, marginBottom: 0}}>
          
        </div>
        <div>
          <form className="form-container" action="https://sendmail.w3layouts.com/SubmitContactForm" method="post">
          <p>Content will be here soon</p>
                      </form>
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`