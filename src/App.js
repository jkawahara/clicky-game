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
    clickedIds: [],
    currentScore: 0,
    topScore: 0,
    message: ""
  };

  shuffleArray(simpsons) {
    for (let i = simpsons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = simpsons[i];
        simpsons[i] = simpsons[j];
        simpsons[j] = temp;
    }
    return simpsons;
  }

  handleImageClick = (id) => {
    if (this.state.clickedIds.indexOf(id) === -1) {
      this.setState((prevState) => ({
        currentScore: prevState.currentScore + 1,
        clickedIds: [ ...this.state.clickedIds, id ],
        message: "You guessed correctly!"
      }));
      this.shuffleArray(simpsons);  
    }
  };

  // Map over this.state.simpsons to render a character component for each character object
  render() {
    return (
      <Wrapper>
        <Header>Simpsons Memory</Header>
        <Score
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <div className="container pt-0">
          {this.state.simpsons.map(character => (
            <ImageCard
              handleImageClick={this.handleImageClick}
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
