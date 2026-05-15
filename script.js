const app = document.getElementById('app');

app.innerHTML = `
<header class="navbar-web px-4 lg:px-[60px] xl:px-[100px] py-4 border-b border-[#E1E3E8] bg-white fixed top-0 left-0 right-0 z-[1000]">
  <div class="max-w-[1240px] mx-auto flex justify-between items-center font-inter font-medium text-sm text-[#262A2E] w-full">
    <img src="/images/mobile_logo.svg" alt="Euroflex" class="h-9">
    <div class="hidden md:flex gap-6 items-center">
      <a href="#page-1">Home</a>
      <a href="#page-2">About</a>
      <a href="#page-2">Products</a>
      <button class="bg-[#2B3990] px-4 py-3 rounded-[10px] text-white">Contact Us</button>
    </div>
    <button class="md:hidden"><img src="/images/hamburger.svg" alt="menu"></button>
  </div>
</header>

<main class="pt-[78px]">
  <section id="page-1" class="hero-fold-v2 px-4 lg:px-[60px] xl:px-[100px] pt-6 lg:pt-8">
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
          <div class="grid md:grid-cols-2 gap-4 mt-8 text-sm">
            <div class="p-4 rounded-2xl bg-white border border-[#E1E3E8]"><img src="/images/high-grade.svg" class="mb-3" alt="">High Grade Material</div>
            <div class="p-4 rounded-2xl bg-white border border-[#E1E3E8]"><img src="/images/performance.svg" class="mb-3" alt="">Excellent Performance</div>
            <div class="p-4 rounded-2xl bg-white border border-[#E1E3E8]"><img src="/images/price_range.svg" class="mb-3" alt="">Competitive Price</div>
            <div class="p-4 rounded-2xl bg-white border border-[#E1E3E8]"><img src="/images/Package.svg" class="mb-3" alt="">Reliable Packaging</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="page-2" class="frame-2147224784 px-4 lg:px-[60px] xl:px-[100px] py-12 lg:py-20 text-white">
    <div class="max-w-[1240px] w-full mx-auto">
      <h2 class="font-urbanist font-bold text-4xl md:text-[56px] leading-[120%] mb-5">Built for Projects That Need Reliability</h2>
      <p class="text-white/80 text-base leading-[160%] max-w-[800px]">Euroflex pipes are engineered for pressure durability, weather resistance, and clean fluid transfer. Our manufacturing process ensures consistent wall thickness and field-ready performance for long-term infrastructure work.</p>
      <div class="grid md:grid-cols-3 gap-6 mt-10">
        <div class="bg-[#1F2937] border border-[#374151] p-6 rounded-2xl"><img src="/images/bis_certificate.svg" class="mb-3" alt="">BIS Certified Production</div>
        <div class="bg-[#1F2937] border border-[#374151] p-6 rounded-2xl"><img src="/images/iso_certificate.svg" class="mb-3" alt="">ISO Process Quality</div>
        <div class="bg-[#1F2937] border border-[#374151] p-6 rounded-2xl"><img src="/images/ce_certificate.svg" class="mb-3" alt="">CE Marked Standards</div>
      </div>
    </div>
  </section>
</main>
`;

const images = ['/images/hero_first_image.png','/images/hero_second_image.jpg','/images/hero_third_image.jpg','/images/hero_fourth_image.jpg','/images/hero_fifth_image.jpg'];
let i = 0;
const main = document.getElementById('hero-main');
const thumbs = document.getElementById('thumbs');

function renderThumbs() {
  thumbs.innerHTML = '';
  images.forEach((src, idx) => {
    const b = document.createElement('button');
    b.className = `relative flex-shrink-0 rounded-xl overflow-hidden w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${idx === i ? 'opacity-100 scale-105' : 'opacity-40'}`;
    b.innerHTML = `<img src="${src}" class="w-full h-full object-cover" alt="thumb">`;
    b.onclick = () => {
      i = idx;
      update();
    };
    thumbs.appendChild(b);
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

update();
