import React from 'react'
import TwitterMain from './main'
import TwitterApiClient from 'node-twitter-api'

export default class Root extends React.Component {
  render() {
    return(
      <main>
        <TwitterMain />
      </main>
    )
  }
}
