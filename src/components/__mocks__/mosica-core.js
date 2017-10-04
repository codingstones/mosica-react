import { fakeGigsByDay } from './fake-gigs-by-day'
const mosicaCore = jest.genMockFromModule('mosica-core')

class GigService {
  retrieveNextGigs() {
    return Promise.resolve(fakeGigsByDay)
  }
}

mosicaCore.GigService = GigService
module.exports = mosicaCore
