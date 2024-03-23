import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    return (
      <div
        className={`box ${
          this.props.title === "You" ? this.props.result : " "
        }`}
      >
        <h2>{this.props.title}</h2>
        <img
          className="item-img"
          src={this.props.item && this.props.item.img}
          alt="Select of play"
        />
        <h2
          className={`${
            this.props.title === "You" && this.props.result === "Win"
              ? this.props.result
              : " "
          }`}
        >
          {this.props.title === "Computer" &&
          this.props.result !== "Tie" &&
          this.props.result !== " "
            ? this.props.result === "Win"
              ? "Lose"
              : "Win"
            : this.props.result}
        </h2>
      </div>
    );
  }
}
