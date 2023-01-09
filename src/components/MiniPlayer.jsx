import React, { useRef, useState } from "react";
import classes from "../styles/MiniPlayer.module.css";
import MiniPlayerImage from "../assets/images/3.jpg";
import ReactPlayer from "react-player/youtube";

export default function MiniPlayer({ id, title }) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoURL = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        {" "}
        close{" "}
      </span>  
      <ReactPlayer 
      className={classes.player}
        url={videoURL} 
      />
      <p>{title}</p>
    </div>
  );
}
