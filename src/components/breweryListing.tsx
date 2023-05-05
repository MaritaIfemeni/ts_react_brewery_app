import React, { useEffect, useState} from "react";
import axios from "axios";


const breweryListing = (ChildComponent: (data: any) => JSX.Element, url: string) => {
    return () => {
        const [breweries, setBreweries] = useState([]);
        const [error, setError] = useState("");
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            axios
                .get(url)
                .then((response) => {
                    setBreweries(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        }, [])
        if (loading) {
            return <p>Loading...</p>;
        }
        if (error) {
            return <p>{error}</p>;
        }
        return <ChildComponent data={breweries} />;
    };
};


export default breweryListing;
