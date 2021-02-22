export async function loginService(data) {
    let query = await fetch("http://localhost:8080/login", {
        body: JSON.stringify(data),
        method: "post",
        headers: {
            "Content-Type": "application/json", 
        }
    })
    return await query.json();
   
}