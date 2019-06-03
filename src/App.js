import React, {Component} from 'react';
import {Container, Row, Button} from 'reactstrap';

class App extends Component {
  state = {
    power: 'on',
    powercol: 'success',
    display: 'sound',
  }

  handlePower = () => {
    if (this.state.power === 'on') {
      this.setState({power: 'off', powercol: 'dark'})
    } else {
      this.setState({power: 'on', powercol: 'success'})
    }
  }
  handleKeyPress = (e) => {
   let audio = document.getElementById(String.toUpperCase(e.key));
   if (audio !== null && this.state.power === 'on') {
    audio.play();
    this.setState({display: audio.src});
    audio.parentNode.focus();
    console.log(audio.parentElement.className)
   }
  }
  handleClick = (e) => {
    let audio = document.getElementById(e.target.innerText);
    if (this.state.power === 'on') {
      audio.play();
      this.setState({display: audio.src});
      audio.parentNode.focus();
    }
  }
  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  render() {
    return (
      <Container className="App vh-100" id="drum-machine">
        <Row className="w-100 h-100">
          <div className="drum col align-self-center">
              <Button color="primary" className="drum-pad col-3 m-2" id="drum-q" onClick={this.handleClick}>Q
                <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q"></audio>
              </Button>
              <Button color="primary" className="drum-pad col-3 m-2" id="drum-w" onClick={this.handleClick}>W
                <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W"></audio>
              </Button>
              <Button color="primary" className="drum-pad col-3 m-2" id="drum-e" onClick={this.handleClick}>E
                <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E"></audio>
              </Button>
              <Button color="primary" className="drum-pad col-3 m-2" id="drum-a" onClick={this.handleClick}>A
                <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A"></audio>
              </Button>
              <Button color="primary" className="drum-pad col-3 m-2" id="drum-s" onClick={this.handleClick}>S
                <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S"></audio>
              </Button>
              <Button color="primary" className="drum-pad col-3 m-2" id="drum-d" onClick={this.handleClick}>D
                <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D"></audio>
              </Button>
              <Button color="primary" className="drum-pad col-3 m-2" id="drum-z" onClick={this.handleClick}>Z
                <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z"></audio>
              </Button>
              <Button color="primary" className="drum-pad col-3 m-2" id="drum-x" onClick={this.handleClick}>X
                <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X"></audio>
              </Button>
              <Button color="primary" className="drum-pad col-3 m-2" id="drum-c" onClick={this.handleClick}>C
                <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C"></audio>
              </Button>
          </div>
          <div id="machine" className="col align-self-center">
            <Button color={this.state.powercol} className="col-12 mb-4" onClick={this.handlePower}>Power {this.state.power}</Button>
            <Button color="primary" className="col-12 mb-4" id="display">{this.state.display}</Button>
          </div>
          
        </Row>
      </Container>
    );
  }
}

export default App;
