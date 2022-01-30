/*
 * Pin JSON to IPFS using Pinata API
 */

const axios = require('axios');
const FormData = require('form-data');
const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
const data = new FormData();

const sampleJSON = {
    id: 1
}

const jsonAsString = JSON.stringify(sampleJSON);
const bytes = new TextEncoder().encode(jsonAsString);
const blob = new Blob([bytes], {
    type: "application/json;charset=utf-8"
});

data.append('file', blob , '<file_name>');

/* Upload corresponding metadata file to IPFS */
axios.post(url, data, {
    headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        'pinata_api_key': '<your_api_key>',
        'pinata_secret_api_key': '<your_secret_api_key>'
    }
}).then(function (response) {
    /* Handle response*/
    console.log(response);
}).catch(function (error) {
    /* Handle error */
    console.log(error);
});