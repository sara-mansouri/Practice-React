import { Component } from "react";
import axios from "axios";
import "./App.css";
let countryName = "Canada";
class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      countries2: [],
      // countrySearch: "Canada",
      keywordSearch: "all",
      hasError: false,
    };
  }
  componentDidMount() {
    let apiCall = `https://restcountries.eu/rest/v2/${this.state.keywordSearch}`;
    const promise = axios.get(apiCall);

    promise
      .then((response) => {
        console.log("API promise successfull");
        const countrieslist = response.data;
        this.setState({ countries: countrieslist });
        // console.log(this.state.countries);
      })
      .catch(() => {
        console.log("API promise failed");
        this.setState({ hasError: true });
      });
  }

  componentDidUpdate() {
    let apiCall = `https://restcountries.eu/rest/v2/${this.state.keywordSearch}`;
    const promise = axios.get(apiCall);
    promise
      .then((response) => {
        console.log("API promise successfull");
        const countrieslist = response.data;
        this.setState({ countries: countrieslist });
        // console.log(this.state.countries);
      })
      .catch(() => {
        console.log("API promise failed");
        this.setState({ hasError: true });
      });
  }
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let keywordSearchtext = `name/${this.state.countrySearch}`;
    this.setState({ keywordSearch: keywordSearchtext });

    // console.log(this.state);
    // At this point, you can send the data to some remote server
  };

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong. Please try again later.</p>;
    }

    return (
      <div className="App">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            name="countrySearch"
            type="text"
            className="countrySearch"
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.countries.map((country) => {
          return (
            <ul>
              <li key={country.name}>
                <p>{country.name}</p>
                <img
                  alt={country.name}
                  src={country.flag}
                  style={{ width: 50 }}
                />
                <p>Capital city: {country.capital}</p>
                <p>Continent: {country.region}</p>
                <hr></hr>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Countries;
