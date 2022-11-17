import * as React from "react"
import './service-card.scss';

const ServiceCard = ({icon, title, description}) => {
  return (
    <article className="service-card">
      <div className="service-card__icon">
        <img
          src={icon.publicUrl}
          alt=""
          width="50"
          height="50"
          loading="lazy"/>
      </div>
      <h2 className="service-card__title">{title}</h2>
      <p className="service-card__description">{description.serviceDescription}</p>
    </article>
  )
}

export default ServiceCard;
