import * as React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import './hero.scss';

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

const HeroBanner = ({image, imageAlt, title, subheading, content, contentType = 'plain'}) => {
  console.log(image);
  return (
    <section className="section section--hero hero">
      <div className="hero__column hero__column--image">
        <GatsbyImage image={image} alt={title} />
      </div>

      <div className="hero__column hero__column--content">
        <h1 className="hero__title">{title}</h1>

        <h2 className="hero__subtitle">{subheading}</h2>

        {contentType === 'rich' ?
          <div className="hero__text">{renderRichText(content, options)}</div>
          :
          <div className="hero__text"><p>{content}</p></div>
        }


        <a href="/" className="button button--primary">Get in touch</a>
      </div>
    </section>
  )
}

export default HeroBanner;
