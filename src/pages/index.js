import * as React from "react";
import sparkles from "../images/sparkles.gif";
import alien from "../images/dancingAlienGuy.gif";
import MONSTERTRUCK from "../images/MONSTERTRUCK.gif";
import rachandkelly from "../images/rachandkelly.jpg";
import turntable from "../images/turntable.gif";
import "../styles/styles.scss";
import Scroller from "../components/scroller";

const IndexPage = () => {
  return (
    <main>
      <div className="container__photo">
        <img src={rachandkelly} alt="rachandkelly" className="rachandkelly" />
        <img src={sparkles} alt="sparkles" className="sparkles gif" />
      </div>
      {/* <iframe
        // style="border-radius:12px"
        src="https://open.spotify.com/embed/track/3DwQ7AH3xGD9h65ezslm6q?utm_source=generator"
        width="100%"
        height="352"
        // frameBorder="0"
        // allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe> */}
      {/* <img src={turntable} alt="turn table gif" className="turntable" /> */}
      <div className="container__alien-truck">
        <img
          src={MONSTERTRUCK}
          alt="monster truck gif"
          className="monsterTruck"
        />
        <img src={alien} alt="dancing alien gif" className="alien" />
      </div>

      <Scroller
        content="six seasons and a movie six seasons and a movie"
        direction="left"
      />
      <Scroller
        content="rachandkelly.com rachandkelly.com achandkelly.com rachandkelly.com
            achandkelly.com rachandkelly.com"
        direction="right"
      />
    </main>
  );
};

export const Head = () => <title>R&K</title>;

export default IndexPage;
