const os = require("os");
const info = os.userInfo();

//info about current user
console.log(info);

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

console.log(os.release());
