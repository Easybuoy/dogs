import React, { Component } from "react";
import "./App.css";
import Dog from './components/Dogs/Dog';

export default class App extends Component {
  constructor() {
    super();
    this.state ={
      dog: {}
    }
  }

  componentDidMount() {
    this.getDogs("https://dog.ceo/api/breeds/image/random");
  }

  getDogs = URL => {
  fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          dog: data.message,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
    }

  render() {
    return (
      <div className="App">
        <h1>Dogs</h1>
        <Dog image={this.state.dog} getDogs={this.getDogs} url="https://dog.ceo/api/breed/basenji/images/random"  />
      </div>
    );
  }
}
