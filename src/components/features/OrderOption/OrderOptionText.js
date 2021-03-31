import React from 'react';
import PropTypes from 'prop-types';

// import styles from './OrderOption.scss';
// import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionText = ({setOptionValue}) => (
  <input 
    type = 'text'
    onChange = {event => setOptionValue(event.currentTarget.value)}
  >
  </input>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;