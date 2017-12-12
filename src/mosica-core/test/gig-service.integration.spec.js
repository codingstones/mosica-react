var chai = require('chai');
var expect = chai.expect;

var mosica = require('../index.js');

describe('Gig service', () => {
  let gigService;

  beforeEach(()=> {
    gigService = new mosica.GigService(new mosica.HttpClient());
  });

  it('returns the next gigs', () => {
    return gigService.retrieveNextGigs().then((gigs) => {
      expect(gigs).to.have.length.above(0);

      expect(gigs[0].day).to.exist;
      expect(gigs[0].gigs).to.have.length.above(0);
    });
  }).timeout(5000);
});