import React from 'react'
import * as appLaws from '../game/AppLaws';

class Home extends React.Component {
  constructor() {
    super();
    this.playGame = this.playGame.bind(this)
  }
  playGame() {
    console.log("play game")
    console.log(appLaws)
    appLaws.setPage('game', this.props.dispatch)
  }
  render() {
    return(
      <div className="page home-page">
        <div className="button play-button" onClick={this.playGame}>
          Play
        </div>
      </div>
    )
  }
}

export default Home;
