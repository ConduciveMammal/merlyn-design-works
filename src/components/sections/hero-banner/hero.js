import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './hero.scss';

const HeroBanner = () => (
  <section className="section section--hero hero">
    <div className="hero__column hero__column--image">
      <StaticImage
        src="../../../images/portrait.jpg"
        alt="A dinosaur"
        placeholder="dominantColor"
        height={700}
        className="hero__image" />
    </div>

    <div className="hero__column hero__column--content">
      <h1 className="hero__title">Liam Merlyn</h1>

      <h2 className="hero__subtitle">Lead Shopify Developer from Birmingham, UK.</h2>

      <p className="hero__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar quam nisi nisl gravida leo nisi augue. Vivamus nunc interdum interdum pulvinar massa nullam odio at. Sem cursus tincidunt velit porttitor. Nunc, elit duis eu nunc curabitur aenean volutpat.</p>

      <a href="/" className="button button--primary">Get in touch</a>
    </div>
  </section>
)

export default HeroBanner;
