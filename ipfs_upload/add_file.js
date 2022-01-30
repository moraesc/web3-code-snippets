/*
 * Pin file (jpg, png, mp3 etc. . . )
 * to IPFS using Pinata API
 */

const axios = require('axios');
const FormData = require('form-data');
const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
const data = new FormData();

data.append('file', '<some_blob>' , '<file_name>');

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