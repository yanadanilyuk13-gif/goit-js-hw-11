import{a as m,S as d,i as a}from"./assets/vendor-BGqwtSVv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="56897877-369a2b1f62c21f25620e74b5c",h="https://pixabay.com/api/";function g(s){return m.get(h,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const c=document.querySelector(".gallery"),l=document.querySelector("#loader"),y=new d(".gallery a");function b(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:n,comments:u,downloads:f})=>`
   <li class="photo-card">
        <a href="${i}">
            <img src="${o}" alt="${e}">
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><br>${r}</p>
          <p class="info-item"><b>Views</b><br>${n}</p>
          <p class="info-item"><b>Comments</b><br>${u}</p>
          <p class="info-item"><b>Downloads</b><br>${f}</p>
        </div>
    </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),y.refresh()}function L(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",v);function v(s){s.preventDefault(),console.log("Submit works");const t=s.currentTarget.elements["search-text"].value.trim();if(!t){a.error({message:"Please enter a search query!"});return}L(),S(),g(t).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(o.hits)}).catch(o=>{console.log(o),a.error({message:"Something went wrong!"})}).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
