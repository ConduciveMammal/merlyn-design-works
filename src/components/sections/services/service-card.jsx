import * as React from "react"
import LogoBadge from "../../elements/logo-badge/logo-badge";
import './service-card.scss';

const ServiceCard = ({icon, title, description}) => {
  // console.log({icon});
  return (
    <article className="service-card">
      <LogoBadge
        icon={icon}
        alt={``}
        width={50}
        height={50}
        />
      <h2 className="service-card__title">{title}</h2>
      <p className="service-card__description">{description.serviceDescription}</p>
    </article>
  )
}

export default ServiceCard;
