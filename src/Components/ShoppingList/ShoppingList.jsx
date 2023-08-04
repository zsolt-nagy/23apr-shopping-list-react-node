import React from 'react';

function ShoppingItem(props) { 
    return <li>{ props.item} ({props.quantity}) <button>DELETE</button></li>; 
} 

export default function ShoppingList({ shoppingList }) {
  const itemsJsx = shoppingList.map(listItem => 
    <ShoppingItem 
      key={listItem.id} 
      id={listItem.id}
      item={listItem.item} 
      quantity={listItem.quantity} /> 
  );

  return (
    <ul>{ itemsJsx }</ul>
  );
}
