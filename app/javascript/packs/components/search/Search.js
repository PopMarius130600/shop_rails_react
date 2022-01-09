import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount() {

    axios.get("/api/v1/sub_categorys").then( response => {
      const data = response.data;
      this.setState({
        data: data
      })
    })
    .catch(error => console.log(error));
  }
  
  render() {
    let categorys = [];
    categorys = this.state.data;
    return (
      <div>
        <h3>Search </h3>
      </div>
    )
  }
}

export default Home