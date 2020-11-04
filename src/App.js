import React from "react";
import axios from "axios";
import Movie from "./Moive";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {data: 
        {data:
          {movies}
        }
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false});
  };
  componentDidMount() {
     this.getMovies();
  }
  render() {
    const { isLoading, movies} = this.state;
    return (
      <div>
      { isLoading ? "Loading": movies.map(movie => (
        <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_coer_image} />
      ))}
      </div>
    )
  }
}

export default App;
