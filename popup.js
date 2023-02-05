import axios from 'axios';
console.log("This is a popup!")
//detect emotion
// const axios = require('axios');

const text = 'I am so happy! This is amazing';
axios({
    method: 'post',
    url: 'https://api.aylien.com/api/v1/sentiment',
    headers: {
        'X-AYLIEN-TextAPI-Application-ID': '780d0eaa',
        'X-AYLIEN-TextAPI-Application-Key': '021f7b8414e22ea23e9a8c026e46602b'
    },
    data: {
        'text': text
    }
}).then(response => {
    console.log("response.data\n", response.data);
}).catch(error => {
    console.log(error);
});