import "./styles.scss";
import * as React from "react";

export default function Scroller({ content, direction }) {
  return (
    <div className={`scroller scroller--${direction}`}>
      <div className={`scroller__inner scroller__inner--${direction}`}>
        <p className="scroll-text">{content}</p>
        <p className="scroll-text">{content}</p>
      </div>
    </div>
  );
}
