const app = document.getElementById('app');

const features = [
  { icon: '/images/high-grade.svg', label: 'High Grade Material' },
  { icon: '/images/performance.svg', label: 'Excellent Performance' },
  { icon: '/images/price_range.svg', label: 'Competitive Price' },
  { icon: '/images/Package.svg', label: 'Reliable Packaging' }
];

const certifications = [
  { icon: '/images/bis_certificate.svg', label: 'BIS Certified' },
  { icon: '/images/iso_certificate.svg', label: 'ISO Compliant Process' },
  { icon: '/images/ce_certificate.svg', label: 'CE Marked Quality' }
];

const featureCards = features
  .map(
    ({ icon, label }) =>
      `<div class="p-4 rounded-2xl bg-white border border-[#E1E3E8]"><img src="${icon}" class="mb-3" alt="">${label}</div>`
  )
  .join('');

const certificationCards = certifications
  .map(
    ({ icon, label }) =>
      `<div class="bg-[#F7F8F9] p-6 rounded-3xl border border-[#E1E3E8]"><img src="${icon}" class="mb-3" alt="">${label}</div>`
  )
  .join('');

app.innerHTML = `
<header class="navbar-web px-4 lg:px-[60px] xl:px-[100px] py-4 border-b border-[#E1E3E8] bg-white fixed top-0 left-0 right-0 z-[1000]">
  <div class="max-w-[1240px] mx-auto flex justify-between items-center font-inter font-medium text-sm text-[#262A2E]">
    <img src="/images/mobile_logo.svg" alt="Euroflex" class="h-9">
    <nav class="hidden md:flex gap-6 items-center">
      <a href="#about">About Us</a>
      <a href="#products" class="flex items-center gap-2">Products <img src="/images/caretdown.svg" alt=""></a>
      <a href="#faq">FAQs</a>
      <button class="bg-[#2B3990] px-4 py-3 rounded-[10px] text-white">Contact Us</button>
    </nav>
    <button class="md:hidden" aria-label="Open menu"><img src="/images/hamburger.svg" alt="menu"></button>
  </div>
</header>

<main class="pt-[78px]">
<section id="products" class="hero-fold-v2 px-4 lg:px-[60px] xl:px-[100px] pt-6 lg:pt-8">
  <div class="max-w-[1240px] mx-auto">
    <nav class="flex gap-2 items-center lg:mt-8 mt-6">
      <p class="font-inter text-sm text-[#4D545C]">Products</p><img src="/images/CaretRight.svg" alt=""><p class="font-inter text-sm text-black">Two For One Twister</p>
    </nav>
    <div class="mt-7 lg:mt-10 flex flex-col lg:flex-row items-start gap-14 lg:gap-16">
      <div class="w-full lg:flex-1 lg:max-w-[50%]">
        <div class="relative xl:w-[530px] lg:w-[440px] lg:h-[500px] md:h-[500px] w-full h-[320px] overflow-hidden bg-gray-100 rounded-3xl">
          <img id="hero-main" src="/images/hero_first_image.png" class="w-full h-full rounded-3xl object-cover" alt="hero">
          <button id="prev" class="absolute top-1/2 left-4 transform -translate-y-1/2"><img src="/images/left-arrow.png" class="lg:size-10 size-8" alt="prev"></button>
          <button id="next" class="absolute top-1/2 right-4 transform -translate-y-1/2"><img src="/images/right-arrow.png" class="lg:size-10 size-8" alt="next"></button>
        </div>

        <div class="w-full lg:flex-1">
          <h1 class="font-urbanist font-bold text-[40px] md:text-[56px] leading-[120%] text-black mt-4 mb-5">Premium HDPE Pipes & Coils for Modern Infrastructure</h1>
          <p class="text-[#4D545C] text-base leading-[160%]">High-grade, BIS/ISO certified piping solutions engineered for irrigation, telecom, water supply, and industrial use. Built for durability and long-term field performance.</p>
          <div class="grid grid-cols-2 gap-4 mt-8 text-sm">${featureCards}</div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="px-4 lg:px-[60px] xl:px-[100px] py-12 lg:py-20">
    <div class="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6 mb-8">${certificationCards}</div>
  </section>

  <section id="faq" class="px-4 lg:px-[60px] xl:px-[100px] pb-12 lg:pb-20">
    <div class="max-w-[900px] mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Frequently asked questions</h2>
      <div id="faq-list" class="space-y-4"></div>
    </div>
  </section>
</main>

<footer class="frame-2147224784 bg-[#111827] text-white px-4 lg:px-[60px] xl:px-[100px] py-10">
  <div class="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between gap-6">
    <div>
      <img src="/images/footer_mobile_logo.svg" alt="footer" class="mb-3">
      <p class="text-sm text-white/80">Built for modern infrastructure projects across India.</p>
    </div>
    <div class="text-sm text-white/80">support@euroflex.co<br>+91 90000 10000</div>
  </div>
</footer>
`;

