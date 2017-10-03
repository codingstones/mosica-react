import { sampleGigs } from './gigs-sample'
const mosicaCore = jest.genMockFromModule('mosica-core')

class GigService {
  retrieveNextGigs() {
    return Promise.resolve(sampleGigs)
  }
}

mosicaCore.GigService = GigService
module.exports = mosicaCore
