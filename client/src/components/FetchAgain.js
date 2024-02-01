import React, { useCallback, useEffect, useState } from "react";

const FetchComponentAgain = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchItems = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch('/items');
            const items = await response.json();

            if(!response.ok) {
                throw new Error('Failed to fetch');
            }

            setItems(items);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        //let isSubscribe = true;
        fetchItems();
        return;
    }, [fetchItems]);

    return (
        <div style={{ display: "flex", flexBasis: "row", justifyContent: "center" }}>
            <ul>
                {items && items.map(item => <li key={item.id}>{item.description}</li>)}
            </ul>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    );
}

export default FetchComponentAgain;