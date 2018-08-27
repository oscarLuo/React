import axios from "axios";

export default {
  user: {
    login: credentials => {
      return axios.post('/api/auth', { credentials }).then(res => res.data.user)
    },
    signup: users =>{
      return axios.post('/api/users', {users}).then(res => res.data.user)
    }
  },
  books: {
    fetchAll: () => axios.get("/api/books").then(res => res.data.books),
    create: book => axios.post('/api/books', { book })
                         .then(res => res.data.book)
  }
};