import { jsonRequest } from "../helpers/jsonRequest.js";

let baseUrl = 'http://localhost:3030/users';

function getAuthToken() {
    return localStorage.getItem('authToken');
}

function getUserName() {
    return localStorage.getItem('username');
}


function getUserId() {
    return localStorage.getItem('userId');
}

function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

async function login(user) {
    let result = await jsonRequest(`${baseUrl}/login`, 'POST', user);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('username', result.email);
}

async function register(user) {
    let result = await jsonRequest(`${baseUrl}/register`, 'POST', user);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('username', result.email);
}

async function logout() {
    await jsonRequest(`${baseUrl}/logout`, 'GET', undefined, true, true);
    localStorage.clear();
}


export default {
    getAuthToken,
    getUserId,
    getUserName,
    isLoggedIn,
    login,
    register,
    logout,
}