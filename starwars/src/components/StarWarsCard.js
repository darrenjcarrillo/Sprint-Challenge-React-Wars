import React from "react";
import styled from "styled-components";

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 1rem;
  border: solid 2px #443e3e;
  width: 25%;
  height: 20rem;
  margin: 3rem 0;
  box-shadow: 10px 10px 5px black;
`;

const SpaceButton = styled.button`
  width: 10rem;
  height: 3rem;
  margin: 2rem auto;
  border: solid 1px grey;
  font-weight: 600;
  cursor: pointer;
  background: ${props => (props.primary ? "#7C6658" : "#fff")};
  color: ${props => (props.primary ? "#fff" : "#7C6658")};
  &:hover {
    background: ${props => (props.primary ? "#fff" : "#7C6658")};
    color: ${props => (props.primary ? "#7C6658" : "#fff")};
  }
`;

const StarWarsCard = props => {
  return (
    <CharacterContainer>
      <h2>{props.name}</h2>
      <p>Gender: {props.gender}</p>
      <p>Born: {props.birthYear}</p>
      <p>Eye Color: {props.eyeColor}</p>
      <SpaceButton primary>Pick Character</SpaceButton>
    </CharacterContainer>
  );
};

export default StarWarsCard;
