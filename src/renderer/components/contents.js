import React from 'react'
import TweetList from './tweet_list'

export default class Contents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contents">
        <TweetList tweets={ this.props.tweets }/>
      </div>
    )
  }
}
