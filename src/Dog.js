import { Component } from "react";
import axios from "axios";

class Dog extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps) {
    const breed = this.props.match.params.breed;
    const prevBreed = prevProps.match.params.breed;
    if (breed !== prevBreed) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const breed = this.props.match.params.breed;
    const promise = axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    promise.then((response) => {
      this.setState({ images: response.data.message });
    });
  };

  render() {
    console.log(this.props, this.state);
    return (
      <div>
        <h2>{this.props.match.params.breed}</h2>
        <ul className="dog-imges">
          {this.state.images.map((imageUrl) => {
            return (
              <li key={imageUrl}>
                <link rel="preload" as="image" href={imageUrl}></link>
                <img
                  src={imageUrl}
                  style={{ width: 200 }}
                  loading="lazy"
                  decoding="async"
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Dog;
