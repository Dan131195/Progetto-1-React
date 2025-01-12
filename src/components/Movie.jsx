import { Alert } from "react-bootstrap";
import { Component } from "react";
import { Spinner } from "react-bootstrap";

import Carousel from "react-bootstrap/Carousel";

const url = "https://www.omdbapi.com/?apikey=b894368b&s=";

class Movie extends Component {
  state = {
    movie: [],
    isLoading: true,
    inError: false,
  };

  getMovie = async () => {
    try {
      const response = await fetch(url + this.props.movie);
      if (response.ok) {
        const data = await response.json();
        console.log("DATA", data);
        this.setState({
          movie: data.Search,
          isLoading: false,
        });
      } else {
        throw new Error("Errore nel recupero dati API");
      }
    } catch (error) {
      console.log("ERRORE", error);
      this.setState({
        isLoading: false,
        inError: true,
      });
    }
  };

  componentDidMount() {
    this.getMovie();
  }

  render() {
    return (
      <main>
        {this.state.inError && (
          <div className="text-center">
            <Alert className="alert">Errore nel caricamento..</Alert>
          </div>
        )}
        {this.state.isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
        <Carousel className="my-4 myCarousel">
          <Carousel.Item className="col-12 col-md-2">
            {this.state.movie.map((res) => {
              return (
                <img
                  src={res.Poster}
                  alt={res.Title}
                  className="carouselImg"
                  key={res.imdbID}
                />
              );
            })}
          </Carousel.Item>
          <Carousel.Item className="col-12 col-md-2">
            {this.state.movie.map((res) => {
              return (
                <img
                  src={res.Poster}
                  alt={res.Title}
                  className="carouselImg"
                  key={res.imdbID}
                />
              );
            })}
          </Carousel.Item>
        </Carousel>
      </main>
    );
  }
}

export default Movie;
