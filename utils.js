// This file should house some help functions that can be used throughout the app
// Lets go ahead and use a library for calculating PI
const PI = require("pi");

// Simple call to PI library to get PI up to digit n
function getPiToDigitN(n) {
    // remove the decimal from our result
    return PI(n).toString().replace(".", "");
}

// Create a helper cache function to optimize response times
function memoize(originalFunc) {
    const cache = {};
    return (...args) => {
        // Check cahce for previously calculated result
        if (cache[args]) {
            return cache[args];
        }
        // Apply the args array [n] to the originalFunc and cache the result for next call
        const result = originalFunc.apply(this, args);
        cache[args] = result;
        return result;

    }
}

getPiToDigitN = memoize(getPiToDigitN);

module.exports = {
    getPiToDigitN
}