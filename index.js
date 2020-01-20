import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';

import './styles/custom-less.less';
import {PriceLink} from 'travelodge_price_components';

console.log('index');
const priceLink = document.getElementById('pricelink');
console.log(priceLink);
ReactDOM.render(
  <PriceLink
   destination='York' 
  start='12-18-2019' end='12-21-2019' />,
  priceLink
);