const chai_ = require('chai');
const chaiHttp = require('chai-http');
const server= require('../../src/main');

chai_.use(chaiHttp);

describe('server', () => {
    it('responds with HTTP 200', (done) => {
        return chai_.request(server)
            .get('/xyz')
            .end( (err, res) => {
                chai_.expect(err).to.be.null;
                chai_.expect(res).to.have.status(200);
                done();
            });
        });
    });