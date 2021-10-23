import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { css, keyframes } from "@emotion/css";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Loading = () => {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const props = useSpring({ xys });

  const visible = keyframes`
  0% {
    background: #d1d8d5;
    
  }
  
  89% {
    background: #d1d8d5;
  }

  90% {
    background: #000000;
  }

  100% {
    background: #000000;
  }
`;

  return (
    <div
      className={css`
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        background-color: #000;
      `}
    >
      <div
        className={css`
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
        ref={ref}
      >
        <p
          className={css`
            position: absolute;
            width: 350px;
            height: 194px;
            left: 800px;
            top: 431px;

            font-family: Montserrat;
            font-style: normal;
            font-weight: 800;
            font-size: 50px;
            line-height: 61px;
            text-align: center;

            color: #000;
            z-index: 3;
          `}
        >
          {" "}
          You will enter site in 5{" "}
        </p>
        <animated.div
          className={css`
            width: 100ch;
            height: 100ch;
            border-radius: 100%;
            transition: box-shadow 0.5s;
            will-change: transform;
            animation: ${visible} 5s linear;
          `}
          style={{ transform: props.xys.to(trans) }}
          onMouseLeave={() => set([0, 0, 1])}
          onMouseMove={(e) => {
            const rect = ref.current.getBoundingClientRect();
            set(calc(e.clientX, e.clientY, rect));
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
