import React from 'react'
import Background from '../../containers/Background';
import * as appLaws from '../game/AppLaws';

import HomeButton from '../../containers/HomeButton';

import gunSound from '../../assets/audio/gun.wav';

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
          <HomeButton onClick={this.setPageGame} buttonText={"Play"} />
          <HomeButton onClick={this.setPageInstructions} buttonText={"Instructions"} />
          <HomeButton onClick={this.setPageSettings} buttonText={"Settings"} />
        </div>
      </div>
    )
  }
}

export default Home;
