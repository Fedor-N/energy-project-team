import{a as l,b as w,P as A}from"./assets/vendor-a6d4c47e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const y=Object.freeze({BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",RATING:"/rating",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription"}),q=document.querySelector(".daily-quote"),{BASE_URL:O,QUOTE:G}=y;l.defaults.baseURL=O;const B=async()=>{try{const t=await l.get(G);U(t.data)}catch(t){console.error(t)}},U=({author:t,quote:e})=>{q.innerHTML=`<p class="daily-quote-text">${e}</p>
    <h4 class="daily-quote-author">${t}</h4>`};B();const{BASE_URL:N,FILTERS:F}=y;l.defaults.baseURL=N;const b=async(t="Muscles",e=1,r=12)=>{const i=new URLSearchParams({filter:t,limit:r,page:e});return(await l.get(`${F}?${i}`)).data},a={body:document.querySelector("body"),groupListWrapper:document.querySelector(".group-list-wrapper"),groupList:document.getElementById("js-group-list"),groupListPagination:document.getElementById("js-group-list-pagination"),exercisesNavList:document.querySelectorAll(".exercises__nav-item"),exercisesWrapper:document.querySelector(".exercises-list-wrapper")},f="selected-category",E="selected-group",p="is-exercises-list-visible",S="group-page",x="exercises-page",h="exercises-keyword",M="Muscles";class j{setExercisesListVisible(){sessionStorage.setItem(p,"true")}setExercisesListHidden(){sessionStorage.setItem(p,"false")}isExercisesListVisible(){return sessionStorage.getItem(p)==="true"}setFilterCategory(e){sessionStorage.setItem(f,e)}getFilterCategory(){return sessionStorage.getItem(f)??M}setGroup(e){sessionStorage.setItem(E,e)}getGroup(){return sessionStorage.getItem(E)??""}setGroupPage(e){sessionStorage.setItem(S,e.toString())}getGroupPage(){const e=sessionStorage.getItem(S);return e?Number(e):1}getExercisesPage(){const e=sessionStorage.getItem(x);return e?Number(e):1}setExercisesPage(e){sessionStorage.setItem(x,e.toString())}setExercisesKeyword(e){sessionStorage.setItem(h,e)}getExercisesKeyword(){return sessionStorage.getItem(h)??""}}const n=new j;function H(t){return t.map(({filter:e,name:r,imgURL:i})=>{const s=`data-filter="${e}"`,o=`data-group="${r}"`;return`
        <li class="group-list-card" ${s} ${o}>
          <img class="group-list-card-img" src="${i}" alt="${e} - ${r}" ${s} ${o}></img>
          <div class="group-list-card-info" ${s} ${o}>
          <h2 class="group-list-card-title" ${s} ${o}>${r}</h2>
          <p class="group-list-card-text" ${s} ${o}>${e}</p>
          </div>
        </li>
      `}).join("")}function k(){const t=a.groupList;t.style.opacity="0",w({targets:t,opacity:[0,1],duration:300,easing:"easeOutQuad",complete:()=>{a.groupListPagination.style.display="flex"}})}function P(t,e){t.innerHTML="",k(),t.insertAdjacentHTML("beforeend",H(e)),W(),t.querySelectorAll(".group-list-card").forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-group");D(s)})})}function D(t){const e=document.querySelector(".exercises_name");e.textContent=`/ ${t}`,e.style.display="block",e.style.textTransform="capitalize"}function W(){const t=document.querySelector(".exercises_name");t.style.display="none"}function V({currentPage:t,perPage:e,totalItems:r,totalPages:i,onChange:s}){const o="js-group-list-pagination",c=a.groupListPagination;i>1&&!n.isExercisesListVisible()?c.classList.remove("is-hidden"):c.classList.add("is-hidden");const d={page:Number(t),itemsPerPage:e,totalItems:r,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new A(o,d).on("beforeMove",u=>{const T=u.page;s(T)})}async function K(t){const e=n.getFilterCategory(),r=await b(e,t),{results:i}=r,s=a.groupList;P(s,i)}async function C({page:t,filter:e}){const r=await b(e,t),{results:i,page:s,perPage:o,totalPages:c}=r,d=c*o;V({currentPage:s,perPage:o,totalItems:d,totalPages:c,onChange:u=>{n.setGroupPage(u),K(u)}});const L=a.groupList;P(L,i)}function I(){n.setExercisesListVisible(),a.groupListWrapper.classList.add("is-hidden"),a.exercisesWrapper.classList.remove("is-hidden")}function _(){n.setExercisesListHidden(),a.groupListWrapper.classList.remove("is-hidden"),a.exercisesWrapper.classList.add("is-hidden")}const Q=document.querySelector(".exercises_nav"),X=async t=>{try{let e=t.target,r=document.querySelector(".exercises__nav-item-current");((o,c)=>{o.classList.remove("exercises__nav-item-current"),c.classList.add("exercises__nav-item-current")})(r,e);const s=t.target.textContent.trim();a.groupList.innerHTML="",_(),n.setFilterCategory(s),n.setGroupPage(1),n.setExercisesPage(1),n.setExercisesKeyword(""),a.groupListPagination.style.display="none",C({page:1,filter:s})}catch(e){console.error(e)}};Q.addEventListener("click",X);const{BASE_URL:Y,EXERCISES:z}=y;l.defaults.baseURL=Y;const $=async(t,e,r=1,i=10)=>{const s=new URLSearchParams({[t]:e,limit:i,page:r});return(await l.get(`${z}?${s}`)).data},J=document.querySelector(".exercises_search-img"),g=document.querySelector(".exercises_criss-cross-img"),m=document.querySelector(".exercises_search-input"),Z=async()=>{const t=await $("abs","heel");console.log(t.data)};J.addEventListener("click",Z);g.addEventListener("click",()=>{m.value="",g.style.display="none"});m.addEventListener("input",()=>{m.value.length>0?g.style.display="block":g.style.display="none"});function ee(t){return t.map(e=>`<li class="exercise-item">
          <p class="rating">
            <span class="workout-tag">WORKOUT</span> ${e.rating}<span>⭐️</span>
            <button class="start-button">Start</button>
          </p>
          <h3>${e.name}</h3>
          <p class="details">Burned calories: ${e.burnedCalories} / 3 min</p>
          <p class="details">Body part: ${e.bodyPart}</p>
          <p class="details">Target: ${e.target}</p>
        </li>`).join("")}function te(t,e){if(t.innerHTML="",!e||e.length===0){t.insertAdjacentHTML("beforeend",`<li class="error-card">
        There are no exercises matching your search. Please try another term.
      </li>`);return}t.insertAdjacentHTML("beforeend",ee(e))}const se={MUSCLES:"muscles",BODY_PARTS:"bodyparts",EQUIPMENT:"equipment"};async function v(){let t=n.getFilterCategory(),e=n.getGroup();t=t.toLowerCase().split(" ").join(""),t===se.BODY_PARTS&&(t=t.slice(0,-1)),e=e==null?void 0:e.toLowerCase();const r=n.getExercisesPage(),i=await $(t,e,r);te(a.exercisesWrapper,i.results)}const re=n.getGroupPage(),R=n.getFilterCategory();a.groupListPagination.style.display="none";C({page:re,filter:R});n.isExercisesListVisible()?(v(),I()):_();a.exercisesNavList.forEach(t=>{t.textContent.trim()===R&&t.classList.add("exercises__nav-item-current")});a.groupList.addEventListener("click",t=>{let e=t.target.dataset.filter,r=t.target.dataset.group;r=r==null?void 0:r.toLowerCase(),e&&r&&(n.setGroup(r),n.setFilterCategory(e),v(),I())});
//# sourceMappingURL=commonHelpers2.js.map
