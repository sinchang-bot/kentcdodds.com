/** @jsx React.DOM */
'use strict';

var React = require('react');

var GitHubRepoCard = React.createClass({
  getDefaultProps: function () {
    return {
      repo: { owner: {} }
    };
  },
  render: function() {
    var repo = this.props.repo;
    if (!repo.name) {
      return <div></div>;
    }
    var shortHomepage = (repo.homepage || '').replace(/^.*?\:\/\//, '');
    console.log(shortHomepage);
    return (
      <div className="github-card repo-card">
        <div className="header">
          <strong className="name">
            <a href={repo.html_url}>{repo.name}</a>
            <sup className="language">{repo.language}</sup>
          </strong>
          <span>
            {repo.fork ? 'Forked by' : 'Created by'}
            <a href={repo.owner.html_url}>{repo.owner.login}</a>
          </span>
          <a className="button" href={repo.html_url}>Star</a>
        </div>
        <div className="content">
          <p>
            {repo.description} <a href={repo.homepage}>{shortHomepage}</a>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = GitHubRepoCard;