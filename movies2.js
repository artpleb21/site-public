document.addEventListener('DOMContentLoaded', (event) => {
  const videoPlayer = document.getElementById('videoPlayer');
  const videoTitle = document.getElementById('videoTitle');
  const videoArtist = document.getElementById('videoArtist');

  const videos = [
    { url: 'https://arweave.net/O8uieJZRYgNmOe2ZSxP6cRYtw_kE5gGOMvqEF8JRxmE', title: 'An Irresistable Force', artist: 'Reuben Wu'},
    { url: 'https://ipfs.pixura.io/ipfs/QmdjTA2kgjxzkAomHzksrYM4q5iGXb2nGrgrihg3WQ27F2/20211213LOVETRIANGLE.mp4', title: 'Love Triangle', artist: 'Jeff Frost'},
    { url: 'https://ipfs.pixura.io/ipfs/QmcdukPSS37NwW64gxyLHsQXK56m1R79mnV7R7rBudi11K/XT1586_4000.mp4', title: 'Over One Hundred Worthwhile Dilemmas', artist: 'Reuben Wu' },
    { url: 'https://arweave.net/udNMqtAwmb2VCr7iK6ra4m3BZ_B1ClcfyPqnhWYw2oY', title: 'Hymn of Aphrodite', artist: 'Alya' },
    { url: 'https://ipfs.pixura.io/ipfs/QmcZjLaAS7Z2iXLjtHV11QuiZmZ1CGQfCNYuWzr9XuM1Cx/Brendan_Dawes_Press_Any_Key_To_Escape.mp4', title: 'Press Any Key To Escape', artist: 'Brendan Dawes' },
    { url: 'https://ipfs.pixura.io/ipfs/QmUwnmYNZySHUGmFjZHuAQgFRnjFjVHcW6q6ZQJ6TTQMkr/outGoodE.mp4', title: 'light study gradient cross', artist: 'Zach Lieberman' },
    { url: 'https://ipfs.pixura.io/ipfs/QmTMc3QRxBvCAbVchUaWojtbVD8DL68CYWWc4KntnZvMzZ/SomewhereByKaybid.mp4', title: 'Somewhere', artist: 'Kaybid' }

    // ... add as many videos as you want, each with a URL and a title
  ];

  function playRandomVideo() {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];
    videoPlayer.src = randomVideo.url;
    videoTitle.textContent = randomVideo.title;
    videoArtist.textContent = randomVideo.artist;

  }

  playRandomVideo();
});

/*     { url: 'https://ipfs.pixura.io/ipfs/Qmf6ctMD6eoyAhTwKE3yJjP3FpUhD42wFsgab1EqRKbAyu/AFTERLIFE19201080.gif', title: 'Afterlife', artist: 'Mae' },
    { url: 'https://ipfs.pixura.io/ipfs/QmaS4srPXEkBfHFpj2SyKw2YRppcrCEHQe14VkkAriAezw/TheTerminal.mp4', title: 'The Terminal', artist: 'Diberkato' },
    { url: 'https://ipfs.pixura.io/ipfs/QmXNvQjAbPZBnw9Ycn4yEEVm5MvmpfqjgUbFTEnxBVNKfR/TimeWillSoonBeGone.mp4', title: 'Time will soon be gone', artist: 'Diberkato' },
*/