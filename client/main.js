
import { Meteor } from 'meteor/meteor';
//import Meteor library
import React from 'react';
//import React library
import { render } from 'react-dom';
//import the render function from react-dom
import Data from '../imports/Data.js';

//import the React component that we haven't created yet! ...oops

Meteor.startup(() => {
  render(<Data />, document.getElementById('app'));
});