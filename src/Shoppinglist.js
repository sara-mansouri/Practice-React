import { Component } from "react";
import "./App.css";
import closeicon from "./close.png";

class Shoppinglist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppinglist: [{ id: "abc", name: "apple" }],
      newItem: "",
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    var joined = this.state.shoppinglist.concat({
      id: Date.now(),
      name: this.state.newItem,
    });
    this.setState({
      shoppinglist: joined,
      newItem: "",
    });
  };
  handleDelete = (props, e) => {
    e.preventDefault();
    // console.log(props);
    const items = this.state.shoppinglist.filter((item) => item.id !== props);
    this.setState({ shoppinglist: items });
  };

  render() {
    console.log("render", this.state);
    return (
      <div className="App">
        <div className="shoppinglistcontainer">
          <form onSubmit={this.handleSubmit} id="listform">
            Add to the the shopping list:
            <input
              id="mainInput"
              name="newItem"
              value={this.state.newItem}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <div className="shoppinglist">
            <h3>My Groceries shopping list: </h3>
            <ul>
              {this.state.shoppinglist.map((item) => {
                return (
                  <li key={item.id}>
                    {item.name}
                    <button
                      className="delete-item"
                      onClick={(e) => this.handleDelete(item.id, e)}
                    >
                      <img src={closeicon} style={{ height: 15 }} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Shoppinglist;
