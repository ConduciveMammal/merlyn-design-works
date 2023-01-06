import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/structure/layout"
import HeroBanner from "../components/sections/hero-banner/hero"
import LogoList from "../components/sections/logo-list/logo-list"
import Services from "../components/sections/services/services"
import Projects from "../components/sections/projects/projects"
import Experience from "../components/sections/experience/experience"
import { getImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const heroImageQuery = useStaticQuery(graphql`
  query {
    file(name: {eq: "headshot-lookingup--square"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`)

const heroImage = getImage(heroImageQuery.file.childImageSharp)
const introContent = {
  image: '../../../images/portrait.jpg',
  imageAlt: 'Liam Merlyn',
  title: 'Liam Merlyn',
  subheading: 'Lead Shopify Developer, Birmingham, UK.',
  content: "Hi there! I'm Liam Merlyn and I'm the Lead Web Developer at Kubix. When I'm not busy building beautiful websites, you can find me drinking a little too much coffee. Just don't let my sense of humour fool you - I take my job very seriously. I may not always be serious, but my work always is."
}

  return (
    <Layout>
      <Seo title="Home" />
      <HeroBanner
        image={heroImage}
        imageAlt={introContent.imageAlt}
        title={introContent.title}
        subheading={introContent.subheading}
        content={introContent.content} />
      <LogoList />
      <Services />
      <Projects />
      <Experience />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
