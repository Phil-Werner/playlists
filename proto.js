var Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

var Playlist = function(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

Playlist.prototype.overallRating = function() {
  var rating = 0;

  for (var i = 0; i < this.tracks.length; i++) {
    rating += this.tracks[i].rating;
  }

  rating = rating / this.tracks.length;
  return rating;
}

Playlist.prototype.totalDuration = function() {
  var length = 0;
  for (var i = 0; i < this.tracks.length; i++) {
    length = length + this.tracks[i].length;
  }

  return length;
}

var Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

var track1 = new Track('7 Nation Army', 5, 240);
var track2 = new Track('One', 3, 300);
var track3 = new Track('The Oaf', 4, 280);
var track4 = new Track('Gel', 4, 200);

var list1 = new Playlist('Awesome List');

list1.addTrack(track1);
list1.addTrack(track2);
list1.addTrack(track3);
list1.addTrack(track4);

console.log(list1.tracks);

var library1 = new Library('Killer Library', 'Phil');

library1.addPlaylist(list1);

console.log("Overal Rating:", list1.overallRating());

console.log("Total Duration:", list1.totalDuration());
