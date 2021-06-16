// 'EventEmitter' mus in CAPITAL
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("terima", () => {
  console.log("berjaya");
});

customEmitter.emit("terima");
