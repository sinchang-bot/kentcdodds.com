/** @jsx React.DOM */
'use strict';

var React = require('react');
//var GitHubRepoList = require('./GitHubRepoList');
var GitHubUserCard = require('./GitHubUserCard');
var GitHubCardRenderer = require('./GitHubCardRenderer');
var GitHubRepoCard = require('./GitHubRepoCard');

var GitHubStuff = React.createClass({
  componentDidMount: function() {
    GitHubCardRenderer();
  },
  componentDidUpdate: function() {
    GitHubCardRenderer();
  },
  render: function() {
    return (
      <div>
        <GitHubUserCard />
        <GitHubRepoCard />
      </div>
    );
  }
});

module.exports = GitHubStuff;