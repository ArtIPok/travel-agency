import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOrderOption}) => (
  <div className={styles.checkboxes}>
    {values.map((value) => {
      return(
        <label key={value.id}>
          <input
            type="checkbox"
            value={value.id}
            onChange={event => setOrderOption(newValueSet(currentValue, value.id, event.currentTarget.checked))}
          >
          </input>
          {value.name} {formatPrice(value.price)}
        </label>
      );
    }
    )}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.array,
  setOrderOption: PropTypes.func,
};

export default OrderOptionCheckboxes;