import axios from 'axios';



const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "AIzaSyCKdir_XqndGfDkCG-Jyl22ScDvXp18rQE";

export default {

  // //Get books from the Google Books API
  // searchGoogle: async function(query) {
  //   const response = await fetch(BASEURL + query + '&key=' +APIKEY);
  //   return await response.json()
  // },
  // getbooks: async function() {
  //   const response = await fetch('/api/books', {
  //     method: 'GET',
  //     body: JSON.stringify()
  //   })
  //   return await response.json();
  // },
  //
  // savebook: async function(data) {
  //   // debugger
  //   const response = await fetch('api/books/', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   return await response.json();
  // },
  // deleteBook: async  function(id) {
  //   const response = await fetch('api/book/' + id)
  //   return await response.json();

  searchGoogle: async function(query) {
    const response = await fetch(BASEURL + query + '&key=' +APIKEY);
    return await response.json()
  },

  // Gets all books
  getbooks: function() {
    return axios.get('/api/books');
  },

  // Saves a book to the database
  savebook: function(savedBooks) {
    return axios.post('/api/books', savedBooks);
  },

  // Deletes the book with the given id
  deletebook: function(id) {
    return axios.delete('/api/books/' + id);
  }

};
