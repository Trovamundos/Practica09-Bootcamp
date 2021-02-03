import axios from 'axios';

const getUsers = () => {
    return axios.get('https://www.breakingbadapi.com/api/characters').then(response => {
        return response.data;
    });
}

export { getUsers };