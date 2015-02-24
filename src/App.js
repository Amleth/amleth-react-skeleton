import React from 'react';
import {RouteHandler} from 'react-router';
import Menu from './Menu';

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <Menu />
        </header>

        <h1>Application</h1>

        <RouteHandler />
      </div>
    );
  }
});