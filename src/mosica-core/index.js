class Gig {
  constructor(args){
    Object.assign(this, args);
  }
}

class GigService {
  constructor(httpClient, matcher) {
    this._httpClient = httpClient;
    this._baseUrl = "http://www.mosica.es/api/1";
    this._gigs = [];
    this._gigs_by_day = [];
    this._matcher = matcher;
  }

  retrieveNextGigs(){
    return new Promise((resolve, reject) => {
      this._httpClient.get(this._baseUrl + '/gigs').then((response) => {
        let gigs_by_day = response;

        gigs_by_day.forEach((day) => {
          let gigs = day.gigs.map((gig) => {
            return new Gig(gig);
          });
          this._gigs = this._gigs.concat(gigs);
        });

        this._gigs_by_day = gigs_by_day;

        resolve(gigs_by_day);
      });
    });
  }

  retrieveAGig(id){
    return new Promise((resolve, reject) => {
      let gig = this._gigs.find((gig) => { return (gig.id == id) });

      if(gig) {
        resolve(gig);
      } else {
        throw 'Gig not found';
      }
    });
  }

  searchGigsGroupedByDay(term){
    return new Promise((resolve, reject) => {
      const daysWithGigs = []
      this._gigs_by_day.forEach((day) => {
        const gigs = day.gigs
          .filter((gig) => {
            return this._gigIsMatching(gig, term)
          }).map((gig) => {
            return new Gig(gig)
          });

        if (gigs.length > 0){
          daysWithGigs.push({day: day.day, gigs: gigs})
        }
      });
      resolve(daysWithGigs);
    });
  }

  searchGigs(term){
    return new Promise((resolve, reject) => {
      let matches = []
      this._gigs.forEach((gig) => {
        if(this._gigIsMatching(gig, term)){
          matches.push(new Gig(gig));
        }
      });
      resolve(matches);
    });
  }

  _gigIsMatching(gig, term) {
    return this._matcher.hasTheTerm(gig.title, term) || this._matcher.hasTheTerm(gig.place, term);
  }
}

class HttpClient {
  get(url) {
    return new Promise((resolve, reject) => {
      const requests = require('superagent');
      requests.get(url).end((err, response) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(response.body['response']);
        }
      });
    });
  }
}

class Matcher {
  constructor(){
    this.FROM = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛ";
    this.TO   = "AAAAAEEEEIIIIOOOOUUUU";
  }

  hasTheTerm(text, term) {
    if(text){
      text = this.normalize(text.toUpperCase());
      term = this.normalize(term.toUpperCase());
      return (text.indexOf(term)>-1)
    }
  }

  normalize(a_string){
    this.FROM.split("").forEach((change_from, index) => {
      const change_to = this.TO[index];
      a_string = a_string.replace(change_from, change_to)
    });
    return a_string;
  }
}

module.exports = {
  HttpClient: HttpClient,
  Matcher: Matcher,
  GigService: GigService
}
