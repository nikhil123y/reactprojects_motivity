import axios from 'axios';

export default axios.create({
    baseURL:'https://api-qa.risksek.com/auth/v1'
});