import * as React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ element = 'a', outline = false, disabled = false, buttonType, theme, children }) => {
  const Element = element;
  const elementProps = Element === 'button' ? {
    type: buttonType === 'button' ? 'button' : 'submit',
    disabled,
  } : null;

  return (
    <Element
        {...elementProps}
        className={`button button--${theme}${outline ? ' button--outline' : ''}`}>
      {children}
    </Element>
  );
};

Button.propTypes = {
  element: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  theme: PropTypes.string,
  outline: PropTypes.bool,
  buttonType: PropTypes.string
};

export default Button;
