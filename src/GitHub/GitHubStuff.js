/** @jsx React.DOM */
'use strict';

var React = require('react');
var axios = require('axios');

var GitHubRepoList = require('./GitHubRepoList');
var GitHubUserCard = require('./GitHubUserCard');

var GITHUB_API_URL = 'https://api.github.com';

var GitHubStuff = React.createClass({
  getInitialState: function() {
    return { repos: [] };
  },
  getData: function () {
    axios.all([
      axios.get(GITHUB_API_URL + '/users/kentcdodds'),
      axios.get(GITHUB_API_URL + '/users/kentcdodds/orgs'),
      axios.get(GITHUB_API_URL + '/users/kentcdodds/repos?type=public&per_page=3&sort=pushed')
    ])
      .then(axios.spread(function (user, orgs, repos) {
        this.setState({
          user: user.data,
          orgCount: (orgs.data || []).length,
          repos: repos.data
        });
      }.bind(this)));
  },
  componentDidMount: function () {
    this.getData();
  },
  render: function() {
    return (
      <div>
        <div>
          <GitHubUserCard user={this.state.user} orgCount={this.state.orgCount} />
        </div>
        <div>
          <GitHubRepoList repos={this.state.repos} />
        </div>
      </div>
    );
  }
});

module.exports = GitHubStuff;