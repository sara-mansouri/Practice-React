import { Component } from "react";
import axios from "axios";
import "./App.css";
class UserListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      hasError: false,
    };
  }
  componentDidMount() {
    let apiCall = `https://randomuser.me/api/?results=25`;
    const promise = axios.get(apiCall);
    promise
      .then((response) => {
        const userlist = response.data.results;
        this.setState({
          users: userlist,
          // noResults: false,
        });
        // }
      })
      .catch(() => {
        this.setState({ isLoading: false, hasError: true });
      });
  }

  handleDelete = (props, e) => {
    e.preventDefault();
    const remainedUsers = this.state.users.filter(
      (user) => user.phone !== props
    );
    this.setState({ users: remainedUsers });
  };

  render() {
    return (
      <div className="usersApp">
        {this.state.users.map((user) => {
          let fullname = user.name.first + " " + user.name.last;
          let bgcolor = "";
          user.gender === "female"
            ? (bgcolor = "#d298a2ad")
            : (bgcolor = "#73c5ce");
          return (
            <div
              key={user.phone}
              className="user"
              style={{ background: bgcolor }}
            >
              {/* {user.id.value} */}
              <img
                className="profile-image"
                src={user.picture.thumbnail}
                alt={user.name.first}
              />
              {user.gender === "female" ? (
                <img
                  className="gender"
                  src="https://image.flaticon.com/icons/png/512/103/103277.png"
                  alt={user.gender}
                  style={{ height: 50 }}
                />
              ) : (
                <img
                  className="gender"
                  src="https://cdn.iconscout.com/icon/free/png-512/male-5-83466.png"
                  alt={user.gender}
                  style={{ height: 50 }}
                />
              )}
              <p>{fullname}</p>
              <p>
                <img
                  src="https://www.pngkit.com/png/full/18-185997_location-icon-png-vodafone-new-logo-png.png"
                  alt={user.location.city}
                  style={{ height: 20 }}
                />
                {user.location.city},{user.location.state}
              </p>
              <p>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/email-1818372-1541480.png"
                  alt={user.location.city}
                  style={{ height: 20 }}
                />
                {user.email}
              </p>

              {user.nat === "US" ? (
                <img
                  className="flag"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                  alt={user.nat}
                  style={{ height: 20 }}
                />
              ) : (
                <p>non-american</p>
              )}
              <button
                className="deleteUser"
                onClick={(e) => this.handleDelete(user.phone, e)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserListItem;
