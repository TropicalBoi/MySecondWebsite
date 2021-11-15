import React, { useState, useEffect, StrictMode } from "react";
import { css, keyframes } from "@emotion/css";
import { Link } from "react-router-dom";
import DDLoading from "../../Loading/DDLoading";
import Typewriter from "typewriter-effect";

const boxShadow = keyframes`
  0% {
    box-shadow: #000 1px 0 10px;
    color: #fff;
  }
  25% {
    box-shadow: #fc0 1px 0 10px;
    color: #c4c4c4;
  }
  50% {
    box-shadow: #000 1px 0 10px;
    color: #fff;
  }
  75% {
    box-shadow: #fc0 1px 0 10px;
    color: #c4c4c4;
  }
  100% {
    box-shadow: #000 1px 0 10px;
    color: #fff;
  }
`;

const DDL = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFiveSeconds = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setLoading(false);
    };
    loadFiveSeconds();
  });

  return (
    <>
      {loading ? (
        <StrictMode>
          <DDLoading />
        </StrictMode>
      ) : (
        <div
          className={css`
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-evenly;
          `}
        >
          <Link to="/">
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
          <div
            className={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 70px;
              width: 100vw;
              height: 10vh;
              background: #000;
              border-radius: 20px;
              align-items: center;
            `}
          >
            <p
              className={css`
                width: 580px;
                height: 120px;
                font-family: RuneScape Quill;
                font-style: normal;
                font-weight: normal;
                font-size: 5vh;
                line-height: 4vh;
                display: flex;
                align-items: center;
                text-align: center;
                color: #ffff00;
                text-shadow: #ffffff 1px 0 10px;
              `}
            >
              Starvation and homelessness are *NOT* incentives for a productive
              society.
            </p>

            <p
              className={css`
                font-family: RuneScape Quill;
                font-style: normal;
                font-weight: normal;
                font-size: 8.4vh;
                line-height: 9.5vh;
                display: flex;
                align-items: center;
                text-align: center;
                color: #ffff00;
                text-shadow: #ffffff 1px 0 10px;
              `}
            >
              Welcome to the Deep Dungeon!
            </p>
          </div>
          <Link to="/RPS">
            <div
              className={css`
                padding: 50px;
                width: 500px;
                height: 500px;
                margin: 50px;
                background: #000;
                animation: ${boxShadow} infinite 5s linear;
                border-radius: 20px;
                display: flex;
                justify-content: center;
              `}
            >
              <p
                className={css`
                  width: 10vw;
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
                ROCK PAPER SCISSORS
              </p>
            </div>
          </Link>
          <div
            className={css`
              padding: 50px;
              width: 500px;
              height: 500px;
              margin: 50px;
              background: #000;
              animation: ${boxShadow} infinite 5s linear;
              border-radius: 20px;
              display: flex;
              justify-content: center;
            `}
          >
            <Typewriter
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
              options={{
                strings: [
                  "This dungeon is under construction.",
                  "Coming soon!",
                  "<3 <3 <3",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div
            className={css`
              padding: 50px;
              width: 500px;
              height: 500px;
              margin: 50px;
              background: #000;
              animation: ${boxShadow} infinite 5s linear;
              border-radius: 20px;
              display: flex;
              justify-content: center;
            `}
          >
            <Typewriter
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
              options={{
                strings: [
                  "This dungeon is under construction.",
                  "Coming soon!",
                  "<3 <3 <3",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div
            className={css`
              padding: 50px;
              width: 500px;
              height: 500px;
              margin: 50px;
              background: #000;
              animation: ${boxShadow} infinite 5s linear;
              border-radius: 20px;
              display: flex;
              justify-content: center;
            `}
          >
            <Typewriter
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
              options={{
                strings: [
                  "This dungeon is under construction.",
                  "Coming soon!",
                  "<3 <3 <3",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div
            className={css`
              padding: 50px;
              width: 500px;
              height: 500px;
              margin: 50px;
              background: #000;
              animation: ${boxShadow} infinite 5s linear;
              border-radius: 20px;
              display: flex;
              justify-content: center;
            `}
          >
            <Typewriter
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
              options={{
                strings: [
                  "This dungeon is under construction.",
                  "Coming soon!",
                  "<3 <3 <3",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div
            className={css`
              padding: 50px;
              width: 500px;
              height: 500px;
              margin: 50px;
              background: #000;
              animation: ${boxShadow} infinite 5s linear;
              border-radius: 20px;
              display: flex;
              justify-content: center;
            `}
          >
            <Typewriter
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
              options={{
                strings: [
                  "This dungeon is under construction.",
                  "Coming soon!",
                  "<3 <3 <3",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DDL;
