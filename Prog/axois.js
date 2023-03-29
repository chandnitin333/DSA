const axios = require("axios");

// const options = {
//     method: 'GET',
//     url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
//     headers: {
//         'X-RapidAPI-Key': '5faebdbf91mshf150961de6b8373p193d6fjsn73c07eb75925',
//         'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//     }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });


// var request = require("request");
var options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures?',
    qs: { live: 'all' },
    headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': '5faebdbf91mshf150961de6b8373p193d6fjsn73c07eb75925'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});