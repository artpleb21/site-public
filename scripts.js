document.addEventListener('DOMContentLoaded', function() {
    const mediaListDesktop = [
    { url: 'https://arweave.net/O8uieJZRYgNmOe2ZSxP6cRYtw_kE5gGOMvqEF8JRxmE', title: 'An Irresistable Force', artist: 'Reuben Wu', type: 'video'},
    { url: 'https://ipfs.pixura.io/ipfs/QmdjTA2kgjxzkAomHzksrYM4q5iGXb2nGrgrihg3WQ27F2/20211213LOVETRIANGLE.mp4', title: 'Love Triangle', artist: 'Jeff Frost', type: 'video'},
    { url: 'https://ipfs.pixura.io/ipfs/QmcdukPSS37NwW64gxyLHsQXK56m1R79mnV7R7rBudi11K/XT1586_4000.mp4', title: 'Over One Hundred Worthwhile Dilemmas', artist: 'Reuben Wu', type: 'video'},
    { url: 'https://ipfs.pixura.io/ipfs/QmR42g4X4RWF3wLhLu4bX3i2j6DLe7rtXrdKstvi8RxLoh/2000x2000__Tokushima.gif', title: '流星: Tokushima', artist: 'Gutty Kreum', type: 'image' },
    { url: 'https://ipfs.pixura.io/ipfs/QmcZjLaAS7Z2iXLjtHV11QuiZmZ1CGQfCNYuWzr9XuM1Cx/Brendan_Dawes_Press_Any_Key_To_Escape.mp4', title: 'Press Any Key To Escape', artist: 'Brendan Dawes', type: 'video' },
    { url: 'https://ipfs.pixura.io/ipfs/QmUwnmYNZySHUGmFjZHuAQgFRnjFjVHcW6q6ZQJ6TTQMkr/outGoodE.mp4', title: 'light study gradient cross', artist: 'Zach Lieberman', type: 'video' },
    { url: 'https://ipfs.pixura.io/ipfs/QmaS4srPXEkBfHFpj2SyKw2YRppcrCEHQe14VkkAriAezw/TheTerminal.mp4', title: 'The Terminal', artist: 'Diberkato', type: 'video' },
    { url: 'https://ipfs.pixura.io/ipfs/QmXNvQjAbPZBnw9Ycn4yEEVm5MvmpfqjgUbFTEnxBVNKfR/TimeWillSoonBeGone.mp4', title: 'Time will soon be gone', artist: 'Diberkato', type: 'video' },
    { url: 'https://ipfs.pixura.io/ipfs/Qmf6ctMD6eoyAhTwKE3yJjP3FpUhD42wFsgab1EqRKbAyu/AFTERLIFE19201080.gif', title: 'Afterlife', artist: 'Mae', type: 'image' },
    { url: 'https://ipfs.pixura.io/ipfs/QmTMc3QRxBvCAbVchUaWojtbVD8DL68CYWWc4KntnZvMzZ/SomewhereByKaybid.mp4', title: 'Somewhere', artist: 'Kaybid', type: 'video' },
    { url: 'https://arweave.net/8uHI9gf0ufAl1J7L8O0E5l2_juy981YA59-6QUsOgyM', title: 'BLAME', artist: 'Cowboy Killer', type: 'image' },
    { url: 'https://ipfs.pixura.io/ipfs/QmXkCsLQb6tK5VVRrdC4Mi1rcoNhRzywHMuaHbFXgppskH/DSC_2988-Edit-Edit-Edit-Edit.jpg', title: 'Skeleton Key', artist: 'Cowboy Killer', type: 'image' },
    { url: 'https://ipfs.pixura.io/ipfs/QmZzNYMRYA2KgGhYGh5Yfshw4JroHABcwFpZAqTYQoEszt/BellowingTree.png', title: 'The Bellowing Tree', artist: 'Nilus Dantes', type: 'image' },
    { url: 'https://arweave.net/XDBJsWAZDqSkZXadsdKLSAsBLC5AII0HL6CWwBHQxzA', title: 'Stigmatist', artist: 'Apocalypse Art', type: 'image' },
    { url: 'https://ipfs.pixura.io/ipfs/QmdmvAWHNHiJ5kA3wwYYuqcySw43Vtku83Yw1T5BSAueLc/InnerFire.jpg', title: 'Inner Fire', artist: 'Taysa Jorge', type: 'image' },
    { url: 'https://ipfs.pixura.io/ipfs/QmfGZTytoBRR9C8KBsDMdHLUN8tCA3cwWZ1GdNQQgbgbFT/herewegomotherontheshiplessocean.jpg', title: 'Here We Go Mother On The Shipless Ocean', artist: 'Mia Novakova', type: 'image' },
    { url: 'https://ipfs.pixura.io/ipfs/QmPfDF585UBYyAHNJnvHVKNkkimfwfKk92sqUyq7mx3BSy/theunknown.jpg', title: 'the unknown', artist: 'eniosta', type: 'image' },
    { url: 'https://ipfs.pixura.io/ipfs/QmcphmXxXLFMWNKmmXfcJwkv7bkTFToeGvwe4qWKpe2GeU/elpis.jpg', title: 'elpis', artist: 'eniosta', type: 'image' },
    { url: 'https://ipfs.pixura.io/ipfs/QmXdJ4dsXZAL24JpXd4aSMkYyBWukSDvRMFv6eq8Vd2XcV/GOLDENRATIO_FULL-ARTWORK.jpg', title: 'Golden Ratio', artist: 'Jenni Pasanen', type: 'image' },
    { url: 'https://ipfs.pixura.io/ipfs/QmNuAuViN4fRAATvrJcovqxPHTmjXpR5EpkoopPAhTPNNc/DontLeaveMe.jpg', title: 'Lost In The City Lights', artist: 'Louis Dazy', type: 'image' },
    { url: 'https://ipfs.pixura.io/ipfs/QmRreVnDi9LBUDZcvDinwaX82ipPXFVmJgtf38pryxfqRv/afterthepaletheworldagain.jpg', title: 'After The Pale, The World Again', artist: 'Mia Novakova', type: 'image' },
    { url: 'https://ipfs.pixura.io/ipfs/QmQTEfhNA8Y3UGsCB81zHuxwEnJ41ZYT1YWtNvnmvyXjwd/YDBMF1a.jpg', title: 'Honey Hibiscus', artist: 'Erin McGean', type: 'image' },
    { url: 'https://ipfs.pixura.io/ipfs/QmVJYw27vCJM3WM8YZKRZwUpHLp2BnLnUMtDD2G5P74ch1/sample.png', title: 'On a Clear Day You Can See Forever', artist: 'Almond', type: 'image' },
    ];

    const mediaListMobile = [
        { url: 'https://arweave.net/udNMqtAwmb2VCr7iK6ra4m3BZ_B1ClcfyPqnhWYw2oY', title: 'Hymn of Aphrodite', artist: 'Alya', type: 'video' },
        { url: 'https://ipfs.pixura.io/ipfs/QmU9yNjKWvzM8KcByFUDM7UE65k4W738f4ivX8ztRL6KYN/yellow.jpg', title: 'Sulfur Mining', artist: 'Grant Yun', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/QmbKG8QRX2qa78gVyMXbHvEMKGw83jxoYSTD7aydxeeHdk/Building.PNG', title: 'Digging A Horizontal Building', artist: 'Tim Maxwell', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/QmWZ34RWPdUH8B8rNfHrhiFnsmXYtdZZmFTvgqbq8tmf5i/_MG_22772last.jpg', title: 'Nothing Lasts Forever', artist: 'Karl Roberts', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/QmaL4osmgKqX9tZQVr6h35iYPwT2uCmTRL7xjSGJtNc1YQ/5.png', title: 'Sinueux (v)', artist: 'William Mapan', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/QmaXKY5w9meNxjtrAZiy9DQv7yPFCd4eeTNYLJJCEJgmXd/failedcolumnist.jpg', title: 'Failed Columnist', artist: 'Ben Zank', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/QmVNrRZAADNAxGzSYTT3dFmvN2GF93Mc4ZQoucPiBGTA3Y/BrookeDiDonato.TheLandscapeCalledandSaidShesLonely.jpg', title: 'The Landscape Called and Said Shes Lonely', artist: 'Brooke', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/QmTdGdq1584jAZgV3oCJWQmAYV8BC7wwfbdsp1kUgPWLT5/Untitled-2.jpg', title: 'Ghost of Kyiv', artist: 'tjo', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/QmRcNvCFZmTKxuTo87Ypz5Z7wLk8WJecRuGwXchuY1Dvgh/TheMoors300.JPG', title: 'The Moors', artist: 'postwook', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/Qmb6oSGQ8XHNKcJF2ASuDx4zZUZu6eQh6u3UgfhxEckacE/japanstreetsgrain.jpg', title: 'feelings', artist: 'Grant Yun', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/QmeQZo2QDFZtqQjgjzm8sYW3P2VWEQM3GYhTuimiauAJZp/InSignificance.jpg', title: '(In)Significance', artist: 'Ben Strauss', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/QmYrp2dgvsty8d3Rz7u53ZreE9nnJAHRbfPGo96viZw8gz/EMPTYROADS.jpg', title: 'Empty Roads', artist: 'Grant Yun', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/QmR42g4X4RWF3wLhLu4bX3i2j6DLe7rtXrdKstvi8RxLoh/2000x2000__Tokushima.gif', title: '流星: Tokushima', artist: 'Gutty Kreum', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/QmcZjLaAS7Z2iXLjtHV11QuiZmZ1CGQfCNYuWzr9XuM1Cx/Brendan_Dawes_Press_Any_Key_To_Escape.mp4', title: 'Press Any Key To Escape', artist: 'Brendan Dawes', type: 'video' },
        { url: 'https://ipfs.pixura.io/ipfs/QmUwnmYNZySHUGmFjZHuAQgFRnjFjVHcW6q6ZQJ6TTQMkr/outGoodE.mp4', title: 'light study gradient cross', artist: 'Zach Lieberman', type: 'video' },
        { url: 'https://ipfs.pixura.io/ipfs/QmaS4srPXEkBfHFpj2SyKw2YRppcrCEHQe14VkkAriAezw/TheTerminal.mp4', title: 'The Terminal', artist: 'Diberkato', type: 'video' },
        { url: 'https://ipfs.pixura.io/ipfs/QmXNvQjAbPZBnw9Ycn4yEEVm5MvmpfqjgUbFTEnxBVNKfR/TimeWillSoonBeGone.mp4', title: 'Time will soon be gone', artist: 'Diberkato', type: 'video' },
        { url: 'https://ipfs.pixura.io/ipfs/QmfGZTytoBRR9C8KBsDMdHLUN8tCA3cwWZ1GdNQQgbgbFT/herewegomotherontheshiplessocean.jpg', title: 'Here We Go Mother On The Shipless Ocean', artist: 'Mia Novakova', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/QmRreVnDi9LBUDZcvDinwaX82ipPXFVmJgtf38pryxfqRv/afterthepaletheworldagain.jpg', title: 'After The Pale, The World Again', artist: 'Mia Novakova', type: 'image' },
        { url: 'https://ipfs.pixura.io/ipfs/QmUvVMpibm6JXX8YsjC9T37uhsagkJgQ92TuA6arhP6Rek/Desert_solitaire_H264b.mp4', title: 'Aeroglyph (III)', artist: 'Reuben Wu', type: 'video' },
        // ... your mobile media list
    ];
 
    // Check if the screen width is less than or equal to 768px, you might adjust the value according to your needs
    const isMobile = window.innerWidth <= 768;
    const mediaList = isMobile ? mediaListMobile : mediaListDesktop;

    const mediaContainer = document.getElementById('mediaContainer');
    const titleLabel = document.getElementById('titleLabel');
    const artistLabel = document.getElementById('artistLabel');

    const randomIndex = Math.floor(Math.random() * mediaList.length);
    const selectedItem = mediaList[randomIndex];

    if (selectedItem.type === 'video') {
        const videoElement = document.createElement('video');
        videoElement.src = selectedItem.url;
        videoElement.controls = true;
        videoElement.autoplay = true;
        videoElement.muted = true;

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
