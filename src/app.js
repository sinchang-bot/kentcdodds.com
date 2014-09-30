/** @jsx React.DOM */
'use strict';

var React = require('react');
var TwitterTimeline = require('./TwitterTimeline');
var GitHubStuff = require('./GitHub/GitHubStuff');
var Header = require('./Header');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div>
          Most of the interesting stuff about me happens in two places
        </div>
        <div className="row">
          <div className="col-sm-5 col-md-6">
            <h2>GitHub</h2>
            <GitHubStuff />
          </div>
          <div className="col-sm-7 col-md-6">
            <h2>Twitter</h2>
            <TwitterTimeline />
          </div>
        </div>
      </div>
    );
  }
});

React.renderComponent(<App />, document.body);

module.exports = App;