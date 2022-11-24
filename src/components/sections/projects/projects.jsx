import { graphql, useStaticQuery } from "gatsby";
import * as React from "react"

import ProjectItem from "./project-item";
import './projects.scss';

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
    <section className="section section--projects projects">
      {
        projectData.map((project, index) => (
          <ProjectItem project={project.node} alignClass={alignClasses[index % alignClasses.length]} index={index} key={index}/>
        ))
      }
    </section>
  )
}

export default Projects;
