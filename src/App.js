import React, { Component } from 'react';
import logo from './logo.svg';
import Panel from "./components/Panel";
import Scoreboard from "./components/Scoreboard";
import friends from "./friends.json";
import './App.css';

let current = 0,
high = 0;

class App extends Component {

  state = {
    friends,
    current,
    high
  };

  whenClicked = (clickedId) => {
    const indexOfClicked = this.state.friends.findIndex(i => i.id === clickedId);
    if (this.state.friends[indexOfClicked].beenClicked === true) {
      this.setState({ current: 0});
      this.setState(prevState => ({
        friends: prevState.friends.map(
          obj => (Object.assign(obj, { beenClicked: false }))
        )
      }));
      
      console.log("You lose");
    } else {
      this.setState(prevState => ({
        friends: prevState.friends.map(
          obj => (obj.id === clickedId ? Object.assign(obj, { beenClicked: true }) : obj)
        )
      }), this.shuffle(this.state.friends));
      
      this.setState({ current: this.state.current + 1}, this.checkForHigh(this.state.current + 1));
    }
  };

  checkForHigh = (current) => {
    console.log(current);
    console.log(this.state.high);
    if (current > this.state.high) {
      console.log("new high");
      this.setState({ high: current});
    }
  };

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    this.setState({ friends: array });
    console.log(array);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is a Clicky Game</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {this.state.friends.map(friend => (
                  <Panel
                    whenClicked={this.whenClicked}
                    id={friend.id}
                    key={friend.id}
                    name={friend.name}
                    image={friend.image}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <Scoreboard
                current={this.state.current}
                high={this.state.high}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;