'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var SagittariusClientApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SagittariusClientApp = require('components/SagittariusClientApp.js');
    component = React.createElement(SagittariusClientApp);
  });

  it('should create a new instance of SagittariusClientApp', function () {
    expect(component).toBeDefined();
  });
});
