/** @jsx React.DOM */
'use strict';

var React = require('react');

var GitHubUserCard = React.createClass({
  getDefaultProps: function () {
    return {
      user: {
        login: 'kentcdodds',
        avatar_url: 'https://avatars.githubusercontent.com/u/1500684?v=2',
        html_url: 'https://github.com/kentcdodds',
        name: 'Kent C. Dodds',
        company: 'AtTask, Inc.',
        public_repos: 63,
        public_gists: 48,
        followers: 29,
        created_at: '2012-03-04T22:32:01Z',
        updated_at: '2014-09-30T22:32:49Z'
      },
      orgCount: 7
    };
  },
  render: function() {
    var user = this.props.user;
    var orgCount = this.props.orgCount;
    if (!user) {
      return <div></div>;
    }
    return (
      <div className="github-card user-card">
        <div className="header">
          <a className="avatar" href={user.html_url}>
            <img src={user.avatar_url} />
            <strong>{user.name}</strong>
            <span>@{user.login} | {user.company}</span>
          </a>
          <a className="button" href={user.html_url}>Follow</a>
        </div>
        <ul className="status">
          <li>
            <a href={'https://github.com/' + user.login + '?tab=repositories'}>
              <strong>{user.public_repos}</strong>Repos</a>
          </li>
          <li>
            <a href={'https://gist.github.com/' + user.login}>
              <strong>{user.public_gists}</strong>Gists</a>
          </li>
          <li>
            <a href={'https://github.com/' + user.login + '/followers'}>
              <strong>{user.followers}</strong>Followers</a>
          </li>
          <li>
            <a href={user.html_url}>
              <strong>{orgCount}</strong>Orgs</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = GitHubUserCard;