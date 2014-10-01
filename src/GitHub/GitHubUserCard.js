/** @jsx React.DOM */
'use strict';

var React = require('react');

var GitHubUserCard = React.createClass({
  render: function() {
    return (
      <div className="github-card user-card">
        <div className="header">
          <a className="avatar" href="https://github.com/lepture">
            <img src="https://avatars.githubusercontent.com/u/290496?v=2" />
            <strong>Hsiaoming Yang</strong>
            <span>@lepture</span>
          </a>
          <a className="button" href="https://github.com/lepture">Follow</a>
        </div>
        <ul className="status">
          <li>
            <a href="https://github.com/lepture?tab=repositories">
              <strong>123</strong>Repos</a>
          </li>
          <li>
            <a href="https://gist.github.com/lepture">
              <strong>46</strong>Gists</a>
          </li>
          <li>
            <a href="https://github.com/lepture/followers">
              <strong>1384</strong>Followers</a>
          </li>
          <li>
            <a href="https://github.com/lepture/followers">
              <strong>15</strong>Orgs</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = GitHubUserCard;