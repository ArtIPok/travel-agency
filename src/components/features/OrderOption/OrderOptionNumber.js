import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({currentValue, limits, price, setOrderOption}) => (
  <div className={styles.number}>
    <input
      className = {styles.inputSmall}
      type = 'number'
      value = {currentValue}
      min = {limits.min}
      max = {limits.max}
      onChange={event => setOrderOption(event.currentTarget.value)}
    >  
    </input>
    {formatPrice(price)}
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  limits: PropTypes.object,
  price: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderOptionNumber;