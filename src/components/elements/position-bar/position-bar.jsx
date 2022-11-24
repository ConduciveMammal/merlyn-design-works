import React from 'react';
import LogoBadge from '../logo-badge/logo-badge';

import './position-bar.scss'

const PositionBar = ({job}) => {
  console.log({job});
    return (
        <article className="position-bar">
          <LogoBadge
            icon={job.companyLogo.publicUrl}
            />
          <div className="position-bar__content">
            <h3 className="position-bar__title">{job.positionTitle} at {job.companyName}</h3>
            <time className="position-bar__date">{job.dateFrom} &ndash; {job.dateTo || 'Present'}</time>
            <p className="position-bar__description">{job.shortDescription.shortDescription}</p>
          </div>
        </article>
    );
}

export default PositionBar;
