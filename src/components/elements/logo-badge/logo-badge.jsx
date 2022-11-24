import * as React from "react"
import './logo-badge.scss';

const LogoBadge = ({icon, alt, width = 50, height = 50, loading = 'lazy'}) => {
  return (
    <div className="logo-badge" test={`${icon}`}>
      <img
        src={icon}
        alt={alt || ''}
        width={width}
        height={height}
        loading={loading} />
    </div>
  );
}

export default LogoBadge;
