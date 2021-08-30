module.exports = async function getContests() {
    const axios = require("axios"); // Importing the Axios module to make API requests
    var result;

    await axios // Making a GET request using axios and requesting information from the API
        .get(
            "https://raw.githubusercontent.com/ZOYBAD14xx/FreeAPI/main/EmergencyNumberLaos.json"
        )
        .then((response) => { // If the GET request is successful, this block is executed
            return response; // The response of the API call is passed on to the next block
        })
        .then((contests) => { // In this block, we store the response data into a variable 'result'
            result = contests.data;
        })
        .catch((err) => {
            console.log(err); // Error handler
        });
    return result; // The contest data is returned
};