import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import RichText from "../../elements/rich-text/rich-text";
import SectionHeader from "../../elements/section-header/section-header";

const Experience = () => {

const data = useStaticQuery(graphql`
  query {
    contentfulPageContent(contentHandle: {eq: "experience"}) {
      id
      contentMain {
        raw
      }
      contentIntro {
        raw
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

        <div className="experience__column">
          <RichText raw={data.contentfulPageContent.contentIntro}/>
          <RichText raw={data.contentfulPageContent.contentMain}/>
        </div>

    </section>
  )
}

export default Experience;
