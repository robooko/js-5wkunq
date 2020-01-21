import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';

import './assets/custom-less.less';
import {PriceLink, PriceGrid} from 'travelodge_price_components';

console.log('index');
const priceLink = document.getElementById('pricelink');
console.log(priceLink);

ReactDOM.render(
  <PriceGrid
   destination='London' 
  start='12-18-2019' end='12-21-2019' />,
  priceLink
);


const txtLocation = document.getElementById('txtLocation');
txtLocation.addEventListener('change', (event) => {

      ReactDOM.unmountComponentAtNode(priceLink);

  ReactDOM.render(
  <PriceGrid
   destination={event.target.value} 
  start='12-18-2019' end='12-21-2019' />,
  priceLink
);
});