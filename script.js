/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment.
*/

function Song(id, singer, name, url){
  this.id = id;
  this.singer = singer;
  this.name = name;
  this.url = url;
}

function initMunSongs() {
  var songList = new Array();
  
  let song0 = new Song(0, '陈慧娴', '千千阕歌', 'http://95.163.195.25/audio/if-you-were-a-boy.mp3');
  songList.push(song0);
  
  let song1 = new Song(1, '黎瑞恩', '一人有一个梦想', 'http://95.163.195.25/audio/if-you-were-a-boy.mp3')
  songList.push(song1);
  
  let song3 = new Song(2, '谭咏麟', '讲不出再见', 'http://95.163.195.25/audio/if-you-were-a-boy.mp3')
  songList.push(song3);
  
  let song4 = new Song(3, '关正杰', '俩忘烟水里', 'http://95.163.195.25/audio/if-you-were-a-boy.mp3')
  songList.push(song4);
  
  return songList;
}

function initSonSongs() {
  var songList = new Array();

//  let song0 = new Song(0, '儿童', '一闪一闪亮晶晶', 'http://fs.open.kugou.com/a9a121a28b149fd245065ac71b1a5c98/5ca5e242/G057/M0A/0E/00/eQ0DAFawAM-AeoQjABmRiFIBeq8524.mp3');
//  songList.push(song0);

  let song1 = new Song(1, '杨烁', '两只老虎', 'http://95.163.195.25/audio/if-you-were-a-boy.mp3')
  songList.push(song1);

  return songList;
}

function onSing() {
  var songNum = 0;
  var songList = initMunSongs();
  var singerTxt = document.getElementById('singer');
  var songTxt = document.getElementById('song');
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
  singerTxt.innerHTML = song.name;
  songTxt.innerHTML = song.singer;
  audio.play();
  
  audio.addEventListener("ended", function() {
    songNum++;
    if (songNum == songList.length) {
      songNum = 0;
    }
    song = songList[songNum];
    audio.src = song.url;
    singerTxt.innerHTML = song.name;
    songTxt.innerHTML = song.singer;
    audio.play();
    content.innerHTML = 'Try to Play An Other Song...';
  });
  
  audio.addEventListener("play", function() {
    singerTxt.innerHTML = song.name;
    songTxt.innerHTML = song.singer;
  });
}
