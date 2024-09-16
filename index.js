import{S as m,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="45963694-b66337efb933bcb9eea43ec6d",g="https://pixabay.com/api/";async function p(a,t=1){const s=`${g}?key=${f}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${t}`;try{const o=await fetch(s);if(!o.ok)throw new Error("Error fetching images");return await o.json()}catch(o){console.error(o),iziToast.error({title:"Error",message:"Failed to load images. Please try again later."})}}function y(a){const t=document.querySelector(".gallery"),s=a.map(({webformatURL:o,largeImageURL:e,tags:r,likes:i,views:l,comments:d,downloads:u})=>`
      <li class="gallery-item">
        <a href="${e}">
          <img src="${o}" alt="${r}" loading="lazy" class="images"/>
        </a>
        <div class="info">
          <p><b>Likes:</b> ${i}</p>
          <p><b>Views:</b> ${l}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${u}</p>
        </div>
      </li>
    `).join("");t.innerHTML=s}const h=document.getElementById("search-form"),b=document.querySelector(".gallery"),c=document.getElementById("loader");let L=new m(".gallery a");h.addEventListener("submit",async a=>{a.preventDefault();const t=a.currentTarget.elements.searchQuery.value.trim();if(!t){n.warning({title:"Warning",message:"Please enter a search term."});return}b.innerHTML="",c.classList.remove("hidden");const s=await p(t);if(c.classList.add("hidden"),s.hits.length===0){n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(s.hits),L.refresh()});
//# sourceMappingURL=index.js.map
