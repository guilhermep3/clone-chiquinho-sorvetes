const header = document.querySelector('header');
const barsMobile = document.querySelector('.bars-mobile');
const mobileAsideBg = document.querySelector('.mobile-aside-bg');
const mobileAside = document.querySelector('.mobile-aside');

function checkScrollHeader() {
  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  };
}

function handleShowAsideMobile(){
  mobileAsideBg.classList.toggle('active');
}
function handleRemoveActive(){
  mobileAsideBg.classList.remove('active');
}

window.addEventListener('scroll', checkScrollHeader);

barsMobile.addEventListener('click', handleShowAsideMobile);
mobileAsideBg.addEventListener('click', handleRemoveActive);