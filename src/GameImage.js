import React from "react";

function GameImage(props) {
  return (
    <img style={{ width: 50, padding: 10 }} src={props.src} name={props.name} />
  );
}

export default GameImage;
