import { jsonRequest } from "../helpers/jsonRequest.js";

let baseUrl = 'http://localhost:3030/users';

function setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

function getUser() {
    let user = localStorage.getItem('user') === null
        ? undefined
        : JSON.parse(localStorage.getItem('user'));

    return user;
}

async function login(user) {
    let result = await jsonRequest(`${baseUrl}/login`, 'POST', user);
    setUser(result);
}

async function register(user) {
    let result = await jsonRequest(`${baseUrl}/register`, 'POST', user);
    setUser(result);
}

async function logout() {
    await jsonRequest(`${baseUrl}/logout`, 'GET', undefined, true, true);
    localStorage.clear();
}


export default {
    login,
    register,
    logout,
    setUser,
    getUser,
}