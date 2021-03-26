import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import styles from './OrderSummary.scss';

import OrderForm from '../OrderForm/OrderForm';

const OrderSummary = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <h2 className = {styles.component}>Trip options</h2>
        <OrderForm tripCost = {['Total: ', <strong key='1'>$12,345</strong>]} />
      </Col>
    </Row>
  </Grid>
);

export default OrderSummary;