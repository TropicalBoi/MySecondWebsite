import React, { useState, useEffect, StrictMode } from "react";
import { css, keyframes } from "@emotion/css";
import DDLoading from "../../Loading/DDLoading";
import DDLImages from "./DDLImages";
import "./DDL.css";
import { Link } from "react-router-dom";

const textShadow = keyframes`
  0% {
    text-shadow: #000 1px 0 10px;
    color: #fff;
  }
  25% {
    text-shadow: #d4f9ff 1px 0 10px;
    color: #c4c4c4;
  }
  50% {
    text-shadow: #000 1px 0 10px;
    color: #fff;
  }
  75% {
    text-shadow: #d4f9ff 1px 0 10px;
    color: #c4c4c4;
  }
  100% {
    text-shadow: #000 1px 0 10px;
    color: #fff;
  }
`;

const BfaRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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
            @media screen and (max-width: 428px) {
              flex-direction: column;
              align-items: center;
            }
          `}
        >
          <div
            className={css`
              position: fixed;
              top: 0;
              right: 0;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: 2vw 2vw 0 0;
            `}
          >
            <img
              src={DDLImages.Printer}
              className={css`
                width: 8vmin;
                height: auto;
                margin-bottom: 1vh;
                @media screen and (max-width: 428px) {
                  width: 9vmin;
                  margin: 2vw 0 0.5vh 0;
                }
              `}
              alt="CV"
            />
            <p
              className={css`
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 500;
                font-size: 1.4vmin;
                text-align: center;
                color: #ffffff;
                @media screen and (max-width: 428px) {
                  font-size: 2.5vmin;
                }
              `}
            >
              CV
            </p>
          </div>
          <div
            className={css`
              width: 70vw;
              height: 100vh;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              background: #000;
              @media screen and (max-width: 428px) {
                flex-direction: column;
                justify-content: center;
              }
            `}
          >
            <img
              src={DDLImages.ProfilePic}
              className={css`
                width: 29.375vw;
                height: auto;
                margin-right: 5vw;
                @media screen and (max-width: 428px) {
                  width: 70vw;
                  margin-right: 0;
                }
              `}
              alt="Profile pic"
            />
            <div
              className={css`
                width: fit-content;
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                margin-right: 10vh;
                margin-top: 10vh;
                @media screen and (max-width: 428px) {
                  margin-right: 0;
                  margin-top: 2vh;
                }
              `}
            >
              <p
                className={css`
                  font-family: terminal-grotesque-open;
                  font-style: normal;
                  font-weight: 400;
                  font-size: 10vmin;
                  color: #f3f3f3;
                  margin-bottom: 2vh;
                  animation: ${textShadow} infinite 10s linear;
                  @media screen and (max-width: 428px) {
                    font-size: 10.5vmin;
                    margin-bottom: 1vh;
                  }
                `}
              >
                Tewprai Bualoi
              </p>
              <p
                className={css`
                  font-family: "Montserrat";
                  font-style: normal;
                  font-weight: 500;
                  font-size: 3.1vmin;
                  color: #d9d9d9;
                  margin-bottom: 3vh;
                  animation: ${textShadow} infinite 10s linear;
                  @media screen and (max-width: 428px) {
                    font-size: 4vmin;
                  }
                `}
              >
                Freelance Web Developer
              </p>
              <p
                className={css`
                  font-family: "terminal-grotesque";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 4.2vmin;
                  color: #ffffff;
                  margin-bottom: 3vh;
                  @media screen and (max-width: 428px) {
                    font-size: 6vmin;
                    margin-bottom: 1vh;
                  }
                `}
              >
                Competencies
              </p>
              <p className="skill-type">Front-end:</p>
              <div className="skills-container">
                <div className="skill-container">
                  <img
                    className="skill-img"
                    src={DDLImages.IconHTML}
                    alt="HTML"
                  />
                  <p className="skill-text">HTML</p>
                </div>
                <div className="skill-container">
                  <img
                    className="skill-img"
                    src={DDLImages.IconCSS}
                    alt="CSS"
                  />
                  <p className="skill-text">CSS</p>
                </div>
                <div className="skill-container">
                  <img
                    className="skill-img"
                    src={DDLImages.IconJS}
                    alt="JavaScript"
                  />
                  <p className="skill-text">JavaScript</p>
                </div>
                <div className="skill-container">
                  <img
                    className="skill-img"
                    src={DDLImages.IconReact}
                    alt="React"
                  />
                  <p className="skill-text">React.JS</p>
                </div>
              </div>
              <div className="skills-container">
                <div
                  className={css`
                    margin-right: 2vw;
                  `}
                >
                  <p className="skill-type">Back-end:</p>
                  <div className="skills-container">
                    <div className="skill-container">
                      <img
                        className="skill-img"
                        src={DDLImages.IconNode}
                        alt="Node.js"
                      />
                      <p className="skill-text">Node.JS</p>
                    </div>
                    <div className="skill-container">
                      <img
                        className="skill-img"
                        src={DDLImages.IconExpress}
                        alt="Express.JS"
                      />
                      <p className="skill-text">Express.JS</p>
                    </div>
                  </div>
                </div>
                <div className="database">
                  <p className="skill-type">Database:</p>
                  <div className="skills-container">
                    <div className="skill-container">
                      <img
                        className="skill-img"
                        src={DDLImages.IconMongo}
                        alt="MongoDB"
                      />
                      <p className="skill-text">MongoDB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;
              width: 65vw;
              height: auto;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
              `}
            >
              <p
                className={css`
                  font-family: "terminal-grotesque";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 4.2vmin;
                  color: #14ffff;
                  margin-bottom: 3vh;
                  @media screen and (max-width: 428px) {
                    font-size: 6vmin;
                  }
                `}
              >
                /Projects
              </p>
              <div className="projects-container">
                <Link to="/RPS">
                  <div className="project-container">
                    <img
                      src={DDLImages.UTDungeon}
                      className="project-img"
                      alt="UncleThong's Dungeon"
                    />
                    <p className="skill-text">UncleThong's Dungeon</p>
                  </div>
                </Link>
                <Link to="/UncleThongComic">
                  <div className="project-container">
                    <img
                      src={DDLImages.UTComic}
                      className="project-img"
                      alt="UncleThong's Comic"
                    />
                    <p className="skill-text">UncleThong's Comic</p>
                  </div>
                </Link>
                <a href="https://jammuan.netlify.app/">
                  <div className="project-container">
                    <img
                      src={DDLImages.JMMNG}
                      className="project-img"
                      alt="Jammming"
                    />
                    <p className="skill-text">ม่วนหลาย AKA Jammming</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
              `}
            >
              <p
                className={css`
                  font-family: "terminal-grotesque";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 4.2vmin;
                  color: #14ffff;
                  margin-bottom: 3vh;
                  @media screen and (max-width: 428px) {
                    font-size: 6vmin;
                  }
                `}
              >
                /Showcase
              </p>
              <div className="projects-container">
                <Link to="/">
                  <div className="project-container">
                    <img
                      src={DDLImages.WebTew}
                      className="project-img"
                      alt="Tewprai's art projects archive"
                    />
                    <p className="skill-text">Tewprai's art projects archive</p>
                  </div>
                </Link>
                <a href="https://www.ninasach.com/">
                  <div className="project-container">
                    <img
                      src={DDLImages.WebNina}
                      className="project-img"
                      alt="Nina Sach's website"
                    />
                    <p className="skill-text">Nina Sach's website</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
              `}
            >
              <p
                className={css`
                  font-family: "terminal-grotesque";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 4.2vmin;
                  color: #14ffff;
                  margin-bottom: 3vh;
                  @media screen and (max-width: 428px) {
                    font-size: 6vmin;
                  }
                `}
              >
                /Education
              </p>
              <div className="projects-container">
                <div className="edu-container">
                  <img
                    src={DDLImages.BFA}
                    className={css`
                      width: 3vw;
                      height: auto;
                      margin-right: 1vw;
                      animation: ${BfaRotate} infinite 3s linear;
                      @media screen and (max-width: 428px) {
                        width: 9vw;
                        margin-right: 3vw;
                      }
                    `}
                    alt="Tewprai's art projects archive"
                  />
                  <p className="edu-text">
                    BFA in Painting <br></br>
                    King Mongkut's Institute <br></br>
                    of Technology Ladkrabang
                  </p>
                </div>
                <div className="edu-container">
                  <img
                    src={DDLImages.Computer}
                    className={css`
                      width: 3vw;
                      height: auto;
                      margin-right: 1vw;
                      @media screen and (max-width: 428px) {
                        width: 9vw;
                        margin-right: 3vw;
                      }
                    `}
                    alt="Nina Sach's website"
                  />
                  <p className="edu-text">
                    Generation Thailand,<br></br>
                    Junior Software Developer <br></br>
                    (Fullstack),Bootcamp <br></br>
                    (12 Weeks / Full time)
                  </p>
                </div>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 65vw;
                margin: 10vh 0;
                @media screen and (max-width: 428px) {
                  margin: 4vh 0 10vh 0;
                }
              `}
            >
              <p
                className={css`
                  font-family: "terminal-grotesque";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 4.2vmin;
                  color: #efff31;
                  margin-bottom: 3vh;
                  @media screen and (max-width: 428px) {
                    font-size: 6vmin;
                  }
                `}
              >
                Contact
              </p>
              <p
                className={css`
                  font-family: "Montserrat";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 2.2vmin;
                  text-align: center;
                  color: #ffffff;
                  margin-bottom: 3vh;
                  @media screen and (max-width: 428px) {
                    font-size: 4vmin;
                    margin-bottom: 5vh;
                  }
                `}
              >
                (+66) 083 592 6693<br></br>
                tewprai.b@gmail.com<br></br>
                Based in Bangkok
              </p>
              <div
                className={css`
                  width: 8vw;
                  height: auto;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  align-items: center;
                  @media screen and (max-width: 428px) {
                    width: 45vw;
                  }
                `}
              >
                <a href="https://github.com/TropicalBoi">
                  <img
                    src={DDLImages.IconGit}
                    className={css`
                      width: 1.8vw;
                      height: auto;
                      @media screen and (max-width: 428px) {
                        width: 10vw;
                      }
                    `}
                    alt="GitHub"
                  />
                </a>
                <a href="https://www.linkedin.com/in/tewprai/">
                  <img
                    src={DDLImages.IconIn}
                    className={css`
                      width: 1.8vw;
                      height: auto;
                      @media screen and (max-width: 428px) {
                        width: 10vw;
                      }
                    `}
                    alt="LinkedIn"
                  />
                </a>
                <a href="https://www.instagram.com/t.ropicalboi/">
                  <img
                    src={DDLImages.IconIG}
                    className={css`
                      width: 1.8vw;
                      height: auto;
                      @media screen and (max-width: 428px) {
                        width: 10vw;
                      }
                    `}
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DDL;
