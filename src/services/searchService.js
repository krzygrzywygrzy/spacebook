import { URL, options } from "./config"

const searchService = async (phrase) => {
    const query = await fetch(`${URL}search`,{
        body: JSON.stringify({phrase}),
        ...options
    })
    return await query.json();
}

export default searchService;