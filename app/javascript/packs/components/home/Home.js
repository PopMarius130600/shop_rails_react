import React, { Component } from 'react';
import axios from 'axios';
import { Link, IndexLink } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    console.log("category");

    axios.get("/api/v1/sub_categorys").then( response => {    
      console.log(response)
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
        <h1>Home page!</h1>
        {/* <Link to="/" activeClassName="active">Home</Link> */}
        {categorys.map((category) =>
          <div> 
            <h3>{category.name}</h3>
          </div>
        )}
      </div>
    )
  }
}

export default Home