const getUserService = async (userID) => {
    const query = await fetch("http://localhost:8080/getUser", {
        method: "post",
        body: JSON.stringify({userID}),
        headers: {
            "Content-Type": "application/json",
        }
    });
    return await query.json();
}

export default getUserService;