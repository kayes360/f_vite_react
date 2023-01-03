import classes from "../styles/Video.module.css"
import image from "../assets/images/3.jpg"
import { Link } from "react-router-dom";

export default function Video({title,id,noq}) {
  return (
    <div> 
        <div className={classes.video}>
          <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
          <p>{title}</p>
          <div className={classes.qmeta}>
            <p>{title} Questions</p>
            <p>Total Points : {noq*5}</p>
          </div>
        </div> 
    </div>
  );
}
