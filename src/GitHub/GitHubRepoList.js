/** @jsx React.DOM */
'use strict';

var React = require('react');
var axios = require('axios');

var GITHUB_API_URL = 'https://api.github.com';

var GitHubRepoList = React.createClass({
  getInitialState: function() {
    return { repos: [] };
  },
  getRepos: function () {
    axios.get(GITHUB_API_URL + '/users/kentcdodds/repos?type=public&per_page=1&sort=pushed')
      .then(function (repos) {
        this.setState({
          repos: repos.data
        });
      }.bind(this));
  },
  componentDidMount: function () {
    this.getRepos();
  },
  render: function() {
    var repos = this.state.repos.sort(function (a, b) {
      return Date.parse(b.pushed_at) - Date.parse(a.pushed_at);
    }).map(function(repo) {
      var fullName = repo.owner.login + '/' + repo.name;
      return (
        <div key={repo.name} className="github-card" data-github={fullName} data-width="400" data-height="153">
          <a href={repo.url}>{fullName}</a>
        </div>
      );
    });
    return (
      <div>{repos}</div>
    );
  }
});

module.exports = GitHubRepoList;