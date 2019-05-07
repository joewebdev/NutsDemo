import axios from 'axios';

export default {
    category(offset) {
        const request = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer dyYy10tL_XDe4qWTonCnXaLRq8zRGrxv'
            },
            url: 'https://api.commercetools.co/nuts-custom-demo-1/products?offset=' + offset + '&limit=10'
        }
        return axios(request);
    }   
}