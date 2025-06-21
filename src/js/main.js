const header = document.querySelector('header');

const video = document.getElementById("hero-video");
const videos = [
  "src/videos/chiquinho-video-modo-turbo.mp4",
  "src/videos/chiquinho-video-sensorial.mp4"
];

window.addEventListener('scroll', checkScrollHeader);

let currentVideoIndex = 0;

function loadVideo(index) {
  video.src = videos[index];
  video.play();
}

document.getElementById("prev-btn").addEventListener("click", () => {
  currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
  loadVideo(currentVideoIndex);
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  loadVideo(currentVideoIndex);
});

function checkScrollHeader() {
  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  };
}

loadVideo(currentVideoIndex);