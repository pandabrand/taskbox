import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ mode, size, label, ...props }) => {
  return (
    <button
      type="button"
      className={['blueshoon-button', `blueshoon-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * What state is this button in?
   */
  mode: PropTypes.oneOf(['default', 'active', 'hover', 'disabled']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  mode: 'default',
  size: 'medium',
  onClick: undefined,
};
