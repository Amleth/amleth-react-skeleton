import React from 'react';
import App from './App.js';
import Router from 'react-router';
import Lorem from './Lorem';
import Comp0 from './Comp0';
var {DefaultRoute, Route} = Router;

var routes = (
  <Route path="/" handler={App}>
    <Route name="lorem" handler={Lorem} />
    <Route name="comp0" handler={Comp0} />
  </Route>
);

Router.run(routes, /*Router.HistoryLocation, */function (Handler) {
  React.render(<Handler/>, document.body);
});