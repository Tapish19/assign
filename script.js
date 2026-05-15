const app = document.getElementById('app');

app.innerHTML = `
<header class="px-4 lg:px-[60px] xl:px-[100px] py-4 border-b border-[#E1E3E8] bg-white">
  <div class="max-w-[1240px] mx-auto flex justify-between items-center">
    <img src="/images/mobile_logo.svg" alt="Euroflex" class="h-[30px]" />
    <div class="hidden md:flex gap-5 items-center font-inter font-medium text-sm text-[#262A2E]">
      <button>About Us</button>
      <button class="flex items-center gap-2">Products <img src="/images/caretdown.svg" alt="" /></button>
      <button class="bg-[#2B3990] px-4 py-3 rounded-[10px] text-white">Contact Us</button>
    </div>
    <button class="md:hidden"><img src="/images/hamburger.svg" alt="menu" /></button>
  </div>
</header>

<section class="border-t border-[#E1E3E8] px-4 lg:px-[60px] xl:px-[100px]">
  <div class="max-w-[1240px] mx-auto">
    <nav class="flex gap-2 items-center lg:mt-8 mt-6">
      <p class="font-inter text-sm text-[#4D545C]">Products</p>
      <img src="/images/CaretRight.svg" alt="" />
      <p class="font-inter text-sm text-black">Two For One Twister</p>
    </nav>

    <div class="mt-7 lg:mt-12 flex flex-col lg:flex-row items-start lg:gap-14 gap-8">
      <div class="w-full lg:flex-1 lg:max-w-[50%]">
        <div class="relative xl:w-[530px] lg:w-[440px] lg:h-[500px] md:h-[500px] w-full h-[320px] overflow-hidden bg-gray-100 rounded-[24px]">
          <img id="hero-main" src="/images/hero_first_image.png" class="w-full h-full object-cover" alt="hero" />
          <button id="prev" class="absolute top-1/2 left-4 transform -translate-y-1/2"><img src="/images/left-arrow.png" class="lg:size-10 size-8" alt="prev" /></button>
          <button id="next" class="absolute top-1/2 right-4 transform -translate-y-1/2"><img src="/images/right-arrow.png" class="lg:size-10 size-8" alt="next" /></button>
        </div>
        <div class="mt-4 flex gap-3 overflow-x-auto scrollbar-hide pb-2" id="thumbs"></div>
      </div>

      <div class="w-full lg:flex-1 lg:pt-8">
        <h1 class="font-urbanist font-bold text-4xl md:text-[56px] leading-[120%] text-black mb-5">Premium HDPE Pipes & Coils for Modern Infrastructure</h1>
        <p class="font-inter text-[#535A61] text-base leading-[160%] mb-8">Built for high-performance projects with certified quality, uniform wall thickness, and long service life across pressure and non-pressure applications.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="rounded-[20px] border border-[#E1E3E8] bg-white p-5"><img src="/images/high-grade.svg" alt="" class="mb-3"/><p class="font-medium text-[#262A2E]">High Grade Raw Material</p></div>
          <div class="rounded-[20px] border border-[#E1E3E8] bg-white p-5"><img src="/images/performance.svg" alt="" class="mb-3"/><p class="font-medium text-[#262A2E]">Consistent Field Performance</p></div>
          <div class="rounded-[20px] border border-[#E1E3E8] bg-white p-5"><img src="/images/price_range.svg" alt="" class="mb-3"/><p class="font-medium text-[#262A2E]">Optimized Price Range</p></div>
          <div class="rounded-[20px] border border-[#E1E3E8] bg-white p-5"><img src="/images/Package.svg" alt="" class="mb-3"/><p class="font-medium text-[#262A2E]">Safe Packaging</p></div>
        </div>
      </div>
    </div>

    <div class="lg:mt-20 mt-12 grid md:grid-cols-3 gap-4 lg:gap-6">
      <div class="bg-[#F7F8F9] rounded-[24px] p-6"><img src="/images/bis_certificate.svg" alt="" class="h-8 mb-4" /><p class="font-semibold">BIS Certified</p></div>
      <div class="bg-[#F7F8F9] rounded-[24px] p-6"><img src="/images/iso_certificate.svg" alt="" class="h-8 mb-4" /><p class="font-semibold">ISO Compliant</p></div>
      <div class="bg-[#F7F8F9] rounded-[24px] p-6"><img src="/images/ce_certificate.svg" alt="" class="h-8 mb-4" /><p class="font-semibold">CE Marked</p></div>
    </div>

    <div class="lg:mt-20 mt-12 lg:mb-20 mb-12 max-w-[800px]">
      <h2 class="font-urbanist text-[28px] lg:text-[44px] leading-[120%] font-bold mb-6">Frequently asked questions</h2>
      <div class="space-y-3" id="faq-list"></div>
    </div>
  </div>
</section>

<footer class="bg-[#262A2E] px-4 lg:px-[60px] xl:px-[100px] py-12 text-white">
  <div class="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between gap-6">
    <div>
      <img src="/images/footer_mobile_logo.svg" class="h-8 mb-4" alt="Euroflex" />
      <p class="text-white/80 text-sm">Durable pipes and coils engineered for modern infrastructure.</p>
    </div>
    <div class="text-sm text-white/80">
      support@euroflex.co<br />
      +91 90000 10000
    </div>
  </div>
</footer>
`;

