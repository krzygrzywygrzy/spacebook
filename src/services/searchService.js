import {useState} from 'react';

const searchService = async (phrase) => {
    //const [results, setResults] = useState({res: {}, loaded: false})

    const query = await fetch("http://localhost:8080/search",{
        body: JSON.stringify({phrase}),
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }
    })//.then(res => setResults({res, loaded: true}));
    return await query.json();
}

export default searchService;