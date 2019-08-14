import React, { useState, useEffect } from 'react';

const useFetch = url => {
    const [data, setData] = useState(null);

    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }

    useEffect(() => { fetchData() });

    return data;
}

const FetchMe = () => {
    const demo = "https://jsonplaceholder.typicode.com/todos/1";

    const data = useFetch(demo);

    if (!data) { return <div>Loading...</div> } else {

        return (<div>
            <h1>Fetch Me</h1>
            <p>This component fetches data from an external api. No issues here.</p>

            <ul>
                <li>ID: {data.id}</li>
                <li>Title: {data.title}</li>
                <li>Completed: {data.completed ? "true" : "false"}</li>
            </ul>

            <a href="https://reactgo.com/fetch-data-react-hooks/">Tutorial</a>
        </div>)
    }

}

export default FetchMe;