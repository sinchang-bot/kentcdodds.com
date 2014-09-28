/** @jsx React.DOM */
'use strict';

var React = require('react');
var GitHubRepoList = require('./GitHubRepoList');

var GitHubStuff = React.createClass({
  render: function() {
    return (
      <div>
        <div className="github-card" data-github="kentcdodds" data-width="400" data-height="150">
          <a href="http://github.com/kentcdodds">GitHub profile of kentcdodds</a>
        </div>
        <GitHubRepoList />
      </div>
    );
  }
});

module.exports = GitHubStuff;