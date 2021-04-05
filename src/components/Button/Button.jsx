import PropTypes from 'prop-types';
import scss from './Button.module.scss';

const Button = ({ type, onClick }) => (
  <button className={scss.button} type={type} onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
