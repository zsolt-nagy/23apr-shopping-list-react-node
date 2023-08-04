import React, { useState, useEffect } from "react";

import ShoppingForm from "./Components/ShoppingForm/ShoppingForm";
import ShoppingList from "./Components/ShoppingList/ShoppingList";

import "./App.css";

function App() {
    const [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
        fetch("https://3vk7hm-8080.csb.app/api/items")
            .then((x) => x.json())
            .then((response) => {
                setShoppingList(response);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Shopping List</h1>
            </header>
            <main>
                <ShoppingForm />
                <ShoppingList shoppingList={shoppingList} />
            </main>
        </div>
    );
}

export default App;
