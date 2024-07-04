let musicContainer = document.getElementById("musicList-container");
let modalContainer = document.getElementById("myModal");
let modalClose = document.getElementById("modal-close");
let musicList = [
  {
    id: 1,
    musicImageLink: "./assets/images/fally-ipupa.jpeg",
    musicTitle: "roi manitou",
    artistName: "fally ipupa",
    audioLink: "./assets/music/Fally Ipupa - Roi Manitou (Clip Officiel).mp3",
  },
  {
    id: 2,
    musicImageLink: "./assets/images/skol.jpg",
    musicTitle: "skol mandra mandra",
    artistName: "koffi olomide",
    audioLink:
      "./assets/music/Koffi Olomidé - Skol Mandra Manda (Clip Officiel).mp3",
  },
  {
    id: 3,
    musicImageLink: "./assets/images/snappy.jpg",
    musicTitle: "all night",
    artistName: "snappy g ft trivia",
    audioLink: "./assets/music/Snappy ft Trivia -ALL NIGHT(officail video).mp3",
  },
];

function displayMusicAlbum() {
  musicList.map((musicItem) => {
    let albumCard = document.createElement("li");
    albumCard.innerHTML = `
    <div class="card">
      <img src="${musicItem.musicImageLink}" class="card-img-top" alt="music-album-image">
        <div class="card-body">
            <h5 class="card-title">${musicItem.musicTitle}</h5>
            <p class="card-text">${musicItem.artistName}</p>
        </div>
    </div>
    `;
    function selectMusicItem() {
      function openModal() {
        let modalContent = document.getElementById("modal-info");
        modalContainer.style.display = "block";
        modalContent.innerHTML = `
        <div class="image-container">
          <img src="${musicItem.musicImageLink}" alt="album-image" />
        </div>
        <div class="music-information">
            <h5>${musicItem.musicTitle}</h5>
            <p class="card-text">${musicItem.artistName}</p>
            <audio controls id="audio-controls">
                <source src="${musicItem.audioLink}"
                    type="audio/mpeg" />
            </audio>
        </div>
        `;
      }

      function closeModal() {
        modalContainer.style.display = "none";
        document.getElementById("audio-controls").src = ""
      }
      albumCard.addEventListener("click", openModal);
      modalClose.addEventListener("click", closeModal);
    }
    selectMusicItem(musicItem.id);
    musicContainer.appendChild(albumCard);
  });
}

displayMusicAlbum();
