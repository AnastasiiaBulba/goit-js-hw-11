import{S as f,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="45963694-b66337efb933bcb9eea43ec6d",g="https://pixabay.com/api/";async function p(t,o=1){const a=`${g}?key=${m}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${o}`;try{const s=await fetch(a);if(!s.ok)throw new Error("Error fetching images");return await s.json()}catch(s){console.error(s),iziToast.error({title:"Error",message:"Failed to load images. Please try again later."})}}function h(t){const o=document.querySelector(".gallery"),a=t.map(({webformatURL:s,largeImageURL:e,tags:r,likes:i,views:l,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${e}">
          <img src="${s}" alt="${r}" loading="lazy" class="images"/>
        </a>
        <div class="info">
          <p><b>Likes:</b> ${i}</p>
          <p><b>Views:</b> ${l}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </li>
    `).join("");o.innerHTML=a}const y=document.getElementById("search-form"),b=document.querySelector(".gallery"),n=document.getElementById("loader");let F=new f(".gallery a");function L(t){c.error({message:t,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",close:!0})}function E(t){c.info({message:t,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",close:!0})}y.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget.elements.searchQuery.value.trim();if(!o){L("Please enter a search term.");return}b.innerHTML="",n.classList.remove("hidden");const a=await p(o);if(n.classList.add("hidden"),a.hits.length===0){E("Sorry, there are no images matching your search query. Please try again!");return}h(a.hits),F.refresh()});
//# sourceMappingURL=index.js.map
