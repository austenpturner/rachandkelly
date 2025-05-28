import * as React from "react";
import sparkles from "../images/sparkles.gif";
import alien from "../images/dancingAlienGuy.gif";
import MONSTERTRUCK from "../images/MONSTERTRUCK.gif";
import rachandkelly from "../images/rachandkelly.jpg";
import dancingWorm from "../images/dancingWorm.gif";
import "../styles/styles.scss";
import Scroller from "../components/scroller";

const IndexPage = () => {
  // const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [wormPosition, setWormPosition] = React.useState({ x: "", y: "" });
  const [isDragging, setIsDragging] = React.useState(false);
  const wormRef = React.useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault(); // Prevent default image dragging
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setWormPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  React.useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging]);

  return (
    <main onMouseMove={handleMouseMove}>
      <div className="container__photo">
        <img src={rachandkelly} alt="rachandkelly" className="rachandkelly" />
        <img src={sparkles} alt="sparkles" className="sparkles gif" />
      </div>
      <div className="container__worm">
        <img
          style={{
            top: `${wormPosition.y}px`,
            left: `${wormPosition.x}px`,
            cursor: "grab",
          }}
          src={dancingWorm}
          alt="dancing worm gif"
          className="dancingWorm"
          ref={wormRef}
          onMouseDown={handleMouseDown}
          draggable={false}
        />
        <p>{isDragging ? "yeehaw" : "move that worm, sister"}</p>
      </div>

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
