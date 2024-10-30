// crrating here useFetch Hook

import React, { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
            } catch (err) {
                console.log(err.message);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();

    }, [url]);

    return { data, isLoading, error }
}

export default useFetch;
