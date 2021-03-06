import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';


// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({setOrderOption}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => {
      setStartDate(date);
      setOrderOption(date);
    }} 
    />
  );
};

OrderOptionDate.propTypes = {
  setOrderOption: PropTypes.func,
};

export default OrderOptionDate;