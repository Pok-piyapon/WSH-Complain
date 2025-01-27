import axios from 'axios';

const wsh = axios.create({
  baseURL: 'https://c.webservicehouse.com/Api',
  headers:{
    "Content-Type":"application/json"
  }
})

export default wsh;
