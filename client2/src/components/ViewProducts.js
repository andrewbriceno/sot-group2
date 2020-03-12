import React from 'react';
import axios from 'axios';

export default class ViewProducts extends React.Component {

  state = {
      products: []
    }

    componentDidMount() {
      axios.get(`http://localhost:3001/api/users/get_product`)
        .then(res => {
          const products = res.data;
          this.setState({ products });
        })
    }

    render() {
      return (
        <ul style={{backgroundColor: "white"}}>
          { this.state.products.map(product => <li>{product.name}</li>)}
        </ul>
      )
    }

};
// export default ViewProducts;
