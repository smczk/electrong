import React from 'react'
import Tweet from './tweet'

export default class TweetList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="tweet-list">
        { (() => {
          return this.props.tweets.map((tweet, index) => {
              return <Tweet key={ index } tweet={ tweet } />
          });
        })() }
      </div>
    )
  }
}
