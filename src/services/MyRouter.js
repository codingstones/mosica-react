export const MyRouter = (history) => {
  return { navigateToGig }

  function navigateToGig(gigId) {
    history.push("/gig/" + gigId)
  }
}
