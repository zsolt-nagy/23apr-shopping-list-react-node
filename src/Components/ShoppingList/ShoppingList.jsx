import React from 'react';

function ShoppingItem(props) { 

    function deleteClicked() {
      props.deleteItem(props.id);
    }

    return (
      <li>
        { props.item} ({props.quantity}) 
        <button onClick={deleteClicked}>DELETE</button>
      </li>
    ); 
} 

export default function ShoppingList({ shoppingList, deleteItem }) {
  const itemsJsx = shoppingList.map(listItem => 
    <ShoppingItem 
      key={listItem.id} 
      id={listItem.id}
      item={listItem.item} 
      quantity={listItem.quantity}
      deleteItem={deleteItem} /> 
  );

  return (
    <ul>{ itemsJsx }</ul>
  );
}
