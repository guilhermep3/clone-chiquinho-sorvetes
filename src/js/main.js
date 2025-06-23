const header = document.querySelector('header');
const barsMobile = document.querySelector('.bars-mobile');
const mobileAsideBg = document.querySelector('.mobile-aside-bg');
const mobileAside = document.querySelector('.mobile-aside');

const video = document.getElementById("hero-video");
const videos = [
  "src/videos/chiquinho-video-sensorial.mp4",
  "src/videos/chiquinho-video-modo-turbo.mp4"
];

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

loadVideo(currentVideoIndex);

function checkScrollHeader() {
  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  };
}

function handleShowAsideMobile(){
  mobileAsideBg.classList.toggle('active')
}
function handleRemoveActive(){
  mobileAsideBg.classList.remove('active')
}

window.addEventListener('scroll', checkScrollHeader);

barsMobile.addEventListener('click', handleShowAsideMobile);
mobileAsideBg.addEventListener('click', handleRemoveActive);