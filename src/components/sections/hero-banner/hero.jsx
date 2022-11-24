import * as React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import RichText from "../../elements/rich-text/rich-text"
import './hero.scss';

const HeroBanner = ({image, title, subheading, content, contentType = 'plain'}) => {
  return (
    <section className="section section--hero hero">
      <div className="hero__column hero__column--image">
        <GatsbyImage image={image} alt={title} loading="eager"/>
      </div>

      <div className="hero__column hero__column--content">
        <h1 className="hero__title">{title}</h1>

        <h2 className="hero__subtitle">{subheading}</h2>

        {contentType === 'rich' ?
          <div className="hero__text"><RichText raw={content}/></div>
          :
          <div className="hero__text"><p>{content}</p></div>
        }


        <a href="/" className="button button--primary">Get in touch</a>
      </div>
    </section>
  )
}

export default HeroBanner;
