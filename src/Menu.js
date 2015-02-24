import React from 'react';
import {Link} from 'react-router';

module.exports = React.createClass({
  render: function () {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="lorem">Lorem</Link>
          </li>
          <li>
            <Link to="comp0">Comp0</Link>
          </li>
        </ul>
      </nav>
    );
  }
});