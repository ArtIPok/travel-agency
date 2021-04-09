import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import Pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import { settings } from '../../../data/settings';
import Button from '../../common/Button';

const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Grid>
    <Row>
      {Pricing.map(
        option => {
          return(
            <Col md={4} key={option.id}>
              <OrderOption 
                {...option}
                currentValue={options[option.id]}
                setOrderOption={setOrderOption}
              />
            </Col>
          );
        }
      )}
      <Col xs = {12}>
        <OrderSummary costOrder={tripCost} options={options}/>
      </Col>
      <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>;
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.object,
};

export default OrderForm;