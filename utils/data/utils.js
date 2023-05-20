import { clientCredentials } from "../client"

const BASE_URL = clientCredentials.databaseURL;

const fetchBuilder = {
    get: (path, uid) => new Promise((resolve, reject) =>
        fetch(`${BASE_URL}${path}`, {
            headers: {
                Authorization: uid,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })
            .then(resp => resp.json())
            .then(resolve)
            .catch(reject)
    ),
    post: (path, newObj, uid) => new Promise((resolve, reject) =>
        fetch(`${BASE_URL}${path}`, {
            headers: {
                Authorization: uid, // This is how to pass the uid
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            method: "POST",
            body: JSON.stringify(newObj)
        })
            .then(resp => resp.json())
            .then(resolve)
            .catch(reject)
    ),
    put: (path, newObj) => new Promise((resolve, reject) =>
        fetch(`${BASE_URL}${path}`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(newObj)
        })
            .then(resp => resp.json())
            .then(resolve)
            .catch(reject)
    ),
    delete: (path) => new Promise((resolve, reject) =>
        fetch(`${BASE_URL}${path}`, {
            method: "DELETE",
        })
            .then(resp => resp.json())
            .then(resolve)
            .catch(reject)
    ),
}

export default fetchBuilder;
