import * as React from "react";
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/structure/layout"
import ProjectItem from "../components/sections/projects/project-item";
import Seo from "../components/seo"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query Projects {
      allContentfulPortfolioItem(limit: 4) {
        edges {
          node {
            featuredImage {
              gatsbyImage(
                placeholder: BLURRED
                layout: CONSTRAINED
                width: 720
                formats: AUTO
              )
            }
            clientName
            projectDate(formatString: "MMM YYYY")
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
      }
    }
  `)

  const projectData = data.allContentfulPortfolioItem.edges
  const alignClasses = ['top-left', 'bottom-right'];

    return (
        <Layout>
          <h1>Projects</h1>

          <div className="style-section">
            {
              projectData.map((project, index) => (
                <ProjectItem project={project.node} alignClass={alignClasses[index % alignClasses.length]} index={index} key={index}/>
              ))
            }
          </div>
        </Layout>
    );
}

export const Head = () => <Seo title="Projects" />

export default Projects
