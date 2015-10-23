import React from 'react'
import TwitterApiClient from 'node-twitter-api'

export default class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consumerKey: global.twitter.consumerKey,
      consumerSecret: global.twitter.consumerSecret,
      requestToken: "",
      requestTokenSecret: "",
      url: ""
    }
  }
  twitterClient() {
    return(
      new TwitterApiClient({
        consumerKey: this.state.consumerKey,
        consumerSecret: this.state.consumerSecret,
        callback: 'http://example.com'
      })
    )
  }
  onGetToken(accessToken, accessTokenSecret) {
    this.props.onGetToken(accessToken, accessTokenSecret)
  }
  componentWillMount() {
    this.twitterClient().getRequestToken((error, requestToken, requestTokenSecret, results) => {
      this.setState({
        requestToken: requestToken,
        requestTokenSecret: requestTokenSecret,
        url: this.twitterClient().getAuthUrl(requestToken)
      });
    }.bind(this));
  }
  componentDidMount() {
    let webview = React.findDOMNode(this.refs.webview);
    webview.addEventListener('load-commit', (event) => {
      let matched;
      if(matched = webview.getUrl().match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/)) {
        webview.style.display = "none";
        this.twitterClient().getAccessToken(this.state.requestToken, this.state.requestTokenSecret, matched[2], (error, accessToken, accessTokenSecret) => {
          this.onGetToken(accessToken, accessTokenSecret);
        }.bind(this));
      }
    });
  }
  render() {
    return(
      <div className="authentication-view">
        <webview src={ this.state.url } autosize="on" ref="webview"></webview>
      </div>
    )
  }
}
