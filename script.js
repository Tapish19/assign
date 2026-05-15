const app = document.getElementById('app');

const heroImages = [
  '/images/hero_first_image.png','/images/hero_second_image.jpg','/images/hero_third_image.jpg','/images/hero_fourth_image.jpg','/images/hero_fifth_image.jpg'
];

const hdpeSteps = [
  { title: 'Raw Material', heading: 'High-Grade Raw Material Selection', content: 'Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.', features: ['PE100 grade material', 'Optimal molecular weight distribution'] },
  { title: 'Extrusion', heading: 'Advanced Extrusion Process', content: 'State-of-the-art extrusion technology ensures consistent quality and optimal material properties.', features: ['Precision temperature control', 'Uniform material flow'] },
  { title: 'Cooling', heading: 'Controlled Cooling System', content: 'Advanced cooling technology maintains structural integrity and dimensional accuracy.', features: ['Water bath cooling', 'Temperature monitoring'] },
  { title: 'Sizing', heading: 'Precision Sizing Process', content: 'Vacuum sizing ensures exact diameter specifications and wall thickness.', features: ['Automated sizing control', 'Quality verification'] }
];

app.innerHTML = `
<header class="fixed left-0 right-0 top-0 bg-white z-[1000] px-4 lg:px-[60px] xl:px-[100px] py-4 border-b border-[#E1E3E8]">
  <div class="max-w-[1240px] mx-auto flex justify-between items-center font-inter font-medium text-sm text-[#262A2E]">
    <img src="/images/mobile_logo.svg" alt="logo"/>
    <div class="hidden md:flex gap-5 items-center"><div>About Us</div><div class="flex items-center gap-2"><p>Products</p><img src="/images/caretdown.svg"/></div><button class="bg-[#2B3990] px-4 py-3 rounded-[10px] text-white">Contact Us</button></div>
    <button id="menu-btn" class="md:hidden"><img src="/images/hamburger.svg"/></button>
  </div>
</header>
<nav id="mobile-menu" class="hidden md:hidden fixed top-[72px] left-0 right-0 bg-white z-[1000] border-b border-[#E1E3E8] p-4">About Us · Products · Contact Us</nav>
<div class="pt-[90px]"></div>
<section class="border-t border-[#E1E3E8] px-4 lg:px-[60px] xl:px-[100px]"><div class="max-w-[1240px] mx-auto">
<nav class="flex gap-2 items-center lg:mt-8 mt-6"><p class="font-inter text-sm text-[#4D545C]">Products</p><img src="/images/CaretRight.svg"><p class="font-inter text-sm text-black">Two For One Twister</p></nav>
<div class="mt-7 lg:mt-12 flex flex-col lg:flex-row items-start gap-14">
<div class="w-full lg:flex-1 lg:max-w-[50%]"><div class="relative xl:w-[530px] lg:w-[440px] lg:h-[500px] md:h-[500px] w-full h-[300px] overflow-hidden bg-gray-100"><img id="hero-main" src="/images/hero_first_image.png" class="w-full h-full rounded-3xl" alt="hero"><button id="prev" class="absolute top-1/2 left-4 transform -translate-y-1/2"><img src="/images/left-arrow.png" class="lg:size-10 size-8"></button><button id="next" class="absolute top-1/2 right-4 transform -translate-y-1/2"><img src="/images/right-arrow.png" class="lg:size-10 size-8"></button><div id="counter" class="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm font-inter"></div></div><div class="mt-4 flex gap-3 overflow-x-auto scrollbar-hide pb-2" id="thumbs"></div></div>
<div class="w-full lg:flex-1"><h1 class="font-urbanist font-bold text-4xl md:text-[56px] leading-[120%] text-black mt-4 mb-4">Premium HDPE Pipes & Coils for Modern Infrastructure</h1>
<ul class="flex flex-col gap-4">${['Leak-Proof Fusion Joints','Chemical Resistance','50+ Year Service Life','Flexible Installation'].map(f=>`<li class="font-inter text-base flex items-center gap-1.5"><img src="/images/CheckCircle.svg"/>${f}</li>`).join('')}</ul>
<div class="mt-6 p-4 border border-[#CFD1D4] bg-white rounded-[10px]"><p class="font-inter font-medium text-sm text-[#6A7077]">Price Range</p><p class="font-inter font-semibold text-xl text-black">₹4,80,000 - 7,90,000</p></div></div>
</div></div></section>
<section class="bg-[#111827] px-4 lg:px-[60px] xl:px-[100px] py-12 lg:py-20"><div class="max-w-[1240px] mx-auto"><h2 class="font-urbanist font-bold text-4xl text-white">Technical Specifications at a Glance</h2></div></section>
<section class="px-4 lg:px-[60px] xl:px-[100px] py-12"><div class="max-w-[1240px] mx-auto"><h3 class="font-urbanist font-bold text-4xl">Built to Last. Engineered to Perform.</h3></div></section>
<section class="px-4 lg:px-[60px] xl:px-[100px] py-12 border-t border-b border-[#E1E3E8]"><div class="max-w-[1240px] mx-auto"><h4 class="font-urbanist font-bold text-4xl"><span class="text-[#2B3990]">Frequently</span> Asked Questions</h4><div class="mt-9 flex flex-col gap-4" id="faqs"></div></div></section>
<section class="py-12 border-b border-[#E1E3E8]"><div class="max-w-[1400px] mx-auto px-4 lg:px-[60px] xl:px-[100px]"><h5 class="font-urbanist font-bold text-4xl">Versatile Applications Across Industries</h5></div></section>
<section class="px-4 lg:px-[60px] xl:px-[100px] py-12 border-b border-[#E1E3E8]"><div class="max-w-[1240px] mx-auto"><h6 class="font-urbanist font-bold text-4xl text-center">Advanced HDPE Pipe Manufacturing Process</h6><div class="mt-8"><div id="hdpe-chips" class="flex gap-2 flex-wrap"></div><div class="mt-6 p-5 border rounded-2xl bg-white"><p id="hdpe-heading" class="font-urbanist font-semibold text-[28px]"></p><p id="hdpe-content" class="font-inter text-sm mt-2"></p><ul id="hdpe-features" class="mt-3"></ul></div></div></div></section>
<section class="pt-12 pb-12 border-b border-[#E1E3E8]"><div class="px-4 lg:px-[60px] xl:px-[100px]"><h6 class="font-urbanist font-bold text-4xl text-center">Trusted Performance. Proven Results</h6></div></section>
<section class="px-4 lg:px-[60px] xl:px-[100px] py-12 border-b border-[#E1E3E8]"><div class="max-w-[1240px] mx-auto"><h2 class="font-urbanist font-bold text-4xl text-center">Complete Piping Solutions Portfolio</h2></div></section>
<section class="px-4 lg:px-[60px] xl:px-[100px] py-12 border-b border-[#E1E3E8]"><div class="max-w-[1240px] mx-auto"><h2 class="font-urbanist font-bold text-4xl text-center">Resources & Downloads</h2></div></section>
<section class="px-4 lg:px-[60px] xl:px-[100px] py-12 lg:py-20 xl:py-[100px] border-b border-[#E1E3E8]"><div class="max-w-[1240px] mx-auto"><div class="rounded-[20px] bg-[#2B3990] p-6"><h6 class="font-urbanist font-bold text-4xl text-white">Ready to Transform Your Textile Manufacturing?</h6></div></div></section>
<footer class="px-4 lg:px-[60px] xl:px-[100px] pt-12"><div class="max-w-[1240px] mx-auto"><div class="p-6 bg-white border border-[#CFD1D4] rounded-2xl"><img src="/images/footer_mobile_logo.svg"/></div></div></footer>
`;

