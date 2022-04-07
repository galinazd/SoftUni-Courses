function loginM(list) {
    let username = list.shift();
    let passList = username.split('');
    let passListReversed = passList.reverse();
    let password = passListReversed.join('');

    let counter = 1;

    while ((true)) {
        let enteredPass = list.shift();
        if (enteredPass === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }
        counter++;
        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        
    }


}
loginM(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
