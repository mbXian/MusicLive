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
  
  let song0 = new Song(0, '陈慧娴', '千千阕歌', 'http://95.163.195.25/audio/qian-qian-que-ge.mp3');
  songList.push(song0);
  
  let song1 = new Song(1, '黎瑞恩', '一人有一个梦想', 'http://95.163.195.25/audio/yi-ren-you-yi-ge-meng-xiang.mp3')
  songList.push(song1);
  
  let song3 = new Song(2, '谭咏麟', '讲不出再见', 'http://95.163.195.25/audio/jiang-bu-chu-zai-jian.mp3')
  songList.push(song3);
  
  let song4 = new Song(3, '关正杰', '俩忘烟水里', 'http://95.163.195.25/audio/liang-wang-yan-shui-li.mp3')
  songList.push(song4);
  
  return songList;
}

function initSonSongs() {
  var songList = new Array();

 let song0 = new Song(0, '杨烁', '两只老虎', 'http://95.163.195.25/audio/liang-zhi-lao-hu.mp3')
 songList.push(song0);

  let song1 = new Song(1, '杨烁', '小兔子乖乖', 'http://95.163.195.25/audio/xiao-tu-zi-guai-guai.mp3');
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
  
  let MunSongsString = '嫲嫲音乐';
  let SonSongs = '颖颖音乐';
  if (button.value == MunSongsString) {
    button.value = SonSongs;
    button.innerHTML = SonSongs;
    songList = initSonSongs();
  } else {
    button.value = MunSongsString;
    button.innerHTML = MunSongsString;
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
