import React, { useState } from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import RPSImages from "./RPSimages";

const RPS = () => {
  const [userInputValue, setInput] = useState("");
  const [botText, setBotText] = useState(
    "This is a normal Rock, Paper, Scissors game. Pick one of your choice!"
  );
  const [cast, setCast] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  const [replay, setReplay] = useState(false);

  const initialState = () => {
    setInput("");
    setBotText(
      "This is a normal Rock, Paper, Scissors game. Pick one of your choice!"
    );
    setCast(false);
    setIsPlayed(false);
    setReplay(false);
  };

  const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return (userInput = `a ${userInput}`);
    } else if (!userInput) {
      return (userInput = "Nothing!");
    } else {
      return (userInput = "Something wrong!");
    }
  };

  const getComputerChoice = (userChoice) => {
    if (
      userChoice === "a rock" ||
      userChoice === "a paper" ||
      userChoice === "a scissors" ||
      userChoice === "a bomb"
    ) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          return "a rock";
        case 1:
          return "a paper";
        case 2:
          return "a scissors";
        default:
          return "how can it be?";
      }
    } else {
      return "up for a loser.";
    }
  };


  const determineWinner = (userChoice, computerChoice) => {

    if (computerChoice !== "up for a loser.") {
      if (userChoice === "a bomb") {
        return "Calm down buddy";
      } else if (userChoice === computerChoice) {
        return "The game is a tie";
      } else if (
        (userChoice === "a rock" && computerChoice === "a paper") ||
        (userChoice === "a paper" && computerChoice === "a scissors") ||
        (userChoice === "a scissors" && computerChoice === "a rock")
      ) {
        return "The computer won";
      } else {
        return "You won";
      }
    } else {
      return `Please try 'rock', 'paper' or 'scissors'`;
    }
  };

  const playGame = (input = "") => {
    setIsPlayed(!isPlayed);

    const userChoice = getUserChoice(input);
    const computerChoice = getComputerChoice(userChoice);
    const winner = determineWinner(userChoice, computerChoice);

    setBotText(`wait a second.....`);
    setTimeout(() => {
      setBotText(
        `You threw ${userChoice}. The computer threw ${computerChoice}. ${winner}! Another round?`
      );
      setReplay(!replay);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(playGame(userInputValue));
  };

  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Link to="/TropicalDeepDungeon">
        <div
          className={css`
            width: auto;
            height: auto;
            position: fixed;
            right: 84.3vw;
            top: 6.3vh;
            display: flex;
            flex-direction: row;
            align-items: center;
            z-index: 10;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <span
              className={css`
                transform: rotate(45deg);
                transform-origin: bottom left;
                border-right: 0.15rem solid #ffff00;
                height: 1rem;
                box-shadow: 0 0 10px 1px #ffffff;
              `}
            ></span>
            <span
              className={css`
                transform: rotate(-45deg);
                transform-origin: top left;
                border-left: 0.15rem solid #ffff00;
                height: 1rem;
                box-shadow: 0 0 10px 1px #ffffff;
              `}
            ></span>
          </div>
          <span
            class={css`
              display: inline-block;
              width: 13vw;
              height: 2px;
              background-color: #ffff00;
              margin: 10px 0;
              box-shadow: 0 0 10px 2px #ffffff;
              transition: width 1s ease-out;
              &::before {
                content: "";
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
              }
              &:hover {
                width: 15.6vw;
              }
            `}
          ></span>
        </div>
      </Link>
      <form onSubmit={handleSubmit}>
        <div
          className={css`
            width: 50vw;
            height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          `}
        >
          <p
            className={css`
              font-family: RuneScape Quill;
              font-style: normal;
              font-weight: normal;
              font-size: 5.4vh;
              line-height: 5.5vh;
              display: flex;
              align-items: center;
              text-align: center;
              color: #ffff00;
              text-shadow: #ffffff 1px 0 10px;
            `}
          >
            {botText}
          </p>
          {!isPlayed && (
            <>
              <div
                className={css`
                  position: absolute;
                  width: 14.5vw;
                  height: 21.1vh;
                  left: 77.6vw;
                  top: 75.3vh;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  align-items: center;
                `}
              >
                {cast && (
                  <>
                    <p
                      className={css`
                        font-family: RuneScape Quill;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 4vh;
                        line-height: 2vh;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        color: #ffff00;
                        text-shadow: #ffffff 1px 0 10px;
                      `}
                      onClick={() => setCast(!cast)}
                    >
                      ...or cast a secret spell to summon your divine weapon!
                    </p>
                    <input
                      type="text"
                      value={userInputValue}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="cast it here..."
                    />
                    <input type="submit" value="Cast!" />
                  </>
                )}
                {!cast && (
                  <img
                    src={RPSImages.roach}
                    className={css`
                      width: auto;
                      height: 20vh;
                    `}
                    alt="RoachMagician"
                    onClick={() => setCast(!cast)}
                  />
                )}
              </div>{" "}
              <div
                className={css`
                  width: 50vw;
                  height: 10vh;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-evenly;
                  align-items: center;
                `}
              >
                <button
                  onClick={() => setInput("rock")}
                  className={css`
                    background-color: black;
                    border-color: black;
                    border-radius: 10px;
                    width: 150px;
                    height: 150px;
                  `}
                >
                  <img
                    src={RPSImages.rock}
                    className={css`
                      width: 100px;
                      height: 100px;
                    `}
                    alt="rock"
                  />
                </button>
                <button
                  onClick={() => setInput("paper")}
                  className={css`
                    background-color: black;
                    border-color: black;
                    border-radius: 10px;
                    width: 150px;
                    height: 150px;
                  `}
                >
                  <img
                    src={RPSImages.paper}
                    className={css`
                      width: 100px;
                      height: 100px;
                    `}
                    alt="paper"
                  />
                </button>
                <button
                  onClick={() => setInput("scissors")}
                  className={css`
                    background-color: black;
                    border-color: black;
                    border-radius: 10px;
                    width: 150px;
                    height: 150px;
                  `}
                >
                  <img
                    src={RPSImages.scissors}
                    className={css`
                      width: 100px;
                      height: 100px;
                    `}
                    alt="scissors"
                  />
                </button>
              </div>
            </>
          )}
          {replay && (
            <>
              <button
                onClick={() => initialState()}
                className={css`
                  background-color: black;
                  border-color: #ffff00;
                  border-radius: 10px;
                  width: auto;
                  height: auto;
                  box-shadow: #ffffff 1px 0 10px;
                `}
              >
                <p
                  className={css`
                    font-family: RuneScape Quill;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 5.4vh;
                    line-height: 5.5vh;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #ffff00;
                    text-shadow: #ffffff 1px 0 10px;
                  `}
                >
                  YES
                </p>
              </button>{" "}
              <button
                onClick={() => initialState()}
                className={css`
                  background-color: black;
                  border-color: #ffff00;
                  border-radius: 10px;
                  width: auto;
                  height: auto;
                  box-shadow: #ffffff 1px 0 10px;
                `}
              >
                <p
                  className={css`
                    font-family: RuneScape Quill;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 5.4vh;
                    line-height: 5.5vh;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #ffff00;
                    text-shadow: #ffffff 1px 0 10px;
                  `}
                >
                  YES
                </p>
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default RPS;
