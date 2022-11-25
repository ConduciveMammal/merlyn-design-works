import * as React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import RichText from "../../elements/rich-text/rich-text"

import './project-item.scss';

const ProjectItem = ({project, alignClass, index}) => {
  return (
    <article className={`project-item project-item--${alignClass}`}>
      <div className="project-item__image-wrapper">
        <GatsbyImage image={project.featuredImage.gatsbyImage} loading={index === 0 ? 'eager' : 'lazy'} alt={project.projectName} />
      </div>

      <div className="project-item__content">
        <h3 className="project-item__name">{project.projectName}</h3>
        <div className="project-item__intro-wrapper">
          <RichText raw={project.introduction}/>
        </div>

        <h4 id={`tools-heading--${index}`}className="project-item__list-heading">Tools Used:</h4>
        <ul className="project-item__tools" aria-labelledby={`tools-heading--${index}`}>
          {
            project.toolsUsed.map((tool, index) => (
              <li key={index}>{tool.toolName}</li>
            ))
          }
        </ul>

        <p className="project-item__detail">
          <strong>Project Date:</strong> {project.projectDate}
        </p>

        <a href={`/projects/${project.projectHandle}`} className="button button--primary">View project</a>
      </div>
    </article>
  )
}

export default ProjectItem;
