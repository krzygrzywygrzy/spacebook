import { URL, options } from "./config"

export async function loginService(data) {
    let query = await fetch(`${URL}login`, {
        body: JSON.stringify(data),
        ...options,
    })
    return await query.json();
   
}

export async function signupService(data) {
    let query = await fetch(`${URL}signup`, {
        body: JSON.stringify(data),
        ...options,
    });
    return await query.json();
}

