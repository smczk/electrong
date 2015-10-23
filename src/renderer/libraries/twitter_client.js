import Twitter from 'twitter'

export default class TwitterClient {
  constructor() {
    return new Twitter({
      consumer_key: global.twitter.consumerKey,
      consumer_secret: global.twitter.consumerSecret,
      access_token_key: global.twitter.accessToken,
      access_token_secret: global.twitter.accessTokenSecret
    });
  }
}
