//Codecademy exercise to practice classes, inheritance, getters, and setters.

class Media {
    constructor(title) {
      this._ratings = [];
      this._title = title;
      this._isCheckedOut = false;
    }
    get ratings() {
      return this._ratings;
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    set isCheckedOut(newCheckedOut) {
      this._isCheckedOut = newCheckedOut;
    }
    toggleCheckOutStatus() {
      return this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
      const sumRatings = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue);
      return ((sumRatings / this._ratings.length).toFixed(3))
    }
    addRating(newRating) {
      this._ratings.push(newRating);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title)
      this._author = author;
      this._pages = pages;
      }
      get author() {
        return this._author;
      }
      get pages() {
        return this._pages;
      }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(band, title, runTime, songs) {
      super(title);
      this._band = band;
      this._runTime = runTime;
      this._songs = songs;
    }
    get band() {
      return this._band;
    }
    get runTime() {
      return this._runTime;
    }
    get songs() {
      return this._songs;
    }
    set songs(newSong) {
      return this._songs.push(newSong);
    }
    shuffleSongs() {
      //Fisher-Yates Shuffle
      for (let i = this._songs.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this._songs[i], this._songs[j]] = [this._songs[j], this._songs[i]];
    }
      return (this._songs)
    }   
     
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);

  const blueAlbum = new CD('Weezer', 'The Blue Album', 120, ['Song 1', 'Song 2', 'Song 3']);
  