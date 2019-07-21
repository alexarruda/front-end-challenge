import axios from 'axios';

const api = axios.create({ 
    baseURL: 'http://www.mocky.io/v2/5d164fc10e00001730a118b8'
    /*baseURL: 'https://rocketseat-node.herokuapp.com/api' */
});

export default api; 