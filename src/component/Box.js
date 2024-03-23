import React from "react";

const Box = (props) => {
  console.log(props);

  return (
    <div className={`box ${props.title === "You" ? props.result : " "}`}>
      <h2>{props.title}</h2>
      <img
        className="item-img"
        src={props.item && props.item.img}
        alt="Select of play"
      />
      <h2
        className={`${
          props.title === "You" && props.result === "Win" ? props.result : " "
        }`}
      >
        {props.title === "Computer" &&
        props.result !== "Tie" &&
        props.result !== " "
          ? props.result === "Win"
            ? "Lose"
            : "Win"
          : props.result}
      </h2>
    </div>
  );
};

export default Box;
