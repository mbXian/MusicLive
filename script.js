/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment.
*/

function greetMe(name) {
  var today = new Date().toDateString();
  console.log("Hello " + name + ", today is " + today);
}

function Song(id, singer, name, url){
  this.id = id;
  this.singer = singer;
  this.name = name;
  this.url = url;
}

function initSongs() {
  var songList = new Array();
  
  let song0 = new Song(0, 'Ben', 'Test', 'http://fs.open.kugou.com/7b9a0859dd3839b3870dd7bfdfed5cc3/5ca5baba/G001/M03/19/15/QQ0DAFS4rQ-AeeIAAD2zJS8ZtPk468.mp3');
  songList.push(song0);
  
  let song1 = new Song(1, 'EKin', 'For U & Me', 'http://fs.open.kugou.com/8d90693d64b0d5080e148e3b0a358495/5ca5c470/G045/M06/0F/0D/bQ0DAFYt7EqALfrOABEj51cteTI814.mp3')
  songList.push(song1);
  
  console.log(songList.length);
  
  for (var i = 0; i < songList.length; i++) {
      let songTmp = songList[i];
      console.log('name = ' + songTmp.name);
  }
  
  return song1.url;
}

function getSong() {
  var url = initSongs();
  document.getElementById('content').innerText= url;
}
