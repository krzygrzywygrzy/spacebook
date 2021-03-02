import Cookies from 'js-cookie'

import { URL, contentType } from "./config"

export const addFriend = async (data) => {
    let query = await fetch(`${URL}addFriend`, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            ...contentType,
            "Authorization": `Basic ${Cookies.get("authUser") | ''}`,
        }
    });
    return await query.json();
}