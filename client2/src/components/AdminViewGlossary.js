import React from 'react';
import axios from 'axios';
import config from '../config.js';

export default class AdminViewGlossary extends React.Component {

  state = {
      glossary: []
    }

    componentDidMount() {
      axios.get(`http://localhost:${config.server_port}/api/admin/get_glossary`)
        .then(res => {
          const glossary = res.data;
          this.setState({ glossary });
        })
    }

    deleteGloss(e) {
      const title = e.target.value;
      axios.delete(`http://localhost:${config.server_port}/api/admin/delete_glossary/${title}`)
        .then(res => {
          console.log(`Deleted ${res.data.title}!`)
        });
      axios.get(`http://localhost:${config.server_port}/api/admin/get_glossary`)
        .then(res => {
          const glossary = res.data;
          this.setState({ glossary });
        });
    }

    render() {
      return (
        <div>
          <tr>
            <td>Title</td>
            <td>Usage</td>
          </tr>
          {this.state.glossary.map(glossary => {
            return(
              <tr key={glossary.id} name={glossary.title}>
                <td>{glossary.title}</td>
                <td>{glossary.usage}</td>
                <a class="btn btn-primary text-white px-4" href={`/admin/edit_glossary?key=${glossary._id}`}>EDIT</a>
                {/*https://stackoverflow.com/questions/34875557/creating-custom-function-in-react-component*/}
                <button class="btn btn-primary text-white px-4" onClick={this.deleteGloss.bind(this)} value={glossary.title}>DELETE</button>
              </tr>
            )
          })}
        </div>
      )
    }

};
// export default ViewProducts;