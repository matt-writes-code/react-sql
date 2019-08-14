import React, { useState, useEffect } from 'react';

const useFetch = url => {
    const [data, setData] = useState(null);

    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }

    useEffect(() => { fetchData() }, []);

    return data;
}

const Names = () => {
    const server = "http://localhost:5000/"

    const data = useFetch(server);

    if (!data) { return <div>Loading...</div> } else {
        console.log(data)
        return (<div>
            <h1>Names Me</h1>
            <p>This component fetches data from a mysql database via localhost:5000</p>
            <p>There's a problem of fetching from localhost:5000 to localhost:3000 called CORS.</p>
            <p>Read the solution <a href="https://daveceddia.com/access-control-allow-origin-cors-errors-in-react-express/">here</a></p>
            <p>tl;dr | npm install cors and import the code into server.js</p>
            <>
                {data.map(x => <p>{x.id}. {x.name}</p>)}
            </>

            <a href="https://reactgo.com/fetch-data-react-hooks/">Tutorial</a>
        </div>)
    }

}

export default Names;