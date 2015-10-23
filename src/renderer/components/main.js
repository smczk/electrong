import React from 'react'
import Authentication from './authentication'
import Contents from './contents'
import Twitter from '../libraries/twitter_client'
import Timeline from '../stores/timeline'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }
  }
  onGetToken(accessToken, accessTokenSecret) {
    global.twitter.accessToken = accessToken
    global.twitter.accessTokenSecret = accessTokenSecret

    var timeline = new Timeline();
    timeline.on('update', (tweets) => {
      this.setState({ tweets: tweets });
    }.bind(this));
    timeline.getTimeline();
  }
  render() {
    return(
      <div className="main">
        {(() => {
          if(global.twitter.accessToken && global.twitter.accessTokenSecret) {
            return <Contents tweets={ this.state.tweets }/>
          } else {
            return <Authentication onGetToken={ this.onGetToken.bind(this) } />
          }
        })()}
      </div>
    )
  }
}
