import * as React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import './project-item.scss';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-bold">{text}</strong>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      console.log(children);
      const { uri } = node.data
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      )
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target
      return (
        <GatsbyImage
          image={getImage(gatsbyImageData)}
          alt={description}
        />
      )
    },
  },
}

const ProjectItem = ({project, alignClass, index}) => {
  console.table({project});
  const projectDate = new Date(project.projectDate);
  const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

console.log(projectDate.toLocaleDateString('en-GB', dateOptions).toString());
  return (
    <article className={`project-item project-item--${alignClass}`}>
      <div className="project-item__image-wrapper">
        <GatsbyImage image={project.featuredImage.gatsbyImage} alt={project.projectName} />
      </div>

      <div className="project-item__content">
        <h3 className="project-item__name">{project.projectName}</h3>
        <div className="project-item__intro-wrapper">{renderRichText(project.introduction, options)}</div>

        <h4 id={`tools-heading--${index}`}className="project-item__list-heading">Tools Used:</h4>
        <ul className="project-item__tools" aria-labelledby={`tools-heading--${index}`}>
          {
            project.toolsUsed.map((tool, index) => (
              <li key={index}>{tool.toolName}</li>
            ))
          }
        </ul>

        <p className="project-item__detail">
          <strong>Project Date:</strong> {projectDate.toLocaleDateString('en-GB', dateOptions).toString()}
        </p>

        <a href={`/projects/${project.projectHandle}`} className="button button--primary">View project</a>
      </div>
    </article>
  )
}

export default ProjectItem;
