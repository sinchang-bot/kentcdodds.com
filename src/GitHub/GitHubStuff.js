/** @jsx React.DOM */
'use strict';

var React = require('react');
//var GitHubRepoList = require('./GitHubRepoList');
var GitHubUserCard = require('./GitHubUserCard');
var GitHubRepoCard = require('./GitHubRepoCard');

var GitHubStuff = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <GitHubUserCard />
        </div>
        <div>
          <GitHubRepoCard />
        </div>
      </div>
    );
  }
});

module.exports = GitHubStuff;