const searchService = async (phrase) => {
    const query = await fetch("http://localhost:8080/search",{
        body: JSON.stringify({phrase}),
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await query.json();
}

export default searchService;