'use strict';

var SagittariusClientApp = require('./SagittariusClientApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={SagittariusClientApp}>
    <Route name="/" handler={SagittariusClientApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
