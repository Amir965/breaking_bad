import React from "react";
import "./App.css";
import Card from "./Card";
import API_URL from "./Api";

class App extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    fetch(API_URL, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => this.setState({ data: response }))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <h1 className="breaking_top">Breaking Bad </h1>
        <div className="App">
          {this.state.data.length > 0 ? (
            this.state.data.map((item) => (
              <Card data={item} key={item.char_id} />
            ))
          ) : (
            <h1 className="breaking">Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}
export default App;
