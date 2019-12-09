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
  // var munSongIp = 'http://47.105.137.41/demo/mun/';
  var munSongIp = '/mun/';

  let song0 = new Song(0, '陈慧娴', '千千阕歌', munSongIp + 'qian-qian-que-ge.mp3');

  let song1 = new Song(1, '黎瑞恩', '一人有一个梦想', munSongIp + 'yi-ren-you-yi-ge-meng-xiang.mp3');
  
  let song2 = new Song(2, '叶振棠', '笑傲江湖', munSongIp + 'xiao-ao-jiang-hu.mp3');

  let song3 = new Song(3, '谭咏麟', '讲不出再见', munSongIp + 'jiang-bu-chu-zai-jian.mp3');

  let song4 = new Song(4, '关正杰', '天蚕变', munSongIp + 'tian-can-bian.mp3');
  
  let song5 = new Song(5, '谭咏麟', '一生中最爱', munSongIp + 'yi-sheng-zhong-zui-ai.mp3');
  
  let song6 = new Song(6, '谭咏麟', '爱多一次，痛多一次', munSongIp + 'ai-duo-yi-ci-tong-duo-yi-ci.mp3');
  
  let song7 = new Song(7, '谭咏麟', '红日', munSongIp + 'hong-ri.mp3');
  
  let song8 = new Song(8, '谭咏麟、李克勤', '无言感激', munSongIp + 'wu-yan-gan-ji.mp3');
  
  let song9 = new Song(9, '邓丽君', '月亮代表我的心', munSongIp + 'yue-liang-dai-biao-wo-de-xin.mp3');
  
  let song10 = new Song(10, '叶振棠', '胜利双手创', munSongIp + 'sheng-li-shuang-shou-chuang.mp3');
  
  let song11 = new Song(11, '邓丽君', '漫步人生路', munSongIp + 'man-bu-ren-sheng-lu.mp3');
  
  let song12 = new Song(12, '卓依婷', '有多少爱可以重来', munSongIp + 'you-duo-shao-ai-ke-yi-chong-lai.mp3');
  
  let song13 = new Song(13, '卓依婷', '童年', munSongIp + 'tong-nian.mp3');
  
  let song14 = new Song(14, '邓丽君', '旧梦不须记', munSongIp + 'jiu-meng-bu-xu-ji.mp3');

  songList.push(song14);
  songList.push(song13);
  songList.push(song11);
  songList.push(song12);
  songList.push(song10);
  songList.push(song7);
  songList.push(song2);
  songList.push(song9);
  songList.push(song4);
  songList.push(song5);
  songList.push(song6);
  songList.push(song1);
  songList.push(song8);
  songList.push(song3);
  songList.push(song0);
  
  return songList;
}

function initSonSongs() {
  var songList = new Array();
  // var sonSongIp = 'http://47.105.137.41/demo/son/';
  var sonSongIp = '/son/';

  let song0 = new Song(0, '杨烁', '两只老虎', sonSongIp + 'liang-zhi-lao-hu.mp3');

  let song1 = new Song(1, '杨烁', '小兔子乖乖', sonSongIp + 'xiao-tu-zi-guai-guai.mp3');
  
  let song2 = new Song(2, '兔小贝', '大侦探', sonSongIp + 'da-zhen-tan.mp3');
  
  let song3 = new Song(3, '李昕融', '你笑起来更好看', sonSongIp + 'ni-xiao-qi-lai-geng-hao-kan.mp3');
  
  let song4 = new Song(4, '林子祥', '男儿当自强', sonSongIp + 'nan-er-dang-zi-qiang.mp3');
  
  let song5 = new Song(5, '伊芙莲', '氹氹转 菊花园', sonSongIp + 'ju-hua-yuan.mp3');

  let song6 = new Song(6, '儿童歌曲', '一闪一闪亮晶晶', sonSongIp + 'yi-shan-yi-shan-liang-jing-jing.mp3');
  
  songList.push(song6);
  songList.push(song5);
  songList.push(song4);
  songList.push(song0);
  songList.push(song1);
  songList.push(song2);
  songList.push(song3);

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
    content.innerHTML = 'Try to Play Next Song...';
  });

  audio.addEventListener("play", function() {
    singerTxt.innerHTML = song.name;
    songTxt.innerHTML = song.singer;
  });
}
