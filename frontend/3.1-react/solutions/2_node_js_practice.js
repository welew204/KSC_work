console.log('Challenge 1 --------------------------');
const lyrics = [
    "Hey now",
    "you're an all-star",
    "get your game on",
    "go play",
];
for (const lyric of lyrics) {
    console.log(lyric);
}


console.log('Challenge 2 --------------------------');
const ableToTouchThis = false;
const time = 'hammer';

if (!ableToTouchThis && time === 'hammer') {
    console.log("Can't touch this.");
    console.log("Stop! Hammer time.");
}
// OR: ableToTouchThis === false && time === 'hammer'
// although this is less idiomatic



console.log('Challenge 3 --------------------------');
const barbieGirl = {
    world: 'barbie',
    life: 'plastic',
    canBrushHair: true,
};
if (barbieGirl.world === 'barbie' &&
        barbieGirl.life === 'plastic' &&
        barbieGirl.canBrushHair) {
    console.log("Come on Barbie, let's go party!");
} else {
    console.log("Challenge 3 broken...");
}




console.log('Challenge 4 --------------------------');
/*
The following is a while loop. Modify it so that it repeats 5 times.
*/
let timesHit = 0;
while (timesHit < 5) { // <-- change this line
    console.log("Hit me baby one more time");
    timesHit++;
}


console.log('Challenge 5 --------------------------');
const os = require('os');
console.log("CPU:", os.cpus()[0].model);



console.log('Challenge 6 --------------------------');
const fs = require('fs');
function callback(err, data) {
    console.log("Baby got (call) back");
    console.log("The error", err);
    console.log("The data", data);
}
//fs.readFile("2_node_js_practice.js", "utf-8", callback);
fs.readFile("2_node_js_practice.js_nonexistent", "utf-8", callback);


console.log('Challenge 7 --------------------------');
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.isLoggedIn = false;
    }
    logIn() {
        this.isLoggedIn = true;
    }
}

const user = new User('alanis', 'ironic@dontchathink.com');
console.log("Alanis's username is:", user.username);
console.log("Alanis's email... isn't it", user.email);
console.log("Is Alanis logged in?", user.isLoggedIn);
user.logIn();
console.log("Is Alanis logged in?", user.isLoggedIn);




console.log('Bonus Challenge --------------------------');
//fs.readFile("2_node_js_practice.js", "utf-8", callback);
fs.readFile("2_node_js_practice.js", "utf-8", (err, data) => {
    console.log("Baby got (call) back");
    //console.log("The error", err);
    //console.log("The data", data);
});

