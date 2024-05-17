

const request = require('supertest');
const app = require('./testApp');


describe('Test GET /launch', () => {
    test('Its should respond with 200 success', async () => {
        const response = await request(app).get('/launch')
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.statusCode).toBe(200);
    })
});

describe('Test POST /launch', () => {


    test('Its should be respond with 201 Creaated', async () => {

        const response = await request(app)
            .post('/launch')
            .send({
                name: 'Nitin Chandekar',
                age: 25
            }).expect('Content-Type', /json/).expect(200);

    })
    test('Its should catch missing required properties', () => {

    })


    test('Its should invalid date', () => {

    })
});



