import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 p-2">
      <img
        className="rounded-t-lg"
        src={IMG_CDN + posterPath}
        alt="movie-card"
      />
    </div>
  );
};

export default MovieCard;
