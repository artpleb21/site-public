document.addEventListener('DOMContentLoaded', function() {
    const mediaList = [
        { url: 'https://arweave.net/O8uieJZRYgNmOe2ZSxP6cRYtw_kE5gGOMvqEF8JRxmE', title: 'An Irresistable Force', artist: 'Reuben Wu', type: 'video'},
    { url: 'https://ipfs.pixura.io/ipfs/QmdjTA2kgjxzkAomHzksrYM4q5iGXb2nGrgrihg3WQ27F2/20211213LOVETRIANGLE.mp4', title: 'Love Triangle', artist: 'Jeff Frost', type: 'video'},
    { url: 'https://ipfs.pixura.io/ipfs/QmcdukPSS37NwW64gxyLHsQXK56m1R79mnV7R7rBudi11K/XT1586_4000.mp4', title: 'Over One Hundred Worthwhile Dilemmas', artist: 'Reuben Wu', type: 'video'},
    { url: 'https://arweave.net/udNMqtAwmb2VCr7iK6ra4m3BZ_B1ClcfyPqnhWYw2oY', title: 'Hymn of Aphrodite', artist: 'Alya', type: 'video'},
    { url: 'https://ipfs.pixura.io/ipfs/QmcZjLaAS7Z2iXLjtHV11QuiZmZ1CGQfCNYuWzr9XuM1Cx/Brendan_Dawes_Press_Any_Key_To_Escape.mp4', title: 'Press Any Key To Escape', artist: 'Brendan Dawes', type: 'video'},
    { url: 'https://ipfs.pixura.io/ipfs/QmUwnmYNZySHUGmFjZHuAQgFRnjFjVHcW6q6ZQJ6TTQMkr/outGoodE.mp4', title: 'light study gradient cross', artist: 'Zach Lieberman', type: 'video'},
    { url: 'https://ipfs.pixura.io/ipfs/QmTMc3QRxBvCAbVchUaWojtbVD8DL68CYWWc4KntnZvMzZ/SomewhereByKaybid.mp4', title: 'Somewhere', artist: 'Kaybid', type: 'video'},
    { url: 'https://ipfs.pixura.io/ipfs/Qmf6ctMD6eoyAhTwKE3yJjP3FpUhD42wFsgab1EqRKbAyu/AFTERLIFE19201080.gif', title: 'Afterlife', artist: 'Mae', type: "image" },
    { url: 'https://ipfs.pixura.io/ipfs/QmaS4srPXEkBfHFpj2SyKw2YRppcrCEHQe14VkkAriAezw/TheTerminal.mp4', title: 'The Terminal', artist: 'Diberkato', type: "video" },
    { url: 'https://ipfs.pixura.io/ipfs/QmXNvQjAbPZBnw9Ycn4yEEVm5MvmpfqjgUbFTEnxBVNKfR/TimeWillSoonBeGone.mp4', title: 'Time will soon be gone', artist: 'Diberkato', type: "video" },

        // ... add more URLs and types as needed
    ];
    const mediaContainer = document.getElementById('mediaContainer');
    const titleLabel = document.getElementById('titleLabel');
    const artistLabel = document.getElementById('artistLabel');

    const randomIndex = Math.floor(Math.random() * mediaList.length);
    const selectedItem = mediaList[randomIndex];

    if (selectedItem.type === 'video') {
        const videoElement = document.createElement('video');
        videoElement.src = selectedItem.url;
        videoElement.controls = true;
        mediaContainer.appendChild(videoElement);
    } else if (selectedItem.type === 'image') {
        const imgElement = document.createElement('img');
        imgElement.src = selectedItem.url;
        mediaContainer.appendChild(imgElement);
    }

    titleLabel.textContent = selectedItem.title;
    artistLabel.textContent = selectedItem.artist;
});

function toggleTheme() {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
}

// Setting the initial theme
document.body.classList.add('dark-mode');