document.getElementById('menu-btn').onclick = () => document.getElementById('mobile-menu').classList.toggle('hidden');

let currentHero = 0;
const main = document.getElementById('hero-main');
const thumbs = document.getElementById('thumbs');
const counter = document.getElementById('counter');
function renderThumbs(){ thumbs.innerHTML=''; heroImages.forEach((src, idx)=>{const b=document.createElement('button'); b.className=`relative flex-shrink-0 rounded-xl overflow-hidden w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${idx===currentHero?'opacity-100 scale-105':'opacity-40'}`; b.innerHTML=`<img src="${src}" class="w-full h-full object-cover">`; b.onclick=()=>{currentHero=idx; updateHero();}; thumbs.appendChild(b);});}
function updateHero(){main.src=heroImages[currentHero]; counter.textContent=`${currentHero+1} / ${heroImages.length}`; renderThumbs();}
document.getElementById('prev').onclick=()=>{currentHero=(currentHero+heroImages.length-1)%heroImages.length; updateHero();};
document.getElementById('next').onclick=()=>{currentHero=(currentHero+1)%heroImages.length; updateHero();};
updateHero();

const faqs = [{q:'What is the purpose of a laser cutter for sheet metal?',a:'It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes.'},{q:'What is the purpose of a laser cutter for sheet metal?',a:'It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes.'},{q:'What is the purpose of a laser cutter for sheet metal?',a:'It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes.'}];
const faqWrap = document.getElementById('faqs');
let openFaq = -1;
function renderFaqs(){faqWrap.innerHTML=''; faqs.forEach((f, idx)=>{const el=document.createElement('div');el.className='p-5 rounded-xl border border-[#E1E3E8] bg-white';el.innerHTML=`<div class="flex items-center justify-between cursor-pointer"><p class="font-inter font-medium text-base text-black">${f.q}</p><img src="${openFaq===idx?'/images/accordian-open.svg':'/images/accordian-close.svg'}"/></div>${openFaq===idx?`<p class="mt-4 font-inter text-base text-[#535A61]">${f.a}</p>`:''}`;el.onclick=()=>{openFaq=openFaq===idx?-1:idx; renderFaqs();};faqWrap.appendChild(el);});}
renderFaqs();

let hdpeIndex = 0;
const chipWrap = document.getElementById('hdpe-chips');
const hdpeHeading = document.getElementById('hdpe-heading');
const hdpeContent = document.getElementById('hdpe-content');
const hdpeFeatures = document.getElementById('hdpe-features');
function renderHdpe(){chipWrap.innerHTML=''; hdpeSteps.forEach((s,idx)=>{const b=document.createElement('button'); b.className=`px-4 py-2 rounded-[32px] border ${idx===hdpeIndex?'bg-[#2B3990] text-white':'bg-white border-[#CFD1D4]'}`; b.textContent=s.title; b.onclick=()=>{hdpeIndex=idx; renderHdpe();}; chipWrap.appendChild(b);}); const s=hdpeSteps[hdpeIndex]; hdpeHeading.textContent=s.heading; hdpeContent.textContent=s.content; hdpeFeatures.innerHTML=s.features.map(f=>`<li class="font-inter text-sm flex items-center gap-1.5 mt-2"><img src="/images/CheckCircle.svg" class="w-5 h-5"/>${f}</li>`).join('');}
renderHdpe();
