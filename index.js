const number = require("emergencylaonumber"); // import the installed package

number()
    .then((res) => {
        // If the function successfully retrieves the data, it enters this block
        console.log(res); // Print the contest data on the console
    })
    .catch((err) => {
        console.log(err); // Error handler
    });