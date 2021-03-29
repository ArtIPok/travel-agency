import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import formatPrice from '../../../utils/formatPrice';

const OrderOptionIcons = ({setOptionValue, values}) => (
  <div className={styles.component}>
    {values.map((value) => {
      return(
        <div
          className={styles.icon}
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
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;