const images = [
  '/images/hero_first_image.png',
  '/images/hero_second_image.jpg',
  '/images/hero_third_image.jpg',
  '/images/hero_fourth_image.jpg',
  '/images/hero_fifth_image.jpg'
];

let activeImageIndex = 0;
const mainImage = document.getElementById('hero-main');
const thumbs = document.getElementById('thumbs');

function renderThumbs() {
  thumbs.innerHTML = '';

  images.forEach((src, idx) => {
    const thumbButton = document.createElement('button');
    thumbButton.className = `relative flex-shrink-0 rounded-xl overflow-hidden w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${
      idx === activeImageIndex ? 'opacity-100 scale-105' : 'opacity-40'
    }`;
    thumbButton.setAttribute('aria-label', `View image ${idx + 1}`);
    thumbButton.innerHTML = `<img src="${src}" class="w-full h-full object-cover" alt="thumb">`;
    thumbButton.onclick = () => {
      activeImageIndex = idx;
      updateImage();
    };
    thumbs.appendChild(thumbButton);
  });
}

function updateImage() {
  mainImage.src = images[activeImageIndex];
  renderThumbs();
}

document.getElementById('prev').onclick = () => {
  activeImageIndex = (activeImageIndex + images.length - 1) % images.length;
  updateImage();
};

document.getElementById('next').onclick = () => {
  activeImageIndex = (activeImageIndex + 1) % images.length;
  updateImage();
};

const faqData = [
  {
    q: 'What applications are these HDPE pipes suitable for?',
    a: 'These pipes are widely used in irrigation, telecom ducting, drainage, potable water lines, and industrial fluid transportation.'
  },
  {
    q: 'Do you provide quality certifications?',
    a: 'Yes. We provide BIS, CE, and ISO aligned production and testing standards for product quality assurance.'
  },
  {
    q: 'Can I get custom dimensions and bulk pricing?',
    a: 'Yes. We support custom OD/thickness requirements and provide commercial offers for project and volume orders.'
  }
];

const faqList = document.getElementById('faq-list');

faqData.forEach(({ q, a }, idx) => {
  const faqItem = document.createElement('div');
  faqItem.className = 'border border-[#E1E3E8] rounded-2xl p-5 bg-white';
  faqItem.innerHTML = `
    <button class="faq-btn w-full text-left flex justify-between items-center font-semibold">
      ${q}
      <img src="${idx === 0 ? '/images/accordian-open.svg' : '/images/accordian-close.svg'}" class="faq-icon" alt="toggle">
    </button>
    <p class="faq-answer ${idx === 0 ? '' : 'hidden'} text-[#4D545C] mt-3 leading-7">${a}</p>
  `;
  faqList.appendChild(faqItem);
});

faqList.querySelectorAll('.faq-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.parentElement.querySelector('.faq-answer');
    const icon = btn.querySelector('.faq-icon');
    const isOpen = !answer.classList.contains('hidden');

    answer.classList.toggle('hidden');
    icon.src = isOpen ? '/images/accordian-close.svg' : '/images/accordian-open.svg';
  });
});

updateImage();
