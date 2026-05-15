const app = document.getElementById('app');
app.innerHTML = `
<header class="px-4 lg:px-[60px] xl:px-[100px] py-4 border-b border-[#E1E3E8] bg-white">
 <div class="max-w-[1240px] mx-auto flex justify-between items-center font-inter font-medium text-sm text-[#262A2E]"><img src="/images/mobile_logo.svg"><div class="hidden md:flex gap-5 items-center"><div>About Us</div><div class="flex items-center gap-2"><p>Products</p><img src="/images/caretdown.svg"></div><button class="bg-[#2B3990] px-4 py-3 rounded-[10px] text-white">Contact Us</button></div></div>
</header>
<section class="border-t border-[#E1E3E8] px-4 lg:px-[60px] xl:px-[100px]"><div class="max-w-[1240px] mx-auto"><nav class="flex gap-2 items-center lg:mt-8 mt-6"><p class="font-inter text-sm text-[#4D545C]">Products</p><img src="/images/CaretRight.svg"><p class="font-inter text-sm text-black">Two For One Twister</p></nav>
<div class="mt-7 lg:mt-12 flex flex-col lg:flex-row items-start gap-14"><div class="w-full lg:flex-1 lg:max-w-[50%]"><div class="relative xl:w-[530px] lg:w-[440px] lg:h-[500px] md:h-[500px] w-full h-[300px] overflow-hidden bg-gray-100"><img id="hero-main" src="/images/hero_first_image.png" class="w-full h-full rounded-3xl" alt="hero"><button id="prev" class="absolute top-1/2 left-4 transform -translate-y-1/2"><img src="/images/left-arrow.png" class="lg:size-10 size-8"></button><button id="next" class="absolute top-1/2 right-4 transform -translate-y-1/2"><img src="/images/right-arrow.png" class="lg:size-10 size-8"></button></div>
<div class="mt-4 flex gap-3 overflow-x-auto scrollbar-hide pb-2" id="thumbs"></div></div>
<div class="w-full lg:flex-1"><h1 class="font-urbanist font-bold text-4xl md:text-[56px] leading-[120%] text-black mt-4 mb-4">Premium HDPE Pipes & Coils for Modern Infrastructure</h1></div></div></div></section>
`;
const images=['/images/hero_first_image.png','/images/hero_second_image.jpg','/images/hero_third_image.jpg','/images/hero_fourth_image.jpg','/images/hero_fifth_image.jpg'];
let i=0; const main=document.getElementById('hero-main'); const thumbs=document.getElementById('thumbs');
function renderThumbs(){thumbs.innerHTML='';images.forEach((src,idx)=>{const b=document.createElement('button');b.className=`relative flex-shrink-0 rounded-xl overflow-hidden w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${idx===i?'opacity-100 scale-105':'opacity-40'}`;b.innerHTML=`<img src="${src}" class="w-full h-full object-cover">`;b.onclick=()=>{i=idx;update()};thumbs.appendChild(b)});} 
function update(){main.src=images[i];renderThumbs();}
document.getElementById('prev').onclick=()=>{i=(i+images.length-1)%images.length;update();};
document.getElementById('next').onclick=()=>{i=(i+1)%images.length;update();};
update();
