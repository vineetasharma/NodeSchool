import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './views/view7.jsx';

let data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));


/*
/!**
 * Created by ttnd on 8/12/16.
 *!/
import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './views/view7.jsx';


console.log('App.js loaded--------------------');
let data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));
*/
