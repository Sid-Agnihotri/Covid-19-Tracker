import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailActions";
const Game = (props) => {
  //Load Deatails
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetails(props.id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{props.name}</h3>
      <p>{props.released}</p>
      <img src={props.image} alt={props.name} />
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
