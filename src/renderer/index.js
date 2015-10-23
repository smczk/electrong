import React from 'react'
import Root from './components/root'
import Application from './application/index'

global.twitter = new Application();
React.render(<Root />, document.body);
