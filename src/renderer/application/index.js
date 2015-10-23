import EventEmitter from 'events'
import HomeTimeline from '../stores/timeline'

export default class Application extends EventEmitter {
  constructor() {
    super();
    this.consumerKey = "aLPwZpkniIqkQdviZZ8g3FBuG",
    this.consumerSecret = "TNmBuavU0JulF01iWaAfBF3QH3oVE0323O8bsRoh8h4LatkojL",
    this.accessToken = null,
    this.accessTokenSecret = null
  }
}
