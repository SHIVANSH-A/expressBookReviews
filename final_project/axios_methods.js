const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Task 10: Get all books – Using async callback function
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/books/list`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Task 11: Search by ISBN – Using Promises
function getBookByISBN(isbn) {
    axios.get(`${BASE_URL}/books/isbn/${isbn}`)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
}

// Task 12: Search by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/books/author/${author}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Task 13: Search by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/books/title/${title}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Test the functions
getAllBooks();
getBookByISBN('123456789');
getBooksByAuthor('Author Name');
getBooksByTitle('Book Title');
