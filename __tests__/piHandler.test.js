const colors = require("colors");
const request = require('supertest');
const server = require("../index");

describe("piHandler", () => {

    afterAll(() => {
        server.close();
    });

    console.log("Running PI test suite.....".yellow);
    test("n = 3", async() => {
        console.time("test 1 value 3");
        const result = await request(server).get('/pi/3');
        console.timeEnd("test 1 value 3");
        expect(result.body).toBe("The value of the pi digit at n is 4");

    });

    test("n = 3", async() => {
        console.time("test 2 value 3");
        const result = await request(server).get('/pi/3');
        console.timeEnd("test 2 value 3");
        expect(result.body).toBe("The value of the pi digit at n is 4");

    });

    test("n = 25", async() => {
        console.time("test 1 value 25");
        const result = await request(server).get('/pi/25');
        console.timeEnd("test 1 value 25");
        expect(result.body).toBe("The value of the pi digit at n is 3");

    });

    test("n = 25", async() => {
        console.time("test 2 value 25");
        const result = await request(server).get('/pi/25');
        console.timeEnd("test 2 value 25");
        expect(result.body).toBe("The value of the pi digit at n is 3");

    });

    test("n = 48", async() => {
        console.time("test 1 value 48");
        const result = await request(server).get('/pi/48');
        console.timeEnd("test 1 value 48");
        expect(result.body).toBe("The value of the pi digit at n is 7");

    });

    test("n = 48", async() => {
        console.time("test 2 value 48");
        const result = await request(server).get('/pi/48');
        console.timeEnd("test 2 value 48");
        expect(result.body).toBe("The value of the pi digit at n is 7");

    });

    test("n = 1", async() => {
        console.time("test 1 value 1");
        const result = await request(server).get('/pi/1');
        console.timeEnd("test 1 value 1");
        expect(result.body).toBe("The value of the pi digit at n is 3");

    });

    test("n = 1", async() => {
        console.time("test 2 value 1");
        const result = await request(server).get('/pi/1');
        console.timeEnd("test 2 value 1");
        expect(result.body).toBe("The value of the pi digit at n is 3");

    });

});