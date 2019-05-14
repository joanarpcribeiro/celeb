import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      celebrities: []
    }
  }
  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/person/popular?page=2&api_key=641fef92d73fd584f3b23412e2c4fada')
      .then(response => {
        const celebrities = response.data.results /*response*/
        console.log("FIRST SET OF CELEBRITIES", celebrities)
        this.setState({
          celebrities: celebrities
        })
        console.log("SECOND SET OF CELEBRITIES", celebrities)
      })
      .catch(err => console.log(err))
  }
  render(){
    console.log("THIRD SET OF CELEBRITIES", this.state.celebrities)
    return (
      <div className="App">
        <ul>
        {this.state.celebrities.map( celebrity =>
          //console.log("DATA DETAILS",celebrity.name)
           <li key={celebrity.name}><img className="celebImg" src={`https://image.tmdb.org/t/p/w185/${celebrity.profile_path}`}/>{celebrity.name}</li>
           )}
        </ul>
      </div>
    );
  }
}
