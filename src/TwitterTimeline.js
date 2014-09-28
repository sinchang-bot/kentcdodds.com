/** @jsx React.DOM */
'use strict';

var React = require('react');

var TwitterCard = React.createClass({
  render: function() {
    return (
      <a className="twitter-timeline" href="https://twitter.com/kentcdodds" data-widget-id="515976988029222913">Tweets by @kentcdodds</a>
    );
  }
});

module.exports = TwitterCard;