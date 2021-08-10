import { jsonRequest } from "../helpers/jsonRequest.js";

let baseUrl = 'http://localhost:3030/data/books';

async function getAll() {
    let result = await jsonRequest(baseUrl);
    return result;
}

async function get(id) {
    let result = await jsonRequest(`${baseUrl}/${id}`);
    return result;
}

async function create(item) {
    let result = await jsonRequest(`${baseUrl}`, 'POST', item, true);
    return result;
}

async function update(item, id) {
    let result = await jsonRequest(`${baseUrl}/${id}`, 'PUT', item, true);
    return result;
}

async function deleteItem(id) {
    let result = await jsonRequest(`${baseUrl}/${id}`, 'DELETE', undefined, true);
    return result;
}

async function getBooks() {
    let result = await jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc`, 'GET');
    return result;
}

async function getUserBooks(userId) {
    let result = await jsonRequest(`${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    return result;
}



export default {
    getAll,
    get,
    create,
    update,
    deleteItem,
    getBooks,
    getUserBooks,
}
