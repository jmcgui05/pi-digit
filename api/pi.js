// Lets go ahead and use a library for calculating PI
const PI = require("pi");

const piHandler = function respond(req, res, next) {
    try {
        console.time("piCalc");

        // Get the value of pi up to the target, and remove the decimal
        let piValue = PI(req.params.n).toString().replace(".", "");

        let indexOfTarget = parseInt(req.params.n) - 1;

        const targetDigit = piValue.charAt(indexOfTarget);
        res.send("The value of the pi digit at n is " + targetDigit);
        console.timeEnd("piCalc");
        next();
    } catch (err) {
        console.log("ERR: " + err);
        // If we were using datadog or something, we could track how many errors we are getting
        // We could also include a server.on(InternalServerError) to catch anything we have not thought of
        res.send(500, "Unable to process request at this time");
    }

}


module.exports = {
    piHandler
}