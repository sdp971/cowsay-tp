const infosWilder = require("./information");
var cowsay = require("cowsay");

// console.log(infosWilder);

console.log(cowsay.say({
    text: `I'm ${infosWilder.name} from ${infosWilder.campus}`,
    e: "o0",
    T:"U "
}));