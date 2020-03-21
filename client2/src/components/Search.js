import React, {useState, useEffect} from 'react';

const SearchField = () => {
    let url = window.location.href
    url = url.split("/")[3]


    if (url == "glossary") {
      return (
          <form>
              <input style={{borderRadius: '30px', boxShadow: '2px 2px'}} type="text" placeholder="Filter for Manuel"/>
          </form>
      );
    } else {
      return (
          ''
      );
    }
}

export default SearchField;
