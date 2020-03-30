import React from 'react';
import axios from 'axios';
import config from '../config.js';
import Table from 'react-bootstrap/Table'

export default class AdminViewProducts extends React.Component {

  state = {
      products: []
    }

  componentDidMount() {
    axios.get(`http://localhost:${config.server_port}/api/admin/get_product`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  deleteGloss(e) {
    const name = e.target.value;
    axios.delete(`http://localhost:${config.server_port}/api/admin/delete_product/${name}`) //this
      .then(res => {
        console.log(`Deleted ${res.data.name}!`)
      });
    axios.get(`http://localhost:${config.server_port}/api/admin/get_product`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      });
  }

  render() {
    return (
      <Table striped bordered>
        <thead>
        <tr>
          <th>Name</th>
          <th>Ailment</th>
          <th>Body Part</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
          {
            this.state.products.filter(products => products.name.toLowerCase().includes(this.props.query.toLowerCase())).map(products => {
              return(
                <tr key={products._id} title={products.name}>
                  <td>{products.name}</td>
                  <td>{products.ailment}</td>
                  <td>{products.body_part}</td>
                  <td>{products.description}</td>
                  <a class="btn btn-primary text-white px-4" href={`/admin/edit_products?key=${products._id}`}>EDIT</a>
                  {/*https://stackoverflow.com/questions/34875557/creating-custom-function-in-react-component*/}
                  <button class="btn btn-primary text-white px-4" onClick={this.deleteGloss.bind(this)} value={products.name}>DELETE</button>
                </tr>
              )
            })
          }
         </tbody>
      </Table>
    )
  }
};
// export default ViewProducts;
