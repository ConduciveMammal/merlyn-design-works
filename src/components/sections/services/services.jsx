import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import SectionHeader from "../../elements/section-header/section-header";
import ServiceCard from "./service-card";
// import { StaticImage } from "gatsby-plugin-image"
import './services.scss';

const Services = () => {

const data = useStaticQuery(graphql`
query ServiceCardQuery {
  allContentfulServiceCard {
    edges {
      node {
        serviceTitle
        serviceIcon {
          publicUrl
          url
        }
        serviceDescription {
          serviceDescription
        }
      }
    }
  }
}
`);

return (
    <section className="section section--services services">
      <SectionHeader
        title={'Services'}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum eget libero elementum amet ultricies ut hac ultrices ullamcorper. '}
        direction={'row'}
        />

        <div className="services__cards">
        {
          data.allContentfulServiceCard.edges.map((node, id) => (
            <ServiceCard
              key={id}
              title={node.node.serviceTitle}
              icon={node.node.serviceIcon}
              description={node.node.serviceDescription} />
          ))
        }
        </div>
    </section>
  )
}

export default Services;
