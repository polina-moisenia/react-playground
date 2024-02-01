import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function FetchComponent() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItemsFromServer();
    }, []);

    const fetchItemsFromServer = async () => {
        try {
            const { data } = await axios.get('https://gy44av6oj6.execute-api.eu-north-1.amazonaws.com/items');
            setItems(data);
        }
        catch (error) {
            console.error(`Fetch with axios failed in func component with error ${error}`);
        }
    }

    return (
        <div>
            {
                items.map(item => <div key={item.id}>{item.description}</div>)
            }
        </div>
    );
}