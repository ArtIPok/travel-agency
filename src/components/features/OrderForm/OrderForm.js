import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = () => (
  <Grid>
    <Row>
      <Col xs = {12}>
        <OrderSummary />
      </Col>
    </Row>
  </Grid>
);

export default OrderForm;