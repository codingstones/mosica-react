import { GIG_DETAIL_PATH } from '../components/Main'

export const MosicaRouter = (history) => {
  return { navigateToGig }

  function navigateToGig(gigId) {
    history.push(GIG_DETAIL_PATH + gigId)
  }
}
