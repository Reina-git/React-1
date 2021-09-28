import React from "react";
import axios from "axios";

class RandomUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      userData: [],
    };
  }

  counter() {
    const clicks = this.state.clicks;
    this.setState({
      clicks: clicks + 1,
    });
    // clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    return clicks;
    // console.log(this.state.clicks);
  }

  getApi() {
    if (this.state.userData.length === 0) {
      axios
        .get("https://randomuser.me/api")
        .then((res) => {
          this.setState({
            userData: res.data.results,
            // api: JSON.stringify(res.data),
          });
          console.log("the state was empty", this.state.userData);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    } else {
      const copyOfUserData = [...this.state.userData];
      console.log("not empty", copyOfUserData);
      axios
        .get("https://randomuser.me/api")
        .then((res) => {
          const updatedUserData = copyOfUserData.concat(res.data.results);
          console.log("updatedUserData", updatedUserData);
          this.setState({
            userData: updatedUserData,
            // api: JSON.stringify(res.data),
          });
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col mt-3">
            <button
              type="button"
              onClick={() => {
                this.counter();
              }}
            >
              Button Counter
            </button>
            <p>
              Clicks:{" "}
              <a href="!#" id="clicks">
                0
              </a>
            </p>

            <button
              type="button"
              onClick={() => {
                this.getApi();
              }}
            >
              Get API Data
            </button>

            {this.state.userData.map((item, index) => (
              <div key={index}>
                <h1>{item.cell}</h1>
                <h2>
                  {item.name.title} {item.name.first} {item.name.last}
                </h2>
                <img src={item.picture.thumbnail}></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default RandomUser;
