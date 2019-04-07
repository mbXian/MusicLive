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

function initMunSongs() {
  var songList = new Array();
  
  let song0 = new Song(0, '陈慧娴', '千千阕歌', 'http://fs.open.kugou.com/ef58542e3f62fe98ebf99df55cb0ccd3/5ca5e2b2/G126/M0A/12/11/vg0DAFpJ_WKAeoQNACcP2_ElSwo594.mp3');
  songList.push(song0);
  
  let song1 = new Song(1, '黎瑞恩', '一人有一个梦想', 'http://fs.open.kugou.com/0d3144bbbed9d3196f04fdf4fa32a4ff/5ca5e2e6/G105/M02/09/05/CYcBAFvc3kOAPUUVADjDCMHBtaw694.mp3')
  songList.push(song1);
  
  let song3 = new Song(2, '谭咏麟', '讲不出再见', 'http://fs.open.kugou.com/dc7bc5a28be70384644157cd1d534dd8/5ca5e9f9/G142/M06/04/08/bpQEAFuKhOyAJS0sAEi4t--F9T0544.mp3')
  songList.push(song3);
  
  let song4 = new Song(3, '关正杰', '俩忘烟水里', 'http://fs.open.kugou.com/ac8bf8890f1491594e7d92308a3da2bb/5ca5ea2e/G065/M01/17/19/gQ0DAFeaawSAKXWAAC-bCmXhS5Y344.mp3')
  songList.push(song4);
  
  return songList;
}

function initSonSongs() {
  var songList = new Array();

  let song0 = new Song(0, '儿童', '一闪一闪亮晶晶', 'http://fs.open.kugou.com/a9a121a28b149fd245065ac71b1a5c98/5ca5e242/G057/M0A/0E/00/eQ0DAFawAM-AeoQjABmRiFIBeq8524.mp3');
  songList.push(song0);

  let song1 = new Song(1, '杨烁', '两只老虎', 'http://fs.open.kugou.com/60c8e9fc557a88166d44f686b945b011/5ca5e271/G124/M02/09/07/vA0DAFo7eXCAPSVPABGk6JgmntY967.mp3')
  songList.push(song1);

  return songList;
}

function onSing() {
  var songNum = 0;
  var songList = initMunSongs();
  var content = document.getElementById('content');
  var audio = document.getElementById('audio');
  var button = document.getElementById('button');
  
  if (button.value == 'MunSongs') {
    button.value = 'SonSongs';
    button.innerHTML = 'SonSongs';
    songList = initSonSongs();
  } else if (button.value == 'SonSongs') {
    button.value = 'MunSongs';
    button.innerHTML = 'MunSongs';
    songList = initMunSongs();
  }
  var song = songList[songNum];
  audio.src = song.url;
  content.innerHTML = 'Num = ' + songNum + ', Name = ' + song.name + ', Singer = ' + song.singer;
  audio.play();
  
  audio.addEventListener("ended", function() {
    songNum++;
    if (songNum == songList.length) {
      songNum = 0;
    }
    song = songList[songNum];
    audio.src = song.url;
    content.innerHTML = 'Num = ' + songNum + ', Name = ' + song.name + ', Singer = ' + song.singer;
    audio.play();
    content.innerHTML = 'Try to Play An Other Song...';
  });
  
  audio.addEventListener("play", function() {
    content.innerHTML = 'Playing: Num = ' + songNum + ', Name = ' + song.name + ', Singer = ' + song.singer;
  });
}
