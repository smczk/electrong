import EventEmitter from 'events'
import TwitterClient from '../libraries/twitter_client'

export default class Timeline extends EventEmitter {
  constructor() {
    super();
    this.tweets = [];
    this.twitterClient = new TwitterClient();
  }
  getTimeline() {
    this.twitterClient.get('statuses/home_timeline', {},  (error, tweets, response) => {
      if(error) {
        console.log(error);
      } else {
        console.log(tweets);
        this.tweets = tweets;
        this.emit('update', this.tweets);
        this.twitterClient.get('friends/ids', { scree_name: 'smczk' },  (error, data, response) => {
          if(error) {
            console.log(error);
          } else {
            console.log(data.ids);
            this.twitterClient.stream('user', {}, (stream) => {
              stream.on('data', (tweet) => {
                console.log(tweet);
                if(tweet.created_at) {
                  this.tweets = [tweet].concat(this.tweets);
                  this.emit('update', this.tweets);
                }
              });
            });
          }
        }.bind(this));
      }
    }.bind(this));
  }
}
