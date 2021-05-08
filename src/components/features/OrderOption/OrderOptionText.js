import React from 'react';
import PropTypes from 'prop-types';

// import styles from './OrderOption.scss';
// import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionText = ({setOrderOption}) => (
  <input 
    type = 'text'
    onChange = {event => setOrderOption(event.currentTarget.value)}
  >
  </input>
);

OrderOptionText.propTypes = {
  setOrderOption: PropTypes.func,
};

export default OrderOptionText;