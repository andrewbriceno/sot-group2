import React, {useState, useEffect} from 'react';

const SearchField = () => {
    let url = window.location.href
    url = url.split("/")[3]


    if (url == "products") {
      return (
          <form>
              <input style={{borderRadius: '30px', boxShadow: '2px 2px'}} type="text" placeholder="Search for any products"/>
          </form>
      );
    } else {
      return (
          ''
      );
    }
}

export default SearchField;
