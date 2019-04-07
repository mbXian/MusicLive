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
  
  let song0 = new Song(0, '陈慧娴', '千千阕歌', 'http://fs.open.kugou.com/a861606957a7c29f8c418456bfd1e33a/5caa1bc7/G126/M0A/12/11/vg0DAFpJ_WKAeoQNACcP2_ElSwo594.mp3');
  songList.push(song0);
  
  let song1 = new Song(1, '黎瑞恩', '一人有一个梦想', 'http://fs.open.kugou.com/21a852106f80bb943eed0ae31b5f3d13/5caa1e07/G049/M09/1C/0D/cQ0DAFYvSi2Aeov8ACW5rW3QZAc691.mp3')
  songList.push(song1);
  
  let song3 = new Song(2, '谭咏麟', '讲不出再见', 'http://fs.open.kugou.com/d8bc48700979a93e32f8bfeec6d0d19f/5caa1e2c/G101/M00/05/10/RZQEAFkB4_6AZs9kAE_Zu2DQKIg889.mp3')
  songList.push(song3);
  
  let song4 = new Song(3, '关正杰', '俩忘烟水里', 'http://fs.open.kugou.com/f91ca9164b4505aeeadb529e147ea1ea/5caa1bdc/G032/M03/18/11/AJQEAFXkx-WAJYsPAC3e5D88CAg064.mp3')
  songList.push(song4);
  
  return songList;
}

function initSonSongs() {
  var songList = new Array();

  let song0 = new Song(0, '杨烁', '两只老虎', 'http://fs.open.kugou.com/5a999c9821e4de95e17966c0b2a0a798/5caa1ecd/G081/M01/18/11/MZQEAFhYrl2ARtxhABaVpWSFcuc063.mp3');
  songList.push(song0);

  let song1 = new Song(1, '儿童', '一闪一闪亮晶晶', 'http://fs.open.kugou.com/3a4524ffc64a1281162bf331b1956ac6/5caa1f0c/G135/M07/1D/14/Z5QEAFtoOR-AKfwqABUEOU2w8Ak597.mp3');
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
