import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Score from "./components/Score";
import simpsons from "./simpsons.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    simpsons: simpsons,
    currentScore: 0,
    topScore: 0
  };

  // Map over this.state.simpsons to render a character component for each character object
  render() {
    return (
      <Wrapper>
        <Header>Simpsons Memory</Header>
        <Score
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <div className="container pt-0">
          {this.state.simpsons.map(character => (
            <ImageCard
              id={character.id}
              key={character.id}
              image={character.image}
            />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
