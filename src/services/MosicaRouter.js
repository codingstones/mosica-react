export const MosicaRouter = (history) => {
  return { navigateToGig }

  function navigateToGig(gigId) {
    history.push("/gig/" + gigId)
  }
}
