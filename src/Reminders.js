import { Component } from "react";

class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sara Mansouri",
      newreminderValue: "",
      reminders: [],
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;

    this.setState({ newreminderValue: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    let newjoinedarray = this.state.reminders.concat({
      key: Date.now(),
      val: this.state.newreminderValue,
    });
    this.setState({
      reminders: newjoinedarray,
      newreminderValue: "",
    });
    console.log(this.state);
    // this.setState({
  };
  render() {
    return (
      <div>
        <h2>Reminders for {this.state.name}</h2>
        <form onSubmit={this.handleSubmit}>
          <p>Add a new Reminder</p>
          <textarea
            type="text"
            name="newreminderValue"
            onChange={this.handleChange}
            value={this.newreminderValue}
          />
          <button type="submit">Add</button>
        </form>
        <div className="reminder-list">
          {this.state.reminders.map((item) => {
            return (
              <div key={item.key} className="reminder">
                {item.val}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Reminders;
