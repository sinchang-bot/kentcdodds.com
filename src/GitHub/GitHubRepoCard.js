/** @jsx React.DOM */
'use strict';

var React = require('react');

var GitHubRepoCard = React.createClass({
  render: function() {
    return (
      <div className="github-card repo-card">
        <div className="header">
          <a className="avatar" href="https://github.com/kentcdodds">
            <img src="https://pbs.twimg.com/media/BytA08sCYAE6BZi.jpg" />
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