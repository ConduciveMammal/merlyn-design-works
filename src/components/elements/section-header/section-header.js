import * as React from "react"
import PropTypes from 'prop-types';

import './section-header.scss';

const SectionHeader = ({title, content, direction}) => (
  <header className={`section__header section__header--${direction}`}>
    <h2 className="section__title">{title}</h2>
    <p className="section__content">{content}</p>
  </header>
);

SectionHeader.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  direction: PropTypes.string,
}

export default SectionHeader;
