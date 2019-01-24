// *** Include Modules: npm (react), /components, simpsons.json
import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Score from "./components/Score";
import simpsons from "./simpsons.json";

// Create component based App class that is stateful
class App extends Component {
  // Initialize state properties; set simpsons value to simpsons.json 
  state = {
    simpsons: simpsons,
    clickedIds: [],
    currentScore: 0,
    topScore: 0,
    message: "",
    shake: false
  };

  // Shuffle position of characters for rendering
  shuffleArray(simpsons) {
    for (let i = simpsons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = simpsons[i];
        simpsons[i] = simpsons[j];
        simpsons[j] = temp;
    }
    return simpsons;
  }

  // Handler for onClick of character
  handleImageClick = (id) => {
    // Check if clicked character was not previously clicked then continue game
    if (this.state.clickedIds.indexOf(id) === -1 && this.state.currentScore < 11) {
      this.setState((prevState) => ({
        currentScore: prevState.currentScore + 1,
        clickedIds: [ ...this.state.clickedIds, id ],
        message: "You guessed correctly!",
        shake: false
      }));
      // Check if current score is greater than top score then set top score
      if (this.state.topScore <= this.state.currentScore) {
        this.setState((prevState) => ({
          topScore: prevState.currentScore
        }));
      }
    // Check if current score is 12 then complete game
    } else if (this.state.clickedIds.indexOf(id) === -1 && this.state.currentScore >= 11) {
        this.setState({
          currentScore: 0,
          topScore: 0,
          clickedIds: [],
          message: "You won! Play again",
          shake: false
        });
    // Else restart game
    } else {
      this.setState({
        currentScore: 0,
        clickedIds: [],
        message: "You guessed incorrectly!",
        shake: true
      });
    }
    // Call shuffle position
    this.shuffleArray(simpsons);
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

// Export class for importing into index.js
export default App;
