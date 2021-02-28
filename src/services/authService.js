const options = {
    method: "post",
    headers: {
        "Content-Type": "application/json", 
    }
}

export async function loginService(data) {
    let query = await fetch("http://localhost:8080/login", {
        body: JSON.stringify(data),
        ...options,
    })
    return await query.json();
   
}

export async function signupService(data) {
    let query = await fetch("http://localhost:8080/signup", {
        body: JSON.stringify(data),
        ...options,
    })
    return await query.json();
}

