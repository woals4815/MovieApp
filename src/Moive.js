import React from "react";
import ProTypes from "prop-types";

function Movie({ id, year, title, summary, poster}) {
    return <h4>{title}</h4>;
}

Movie.prototype = {
    id: ProTypes.number.isRequired,
    year: ProTypes.number.isRequired,
    title: ProTypes.string.isRequired,
    summary: ProTypes.string.isRequired,
    poster: ProTypes.string.isRequired
};

export default Movie;