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
    console.log("category");

    axios.get("http://localhost:3000/sub_categorys").then( response => {
      console.log(response);
      const data = response.data;
      this.setState({
        data: data
      })
    })
    .catch(error => console.log(error));
  }
  
  render() {
    console.log(this.state)
    let categorys = [];
    categorys = this.state.data;
    return (
      <div>
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