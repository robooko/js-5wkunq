import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';

import './assets/custom-less.less';
import {PriceLink, PriceGrid} from 'travelodge_price_components';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import searchIcon from './assets/images/search.svg';

const priceLink = document.getElementById('pricelink');

const txtLocation = document.getElementById('txtLocation');
const txtCheckin = document.getElementById('txtCheckin1');

var state = {
    startDate: new Date(),
    
    endDate: new Date()
  };

  var start = (state.startDate.getUTCMonth()  + 1).toString() + "-" +
          (state.startDate.getUTCDate()).toString() +
          "-" + state.startDate.getUTCFullYear();
state.endDate = new Date(state.startDate.getTime() + (86400000 * 6));
var end = (state.endDate.getUTCMonth()  + 1).toString() + "-" +
          (state.endDate.getUTCDate()).toString() +
          "-" + state.endDate.getUTCFullYear();

ReactDOM.render(
  <PriceGrid
   destination='London' 
  start={start} end={end}  />,
  priceLink
);


function handleChange(date) 
{
      ReactDOM.unmountComponentAtNode(txtCheckin);
      state.startDate = date;

      
var start = (state.startDate.getUTCMonth()  + 1).toString() + "-" +
          (state.startDate.getUTCDate()).toString() +
          "-" + state.startDate.getUTCFullYear();
state.endDate = new Date(state.startDate.getTime() + (86400000 * 6));
var end = (state.endDate.getUTCMonth()  + 1).toString() + "-" +
          (state.endDate.getUTCDate()).toString() +
          "-" + state.endDate.getUTCFullYear();

      ReactDOM.render(
  <DatePicker  
        onChange={handleChange}
        selected={state.startDate}
      />,
  txtCheckin
);


 ReactDOM.unmountComponentAtNode(priceLink);
  ReactDOM.render(
  <PriceGrid
   destination={txtLocation.value} 
  start={start} end={end} />,
  priceLink
);
  }


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
  start={start} end={end}  />,
  priceLink
);
});