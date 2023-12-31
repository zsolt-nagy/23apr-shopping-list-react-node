import React, { useState, useEffect } from "react";

import ShoppingForm from "./Components/ShoppingForm/ShoppingForm";
import ShoppingList from "./Components/ShoppingList/ShoppingList";

import "./App.css";

function App() {
    const [shoppingList, setShoppingList] = useState([]);

    const loadData = () => {
        fetch("https://3vk7hm-8080.csb.app/api/items")
            .then((x) => x.json())
            .then((response) => {
                setShoppingList(response);
            });
    };

    useEffect(loadData, []);

    function addItem(item, quantity) {
        fetch("https://3vk7hm-8080.csb.app/api/items/new", {
            method: "POST",
            body: JSON.stringify({
                item,
                quantity,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            mode: "cors",
        }).then(loadData);
    }

    function deleteItem(id) {
        fetch("https://3vk7hm-8080.csb.app/api/items/" + id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            mode: "cors",
        }).then(loadData);
    }

    function updateItem(id, item, quantity) {
        fetch("https://3vk7hm-8080.csb.app/api/items/" + id, {
            method: "PUT",
            body: JSON.stringify({
                item,
                quantity,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
            },
            mode: "cors",
        }).then(loadData);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Shopping List</h1>
            </header>
            <main>
                <ShoppingForm addItem={addItem} mode="Add" />
                <ShoppingList shoppingList={shoppingList} deleteItem={deleteItem} updateItem={updateItem} />
            </main>
        </div>
    );
}

export default App;
