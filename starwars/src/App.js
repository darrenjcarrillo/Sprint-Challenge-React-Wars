import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Axios from "axios";
import StarWarsCard from "./components/StarWarsCard";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);

  useEffect(() => {
    Axios.get("https://swapi.co/api/people/")
      .then(response => {
        const people = response.data.results;
        console.log("the photo", people);
        setPeople(people);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardContainer>
        {people.map(item => {
          return (
            <StarWarsCard
              key={item}
              name={item.name}
              gender={item.gender}
              birthYear={item.birth_year}
              eyeColor={item.eye_color}
            />
          );
        })}
      </CardContainer>
    </div>
  );
};

export default App;
