import React from 'react';

function ListItems(props) {

  return (

  <div id = "inner-div">
      <p>{props.text}</p>
      <button id = "cross" onClick={()=> {props.onSelect(props.id)}}>X</button>
  </div>

  );
}

export default ListItems;
