import React from 'react'
import Background from '../../containers/Background';
import * as appLaws from '../game/AppLaws';

class Home extends React.Component {
  constructor() {
    super();
    this.setPageGame = this.setPageGame.bind(this)
    this.setPageInstructions = this.setPageInstructions.bind(this)
    this.setPageSettings = this.setPageSettings.bind(this)
  }
  setPageGame() {
    appLaws.setPage('game', this.props.dispatch)
  }
  setPageInstructions() {
    appLaws.setPage('instructions', this.props.dispatch)
  }
  setPageSettings() {
    appLaws.setPage('settings', this.props.dispatch)
  }
  render() {
    return(
      <div className="page home-page">
        <Background />
        <div className="home-page-title">
          Quassinobally
        </div>
        <div className="home-page-buttons">
          <div className="button play-button" onClick={this.setPageGame}>
            Play
          </div>
          <div className="button instructions-button" onClick={this.setPageInstructions}>
            Instructions
          </div>
          <div className="button settings-button" onClick={this.setPageSettings}>
            Settings
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
