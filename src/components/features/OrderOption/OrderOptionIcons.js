import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({required, setOrderOption, values, currentValue}) => (
  <div className={styles.component}>
    {required ? '' : (
      <div
        className={styles.icon}
        onClick={() => setOrderOption('')}
      >
        <Icon name={'times-circle'} />
        none
      </div>
    )}
    {values.map((value) => {
      return(
        <div
          className={currentValue === value.id ? styles.iconActive : styles.icon}
          key={value.id}
          onClick={() => setOrderOption(value.id)}
        >
          <Icon name={value.icon} />
          {value.name} ({formatPrice(value.price)})
        </div>
      );
    }
    )}
  </div>
);

OrderOptionIcons.propTypes = {
  required: PropTypes.bool,
  values: PropTypes.array,
  setOrderOption: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;