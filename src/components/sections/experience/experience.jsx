import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import RichText from "../../elements/rich-text/rich-text";
import SectionHeader from "../../elements/section-header/section-header";
import PositionBar from "../../elements/position-bar/position-bar";

import './experience.scss';

const Experience = () => {

const data = useStaticQuery(graphql`
  query {
    contentfulPageContent(contentHandle: {eq: "experience"}) {
      contentMain {
        raw
      }
      contentIntro {
        raw
      }
    }

  allContentfulJobRole(limit: 4, sort: {dateTo: DESC}) {
    edges {
      node {
        companyName
        companyWebsite
        shortDescription {
          shortDescription
        }
        companyLogo {
          publicUrl
        }
        positionTitle
        dateFrom(formatString: "MMM YYYY")
        dateTo(formatString: "MMM YYYY")
      }
    }
  }
}
`);


return (
    <section className="section section--experience experience">
      <SectionHeader
        title={'Journey'}
        content={'Who I am, where I’ve been, what I’ve done. '}
        direction={'row'}
        />

        <div className="experience__column-wrapper">
          <div className="experience__column">
            <RichText raw={data.contentfulPageContent.contentIntro}/>
            <RichText raw={data.contentfulPageContent.contentMain}/>
          </div>

          <div className="experience__column">
            <div className="experience__position-wrapper">
              {
                data.allContentfulJobRole.edges.map((position, index) => (
                  <PositionBar job={position.node} key={index} />
                ))
              }
            </div>
          </div>
        </div>

    </section>
  )
}

export default Experience;
