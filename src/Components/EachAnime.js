import React from "react";
import "./Anime.css";

function EachAnime(props) {
    return (
        <div>
            <div className = "anime">
                <h1>{props.title}  {props.rate}</h1>
                <h2>{props.available}</h2>
            </div>
        </div>
    );
}
export default EachAnime;