const images = ['/images/hero_first_image.png', '/images/hero_second_image.jpg', '/images/hero_third_image.jpg', '/images/hero_fourth_image.jpg', '/images/hero_fifth_image.jpg'];
let i = 0;
const main = document.getElementById('hero-main');
const thumbs = document.getElementById('thumbs');

function renderThumbs() {
  thumbs.innerHTML = '';
  images.forEach((src, idx) => {
    const button = document.createElement('button');
    button.className = `relative flex-shrink-0 rounded-xl overflow-hidden w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${idx === i ? 'opacity-100 scale-105' : 'opacity-40'}`;
    button.innerHTML = `<img src="${src}" class="w-full h-full object-cover" alt="thumbnail" />`;
    button.onclick = () => {
      i = idx;
      update();
    };
    thumbs.appendChild(button);
  });
}

function update() {
  main.src = images[i];
  renderThumbs();
}

document.getElementById('prev').onclick = () => {
  i = (i + images.length - 1) % images.length;
  update();
};

document.getElementById('next').onclick = () => {
  i = (i + 1) % images.length;
  update();
};

const faqs = [
  ['What applications are these HDPE pipes suitable for?', 'Suitable for irrigation, telecom ducting, drainage, potable water, and industrial applications.'],
  ['Do you provide certifications?', 'Yes, products follow BIS, CE, and ISO quality and process standards.'],
  ['Can I get custom sizes and project pricing?', 'Yes, custom dimensions and project-based pricing are available for bulk orders.']
];

const faqList = document.getElementById('faq-list');
faqs.forEach(([q, a], idx) => {
  const row = document.createElement('div');
  row.className = 'border border-[#E1E3E8] rounded-[20px] bg-white p-5';
  row.innerHTML = `<button class="faq-btn flex items-center justify-between w-full text-left font-semibold">${q}<img class="faq-icon" src="${idx === 0 ? '/images/accordian-open.svg' : '/images/accordian-close.svg'}" alt="toggle" /></button><p class="faq-content text-[#535A61] leading-[160%] mt-3 ${idx === 0 ? '' : 'hidden'}">${a}</p>`;
  faqList.appendChild(row);
});

faqList.querySelectorAll('.faq-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.parentElement.querySelector('.faq-content');
    const icon = btn.querySelector('.faq-icon');
    const isOpen = !content.classList.contains('hidden');
    content.classList.toggle('hidden');
    icon.src = isOpen ? '/images/accordian-close.svg' : '/images/accordian-open.svg';
  });
});

update();
