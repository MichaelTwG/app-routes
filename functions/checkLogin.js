//check login is a function that receives a dictionary
//and returns a dictionary
//if the login is successful it sets the "status" key to true 
//otherwise it sets the "status" key to false

function ckeckLogin(data) {
    const result = {};

    const user = []; //postponed - this would be data obtained from the data base.

    // it is important to normalize the data stored in user, in this way we will avoid future errors.

    // it would be appropiate to performa a function to get a user based on a username or email address
    if (JSON.stringify(user) === JSON.stringify(data)) {
        result.status = true;
    } else {
        result.status = false;
    }
    return result;
}

module.exports = ckeckLogin;