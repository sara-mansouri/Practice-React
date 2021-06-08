import { Component } from "react";
import axios from "axios";
import "./App.css";
class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      BookSearch: "harry Potter",
      hasError: false,
      isLoading: true,
      noResults: false,
    };
  }
  componentDidMount() {
    let apiCall = `https://www.googleapis.com/books/v1/volumes?q=${this.state.BookSearch}`;
    const promise = axios.get(apiCall);
    // this.setState({ isLoading: true });
    promise
      .then((response) => {
        console.log(response);
        if (response.data.totalItems === 0) {
          this.setState({ isLoading: false, books: [], noResults: true });
        } else {
          const booklist = response.data.items;
          this.setState({
            isLoading: false,
            books: booklist,
            noResults: false,
          });
          console.log(this.state.books);
        }
      })
      .catch(() => {
        this.setState({ isLoading: false, hasError: true });
      });
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;

    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("You are searching for this book:" + this.state.BookSearch);
    let apiCall = `https://www.googleapis.com/books/v1/volumes?q=${this.state.BookSearch}`;
    const promise = axios.get(apiCall);
    // this.setState({ isLoading: true });
    promise
      .then((response) => {
        if (response.data.totalItems === 0) {
          this.setState({ isLoading: false, books: [], noResults: true });
        } else {
          const booklist = response.data.items;
          this.setState({
            isLoading: false,
            books: booklist,
            noResults: false,
          });
          console.log(this.state.books);
        }
      })
      .catch(() => {
        this.setState({ isLoading: false, hasError: true });
      });
  };

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong. Please try again later.</p>;
    }

    return (
      <div className="BooksApp">
        <form onSubmit={this.handleSubmit}>
          Book Name:
          <input
            value={this.state.BookSearch}
            name="BookSearch"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.isLoading ? (
          <img
            style={{ width: 50 }}
            src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="loading"
          />
        ) : (
          <p className="Result">Search Result:</p>
        )}
        {this.state.noResults ? (
          <p>no books found for {this.state.BookSearch}</p>
        ) : (
          this.state.books.map((book) => {
            return (
              <div key={book.id} className="book">
                <a
                  href={book.volumeInfo.canonicalVolumeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>{book.volumeInfo.title}</p>
                </a>
                <a
                  href={book.volumeInfo.canonicalVolumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="book-image"
                >
                  <img
                    alt={book.name}
                    src={
                      book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.smallThumbnail
                        : "https://images.vexels.com/media/users/3/140908/isolated/preview/bdc30bbe3c022a11e2d7fd0e642c61ae-open-book-icon-by-vexels.png"
                    }
                    style={{ width: 120 }}
                  />
                </a>
                <p className="description">{book.volumeInfo.description}</p>
                <p className="categories">
                  categories: {book.volumeInfo.categories}
                </p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Books;
