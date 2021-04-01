import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({required, setOptionValue, values, currentValue}) => (
  <div className={styles.component}>
    {required ? '' : (
      <div
        className={styles.icon}
        onClick={() => setOptionValue('')}
      >
        <Icon name={'times-circle'} />
        none
      </div>
    )}
    {values.map((value) => {
      const styleIconValue = styles.icon && currentValue == value.id;
      return(
        <div
          className={styleIconValue ? styles.iconActive : ''}
          key={value.id}
          onClick={() => setOptionValue(value.id)}
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
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;