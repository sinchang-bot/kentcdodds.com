/** @jsx React.DOM */
'use strict';

var React = require('react');
var GitHubRepoCard = require('./GitHubRepoCard');

var GitHubRepoList = React.createClass({
  getDefaultProps: function() {
    return { repos: [] };
  },
  render: function() {
    var repos = this.props.repos.sort(function (a, b) {
      return Date.parse(b.pushed_at) - Date.parse(a.pushed_at);
    }).map(function(repo) {
      return <GitHubRepoCard key={repo.id} repo={repo} />;
    });
    return (
      <div>
        <h3>My {repos.length} Repositories</h3>
        <div>
          {repos}
        </div>
      </div>
    );
  }
});

module.exports = GitHubRepoList;