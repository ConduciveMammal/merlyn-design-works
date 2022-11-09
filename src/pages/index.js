import * as React from "react"

import Seo from "../components/seo"
import Layout from "../components/structure/layout"
import HeroBanner from "../components/sections/hero-banner/hero"
import LogoList from "../components/sections/logo-list/logo-list"
import Services from "../components/sections/services/services"
import Projects from "../components/sections/projects/projects"

// import * as styles from "../components/structure/index.module.scss"

const introContent = {
  image: '../../../images/portrait.jpg',
  imageAlt: 'Liam Merlyn',
  title: 'Liam Merlyn',
  subheading: 'Lead Shopify Developer, Birmingham, UK.',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat reprehenderit magnam culpa enim corporis?'
}

console.log(introContent);

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroBanner imageType="static" image={introContent.image} imageAlt={introContent.imageAlt} title={introContent.title} subheading={introContent.subheading} content={introContent.content} />
    <LogoList />
    <Services />
    <Projects />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
