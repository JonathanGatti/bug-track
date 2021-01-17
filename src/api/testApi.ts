import axios from 'axios';

const getPosts = async () => {
  let res = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return res.data;
}

const  getPost = async () =>  {
  let res = await  axios.get('https://jsonplaceholder.typicode.com/posts/1')

  return res.data;
}