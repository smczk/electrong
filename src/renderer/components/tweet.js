import React from 'react'

export default class Tweet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div key={ this.props.key } className="tweet">
        <div className="user">
          <span className="profile_image"><img src={ this.props.tweet.user.profile_image_url } /></span>
          <span className="name">{ this.props.tweet.user.name }</span>
          @
          <span className="screen_name">{ this.props.tweet.user.screen_name }</span>
        </div>
        <div className="text">{ this.props.tweet.text }</div>
        <div className="created-at">{ this.props.tweet.created_at }</div>
      </div>
    )
  }
}
