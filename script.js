const imageList = [
  'images/hero_first_image.png',
  'images/hero_second_image.jpg',
  'images/hero_third_image.jpg',
  'images/hero_fourth_image.jpg'
];

const mainImage = document.getElementById('mainImage');
const thumbs = Array.from(document.querySelectorAll('.thumbnail'));
const prevBtn = document.querySelector('.left-btn');
const nextBtn = document.querySelector('.right-btn');
let current = 0;

function syncUI() {
  mainImage.src = imageList[current];
  thumbs.forEach((thumb, idx) => {
    thumb.src = imageList[idx] || imageList[0];
    thumb.classList.toggle('active', idx === current);
  });
}

thumbs.forEach((thumb, idx) => {
  thumb.addEventListener('click', () => {
    current = idx;
    syncUI();
  });
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + imageList.length) % imageList.length;
  syncUI();
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % imageList.length;
  syncUI();
});

syncUI();
