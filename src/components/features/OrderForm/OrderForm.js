import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import Pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({tripCost, options}) => (
  <Grid>
    <Row>
      {Pricing.map(
        option => {
          return(
            <Col md={4} key={option.id}>
              <OrderOption />
            </Col>
          );
        }
      )}
      <Col xs = {12}>
        <OrderSummary costOrder={tripCost} options={options}/>
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;