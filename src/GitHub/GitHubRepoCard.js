/** @jsx React.DOM */
'use strict';

var React = require('react');

var GitHubRepoCard = React.createClass({
  getDefaultProps: function () {
    return {
      repo: {
        name: 'genie',
        owner: {
          login: 'kentcdodds',
          avatar_url: 'https://avatars.githubusercontent.com/u/1500684?v=2',
          html_url: 'https://github.com/kentcdodds'
        },
        html_url: 'https://github.com/kentcdodds/genie',
        description: 'Keyboard control for web applications (better than cryptic shortcuts). 3.5K minified & gzipped',
        fork: false,
        homepage: 'http://kent.doddsfamily.us/genie',
        stargazers_count: 205,
        subscribers_count: 9,
        language: 'JavaScript'
      }
    };
  },
  render: function() {
    var repo = this.props.repo;
    return (
      <div className="github-card repo-card">
        <div className="header">
          <a className="avatar" href={repo.owner.html_url}>
            <img src={repo.owner.avatar_url} />
          </a>
          <strong className="name">
            <a href="https://github.com/kentcdodds/genie">genie</a>
            <sup className="language">JavaScript</sup>
          </strong>
          <span>Created by <a href="https://github.com/kentcdodds">kentcdodds</a>
          </span>
          <a className="button" href="https://github.com/kentcdodds/genie">Star</a>
        </div>
        <div className="content">
          <p>Keyboard control for web applications (better than cryptic shortcuts). 3.5K minified &amp; gzipped <a href="http://kent.doddsfamily.us/genie">kent.doddsfamily.us/genie</a>
          </p>
        </div>
        <div className="footer">
          <span className="status">
            <strong>16</strong>Forks</span>
          <span className="status">
            <strong>204</strong>Stars</span>
        </div>
      </div>
    );
  }
});

module.exports = GitHubRepoCard;