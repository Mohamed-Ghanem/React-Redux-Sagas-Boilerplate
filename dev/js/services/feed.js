import Service from './service'
import axios from 'axios';

export function getFeed() {
    // Service.get('https://jsonplaceholder.typicode.com/posts',
    //     (status, data) => {
    //         return {status: status, data: data}
    //     });
    return axios.get('https://jsonplaceholder.typicode.com/posts');
}