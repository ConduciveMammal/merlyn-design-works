import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/structure/layout"
import Seo from "../../components/seo"

const ProjectPage = ({data}) => {
  console.log(data);
  const { projectName } = data.contentfulPortfolioItem
  return (
    <Layout>
      <h1>{projectName}</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulPortfolioItem(id: {eq: $id}) {
      projectName
      projectHandle
    }
  }
`

export const Head = () => <Seo title="Page two" />

export default ProjectPage
