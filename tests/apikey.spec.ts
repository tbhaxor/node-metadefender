import {expect} from 'chai';
import Metadefender from '../src';

describe('API Keys', function () {
  let defender: Metadefender;

  before((done) => {
    defender = new Metadefender(process.env.API_KEY as string);
    done();
  });

  it('should reject http request if no key is passed', (done) => {
    // @ts-ignore
    defender = new Metadefender();
    defender.apiKey.info().catch((r) => {
      expect(r).not.to.be.null;
      expect(r).to.be.instanceOf(Error);
      expect(r.message).to.equal('API key is invalid');
      done();
      defender = new Metadefender(process.env.API_KEY as string);
    });
  });

  it('should send the valid object on info request', (done) => {
    defender.apiKey.info().then((r) => {
      expect(r).to.be.instanceOf(Object);
      done();
    });
  }).timeout(60 * 1000);

  it('should send the valid object on limits request', (done) => {
    defender.apiKey.limits().then((r) => {
      expect(r).to.be.instanceOf(Object);
      done();
    });
  }).timeout(60 * 1000);
});
