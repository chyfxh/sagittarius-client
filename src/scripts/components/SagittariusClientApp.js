'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Halogen = require("halogen");
var RaisedButton = require('material-ui').RaisedButton;
var Bootstrap = require('react-bootstrap');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

// CSS
require('normalize.css');
//require('material-ui-sass/material-ui.scss');
require('../../styles/main.css');
require('bootstrap/dist/css/bootstrap.min.css');

var imageURL = require('../../images/yeoman.png');

var SagittariusClientApp = React.createClass({
  render: function() {
    var color = '#4DA67C';
    return (
      <div className='container'>
      <Grid>
        <Row className='show-grid'>
        <Col md={4}><h3 style={{
            backgroundColor:'#456765'
        }}>aaa</h3></Col>
        <Col md={4}><h3 style={{
            backgroundColor:'#123123'
        }}>bbb</h3></Col>
        <Col md={4}><h3 style={{
            backgroundColor: '#321321'
        }}>ccc</h3></Col>
        </Row>
      </Grid>
      </div>
    );
  }
});

module.exports = SagittariusClientApp;
