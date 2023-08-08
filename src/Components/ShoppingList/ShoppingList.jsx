import React, { useState } from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm';

function ShoppingItem(props) { 

  const [isEditable, setEditable] = useState(false);

  function deleteClicked() {
    props.deleteItem(props.id);
  }

  function updateClicked() {
    setEditable(oldValue => !oldValue);
  }

  let content = <>{ props.item} ({props.quantity})</>;
  if (isEditable) {
    content = (
      <ShoppingForm 
        mode="Update" 
        updatedId={props.id} 
        itemDefault={props.item} 
        quantityDefault={props.quantity}
        updateItem={props.updateItem} />
    );
  }


  return (
    <li>
      { content }
      <button onClick={deleteClicked}>DELETE</button>
      <button onClick={updateClicked}>
        {isEditable ? 'CANCEL' : 'EDIT'}
      </button>
    </li>
  ); 
} 

export default function ShoppingList({ shoppingList, deleteItem, updateItem }) {
  const itemsJsx = shoppingList.map(listItem => 
    <ShoppingItem 
      key={listItem.id} 
      id={listItem.id}
      item={listItem.item} 
      quantity={listItem.quantity}
      deleteItem={deleteItem}
      updateItem={updateItem} /> 
  );

  return (
    <ul>{ itemsJsx }</ul>
  );
}
