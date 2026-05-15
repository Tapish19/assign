const app = document.getElementById('app');

app.innerHTML = `
<header class="px-4 lg:px-[60px] xl:px-[100px] py-4 border-b border-[#E1E3E8] bg-white fixed top-0 left-0 right-0 z-[1000]">
  <div class="max-w-[1240px] mx-auto flex justify-between items-center font-inter font-medium text-sm text-[#262A2E]">
    <img src="/images/mobile_logo.svg" alt="Euroflex" class="h-9">
    <div class="hidden md:flex gap-6 items-center">
      <a href="#about">About Us</a>
      <a href="#products" class="flex items-center gap-2">Products <img src="/images/caretdown.svg" alt=""></a>
      <a href="#faq">FAQs</a>
      <button class="bg-[#2B3990] px-4 py-3 rounded-[10px] text-white">Contact Us</button>
    </div>
    <button class="md:hidden"><img src="/images/hamburger.svg" alt="menu"></button>
  </div>
</header>

<main class="pt-[78px]">
<section id="products" class="px-4 lg:px-[60px] xl:px-[100px] pt-6 lg:pt-8">
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
        <div class="mt-4 flex gap-3 overflow-x-auto scrollbar-hide pb-2" id="thumbs"></div>
      </div>
      <div class="w-full lg:flex-1">
        <h1 class="font-urbanist font-bold text-[40px] md:text-[56px] leading-[120%] text-black mt-4 mb-5">Premium HDPE Pipes & Coils for Modern Infrastructure</h1>
        <p class="text-[#4D545C] text-base leading-[160%]">High-grade, BIS/ISO certified piping solutions engineered for irrigation, telecom, water supply, and industrial use. Built for durability and long-term field performance.</p>
        <div class="grid grid-cols-2 gap-4 mt-8 text-sm">
          <div class="p-4 rounded-2xl bg-white border border-[#E1E3E8]"><img src="/images/high-grade.svg" class="mb-3" alt="">High Grade Material</div>
          <div class="p-4 rounded-2xl bg-white border border-[#E1E3E8]"><img src="/images/performance.svg" class="mb-3" alt="">Excellent Performance</div>
          <div class="p-4 rounded-2xl bg-white border border-[#E1E3E8]"><img src="/images/price_range.svg" class="mb-3" alt="">Competitive Price</div>
          <div class="p-4 rounded-2xl bg-white border border-[#E1E3E8]"><img src="/images/Package.svg" class="mb-3" alt="">Reliable Packaging</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="about" class="px-4 lg:px-[60px] xl:px-[100px] py-12 lg:py-20">
  <div class="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6 mb-8">
    <div class="bg-[#F7F8F9] p-6 rounded-3xl border border-[#E1E3E8]"><img src="/images/bis_certificate.svg" class="mb-3" alt="">BIS Certified</div>
    <div class="bg-[#F7F8F9] p-6 rounded-3xl border border-[#E1E3E8]"><img src="/images/iso_certificate.svg" class="mb-3" alt="">ISO Compliant Process</div>
    <div class="bg-[#F7F8F9] p-6 rounded-3xl border border-[#E1E3E8]"><img src="/images/ce_certificate.svg" class="mb-3" alt="">CE Marked Quality</div>
  </div>
</section>

<section id="faq" class="px-4 lg:px-[60px] xl:px-[100px] pb-12 lg:pb-20">
  <div class="max-w-[900px] mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-6">Frequently asked questions</h2>
    <div class="space-y-4" id="faq-list"></div>
  </div>
</section>
</main>

<footer class="bg-[#111827] text-white px-4 lg:px-[60px] xl:px-[100px] py-10">
  <div class="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between gap-6">
    <div><img src="/images/footer_mobile_logo.svg" alt="footer" class="mb-3"><p class="text-sm text-white/80">Built for modern infrastructure projects across India.</p></div>
    <div class="text-sm text-white/80">support@euroflex.co<br>+91 90000 10000</div>
  </div>
</footer>
`;

const images = ['/images/hero_first_image.png','/images/hero_second_image.jpg','/images/hero_third_image.jpg','/images/hero_fourth_image.jpg','/images/hero_fifth_image.jpg'];
let i = 0;
const main = document.getElementById('hero-main');
const thumbs = document.getElementById('thumbs');
function renderThumbs() { thumbs.innerHTML = ''; images.forEach((src, idx) => { const b = document.createElement('button'); b.className = `relative flex-shrink-0 rounded-xl overflow-hidden w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${idx === i ? 'opacity-100 scale-105' : 'opacity-40'}`; b.innerHTML = `<img src="${src}" class="w-full h-full object-cover" alt="thumb">`; b.onclick = () => { i = idx; update(); }; thumbs.appendChild(b); }); }
function update() { main.src = images[i]; renderThumbs(); }
document.getElementById('prev').onclick = () => { i = (i + images.length - 1) % images.length; update(); };
document.getElementById('next').onclick = () => { i = (i + 1) % images.length; update(); };

const faqData = [
  { q: 'What applications are these HDPE pipes suitable for?', a: 'These pipes are widely used in irrigation, telecom ducting, drainage, potable water lines, and industrial fluid transportation.' },
  { q: 'Do you provide quality certifications?', a: 'Yes. We provide BIS, CE, and ISO aligned production and testing standards for product quality assurance.' },
  { q: 'Can I get custom dimensions and bulk pricing?', a: 'Yes. We support custom OD/thickness requirements and provide commercial offers for project and volume orders.' }
];
const faqList = document.getElementById('faq-list');
faqData.forEach(({ q, a }, idx) => { const item = document.createElement('div'); item.className = 'border border-[#E1E3E8] rounded-2xl p-5 bg-white'; item.innerHTML = `<button class="faq-btn w-full text-left flex justify-between items-center font-semibold">${q}<img src="${idx === 0 ? '/images/accordian-open.svg' : '/images/accordian-close.svg'}" class="faq-icon" alt="toggle"></button><p class="faq-answer ${idx === 0 ? '' : 'hidden'} text-[#4D545C] mt-3 leading-7">${a}</p>`; faqList.appendChild(item); });
faqList.querySelectorAll('.faq-btn').forEach((btn) => { btn.addEventListener('click', () => { const answer = btn.parentElement.querySelector('.faq-answer'); const icon = btn.querySelector('.faq-icon'); const open = !answer.classList.contains('hidden'); answer.classList.toggle('hidden'); icon.src = open ? '/images/accordian-close.svg' : '/images/accordian-open.svg'; }); });
update();
