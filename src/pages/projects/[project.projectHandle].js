import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/structure/layout"
import Seo from "../../components/seo"
import HeroBanner from "../../components/sections/hero-banner/hero"

const ProjectPage = ({data}) => {
  console.log(data);
  const project = data.contentfulPortfolioItem
  return (
    <Layout>
      <HeroBanner imageType="gatsby" image={project.featuredImage.gatsbyImage} title={project.projectName} subheading={``} contentType="rich" content={project.introduction}/>
      <h1>{project.projectName}</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulPortfolioItem(id: {eq: $id}) {
        featuredImage {
          gatsbyImage(
            placeholder: BLURRED
            layout: CONSTRAINED
            width: 720
            formats: AUTO
          )
        }
        clientName
        projectDate
        projectHandle
        projectName
        introduction {
          raw
        }
        projectBrief {
          raw
        }
        toolsUsed {
          toolName
          iconlogo {
            publicUrl
          }
        }
        projectMedia {
          gatsbyImage(width: 720, layout: FIXED, formats: AUTO, placeholder: BLURRED)
        }
    }
  }
`

export const Head = ({data}) => <Seo title={data.contentfulPortfolioItem.projectName} />

export default ProjectPage
