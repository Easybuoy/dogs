import React, { Component } from "react";
import "./App.css";
import Dog from "./components/Dogs/Dog";
import Filter from "./components/Filter/Filter";
import { Triple } from "react-preloading-component";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dog: {},
      breeds: [],
      url: "https://dog.ceo/api/breed/basenji/images/random"
    };
  }

  componentDidMount() {
    this.getBreeds("https://dog.ceo/api/breeds/list/all");
    this.getDogs("https://dog.ceo/api/breeds/image/random");
  }

  getBreeds = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          breeds: data.message
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getDogs = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          dog: data.message
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  onChange = e => {
    let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`;
    this.setState({ url });
    this.getDogs(url);
  };

  render() {
    if (Object.keys(this.state.breeds).length > 0) {
      console.log("chei");
      return (
        <div className="App">
          <h1>Dogs</h1>
          <Filter breeds={this.state.breeds} onChange={this.onChange} />
          <Dog
            image={this.state.dog}
            getDogs={this.getDogs}
            url={this.state.url}
          />
        </div>
      );
    }

    return (
      <div className="preloader">
        <Triple color="#f26419" size={80} />
      </div>
    );
  }
}
