import React, { Component } from "react";
import cards from "../src/cards";
import wrapper from "./components/wrapper";
import header from "./components/header";
import pictures from "../src/pictures.json";
import "../src/App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(cards => {
      cards.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <wrapper>
        <header score={this.state.score} highscore={this.state.highscore}>Clicky Game</header>
        {this.state.cards.map(pictures => (
          <card
            clickCount={this.clickCount}
            id={pictures.id}
            key={pictures.id}
            image={pictures.image}
          />
        ))}
      </wrapper>
    );
  }
}

export default App;