const navigateToGigMock = jest.fn()
const RouterMock = { navigateToGig: navigateToGigMock}

const MyRouter = (history)=> {
  return RouterMock;
}
module.exports = {
  MyRouter: MyRouter,
}

