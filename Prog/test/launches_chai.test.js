


let chai = require('chai');
let chaiHttp = require('chai-http');
const app = require('../testApp');

let should = chai.should();
chai.use(chaiHttp);

describe('Test GET /launch', () => {
    it('Its should respond with 200 success', (done) => {
        chai.request(app)
            .get('/launch')
            .end((err, res) => {
                res.should.status(200)

                done()
            })
    })

    it('Its should respond with 200 success', (done) => {
        done()
    });
});


// describe('Test POST /launch', () => {


//     it('Its should be respond with 200 Creaated', async () => {

//         const response = await request(app)
//             .post('/launch')
//             .send({
//                 name: 'Nitin Chandekar',
//                 age: 25
//             }).expect('Content-Type', /json/).to.expect(150);

//     })
//     it('Its should catch missing required properties', () => {

//     })


//     it('Its should invalid date', () => {

//     })
// });



