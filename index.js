"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let name = prompt ("Please enter your name: ")
console.log(`Hello, how are you doing ${name}?`);