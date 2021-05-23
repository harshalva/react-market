import React from "react";
import EachAnime from './EachAnime';

function Anime(props) {
    return (
        <div>
            {props.item.map((shows) => (
                <EachAnime title = {shows.title}
                rate = {shows.rate}
                available = {shows.available} />
            ))}
        </div>
    );
}
export default Anime;