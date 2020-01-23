import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';

import './assets/custom-less.less';
import {PriceLink, PriceGrid} from 'travelodge_price_components';


import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const priceLink = document.getElementById('pricelink');


var state = {
    startDate: new Date()
  };

ReactDOM.render(
  <PriceGrid
   destination='London' 
  start='12-18-2019' end='12-21-2019' />,
  priceLink
);

function handleChange(date) 
{
      ReactDOM.unmountComponentAtNode(txtCheckin);
      state.startDate = date;
      ReactDOM.render(
  <DatePicker
  
        onChange={handleChange}
        selected={state.startDate}
      />,
  txtCheckin
);
var start = (date.getUTCMonth()  + 1).toString() + "-" +
          (date.getUTCDate() + 1).toString() +
          "-" + date.getUTCFullYear()
var end = (date.getUTCMonth()  + 1).toString() + "-" +
          (date.getUTCDate() + 1).toString() +
          "-" + date.getUTCFullYear();

 ReactDOM.unmountComponentAtNode(priceLink);

  ReactDOM.render(
  <PriceGrid
   destination={event.target.value} 
  start={start} end={end} />,
  priceLink
);
  }

const txtLocation = document.getElementById('txtLocation');
const txtCheckin = document.getElementById('txtCheckin1');

ReactDOM.render(
  <DatePicker
  
        onChange={handleChange}
        selected={state.startDate}
      />,
  txtCheckin
);

txtLocation.addEventListener('change', (event) => {

      ReactDOM.unmountComponentAtNode(priceLink);

  ReactDOM.render(
  <PriceGrid
   destination={event.target.value} 
  start='12-18-2019' end='12-21-2019' />,
  priceLink
);
});