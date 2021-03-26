import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import styles from './OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = ({costOrder, options}) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <h2 className = {styles.component}>
          <p>Total price: {formatPrice(calculateTotal(costOrder, options))}</p>
        </h2>
      </Col>
    </Row>
  </Grid>
);

OrderSummary.propTypes = {
  costOrder: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;