import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const StyledButton = styled.button`
  padding: ${props => props.small ? '5px 15px' : '15px 25px'};
  background-color: #b95866;
  text-transform: uppercase;
  border: none;
  border-radius: 3px;
  color: #fff;
  outline: none;
  cursor: pointer;
  &.button--state-active {
    background-color: #000
  }
`;

const Button = ({
  children, className, active, onClick, small,
}) => (
  <StyledButton
    small={small}
    className={classNames(
      'button',
      className,
      {
        'button--state-active': active,
      }
    )}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  small: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
