!function(e){function t(t){for(var o,i,l=t[0],c=t[1],r=t[2],u=0,m=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);m.length;)m.shift()();return a.push.apply(a,r||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var c=n[l];0!==s[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},s={0:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var r=0;r<l.length;r++)t(l[r]);var d=c;a.push([4,1]),n()}([,,function(e,t){const n=document.getElementsByClassName("mobileNavigationButton")[0],o=document.getElementsByClassName("navigation")[0];let s=!1;function a(){n.classList.remove("mobileNavigationButtonRotate"),o.classList.remove("mobileNavigationContainer"),o.classList.add("navigation"),s=!1}n.onclick=function(e){e.stopPropagation(),s?a():(n.classList.add("mobileNavigationButtonRotate"),o.classList.remove("navigation"),o.classList.add("mobileNavigationContainer"),s=!0,o.addEventListener("click",(function(e){"A"===e.target.tagName&&a()})))},window.onresize=()=>{window.innerWidth>1024&&a()}},function(e,t){const n=document.getElementsByClassName("work");for(let e of n)e.addEventListener("click",(function(t){t.stopPropagation(),document.getElementsByClassName("imageOfWork")[0].src=`${e.querySelector("img").src}`,o()}));function o(){document.body.style.overflow="hidden";const e=document.getElementsByClassName("workClick")[0];e.style.display="flex",e.style.overflow="scroll",document.getElementsByClassName("closeWork ")[0].onclick=s,e.addEventListener("click",(function(t){t.stopPropagation(),e===t.target&&s()}))}function s(){document.body.style.overflow="unset",document.getElementsByClassName("workClick")[0].style.display="none"}},function(e,t,n){"use strict";n.r(t);n(0),n(1);const o=document.querySelectorAll(".navigation>ul>li>a"),s=document.querySelector("#download>a");function a(e){const t=window.pageYOffset+e.getBoundingClientRect().top,n=window.pageXOffset+e.getBoundingClientRect().left,a=window.pageXOffset+e.getBoundingClientRect().right,i=window.pageYOffset+e.getBoundingClientRect().bottom,l=window.pageYOffset,c=window.pageXOffset,r=window.pageXOffset+document.documentElement.clientWidth,d=window.pageYOffset+document.documentElement.clientHeight;if(i-350>l&&t+650<d&&a>c&&n<r){for(let t of o)if(t.getAttribute("href")===`#${e.id}`)if(document.getElementsByClassName("navigationEvent").length>0)for(let t of document.getElementsByClassName("navigationEvent"))t.getAttribute("href")!==`#${e.id}`&&t.classList.remove("navigationEvent");else t.classList.add("navigationEvent");"download"===e.id&&(s.style.transform="rotate(360deg)")}else for(let t of o)t.classList.contains("navigationEvent")&&t.getAttribute("href")===`#${e.id}`&&t.classList.remove("navigationEvent")}const i=document.getElementsByClassName("headerContent")[0],l=document.getElementById("header"),c=document.getElementById("features"),r=document.getElementById("works"),d=document.getElementById("teams"),u=document.getElementById("testimonials"),m=document.getElementById("download");function f(){i.style.padding="25px 0",i.style.borderBottom="none",l.style.backgroundColor="#292C47"}window.onscroll=()=>{window.scrollY>20?f():(i.style.padding="40px 0",i.style.borderBottom="1px solid rgba(255, 255, 255, 0.15)",l.style.background="none"),a(c),a(r),a(d),a(u),a(m)},window.onload=()=>{window.scrollY>20&&f()};n(2);async function g(e,t){try{return(await fetch(e,t)).json()}catch(e){console.error(e)}}const p=new Map;p.set("facebook.com","fab fa-facebook-f"),p.set("twitter.com","fab fa-twitter"),p.set("linkedin.com","fab fa-linkedin-in"),p.set("google.com","fab fa-google-plus-g"),p.set("reddit.com","fas fa-basketball-ball");function v(e){const t=document.createElement("div");t.classList.add("teamCard");const n=function(e){const t=document.createElement("div");t.classList.add("teamImageContainer");const n=new Image;return n.src=e.avatar,n.alt="avatar",n.onerror=()=>{n.src="assets/images/anonim.png",n.style.border="1px solid black"},t.appendChild(n),t}(e);t.appendChild(n);const o=function(e){const t=document.createElement("h4");return t.classList.add("fullName"),t.innerText=e.name||"",t}(e);t.appendChild(o);const s=function(e){const t=document.createElement("h5");return t.classList.add("teamRole"),t.innerText=e.position||"",t}(e);t.appendChild(s);const a=function(e){const t=document.createElement("p");return t.classList.add("teamDescription"),t.innerText=e.description||"",t}(e);t.appendChild(a);const i=function(e){const t=document.createElement("div");t.classList.add("socialNetworkList"),Array.isArray(e.contacts)&&e.contacts.forEach(e=>{if(p.get(new URL(e).host)){const n=document.createElement("a");n.href=e;const o=document.createElement("i");n.appendChild(o),t.appendChild(n),o.setAttribute("class",`${p.get(new URL(e).host)}`)}});return t}(e);return t.appendChild(i),t}const y=document.getElementsByClassName("teamsContent")[0];g("./data/employees.json").then(e=>{e.forEach(e=>{y.appendChild(v(e))})});const w=document.getElementsByClassName("slideContainer")[0],h=document.getElementsByClassName("slideInformationContainer")[0],b=document.getElementsByClassName("slidesControllerContainer")[0];let C=0,E=1,L=!1,B=!1;function k(e){!function(e){const t=new Image;t.classList.add("slide"),t.src=e.href,t.onerror=()=>{t.src="assets/images/noSlideImage.jpg"},t.alt="slide",t.setAttribute("numSlide",`${++C}`),1===C&&t.classList.add("active");w.appendChild(t)}(e),function(e){const t=document.createElement("p");t.classList.add("slideDescription"),t.innerText=e.description||"",t.setAttribute("numSlide",`${C}`),1===C&&t.classList.add("active");h.appendChild(t)}(e),function(e){const t=document.createElement("h6");t.classList.add("author"),t.innerText=e.name||"",t.setAttribute("numSlide",`${C}`),1===C&&t.classList.add("active");h.appendChild(t)}(e),function(){const e=document.createElement("div");e.classList.add("slideController"),e.setAttribute("numSlide",`${C}`),b.appendChild(e),1===C&&e.classList.add("activeSlide");!function(){const e=document.getElementsByClassName("slideController");for(let t of e)t.onclick=()=>{const e=t.getAttribute("numSlide");E=+t.getAttribute("numSlide"),N(e),L=!0}}()}()}function N(e){!function(){const e=document.getElementsByClassName("active"),t=document.getElementsByClassName("activeSlide")[0];e.item(0).classList.remove("active"),e.item(0).classList.remove("active"),e.item(0).classList.remove("active"),t.classList.remove("activeSlide")}(),function(e){const t=document.querySelectorAll(`[numSlide="${e}"]`);for(let e of t)e.classList.contains("slideController")?e.classList.add("activeSlide"):e.classList.add("active")}(e)}const S=document.getElementById("testimonials");let O=!0;g("./data/slider.json").then(e=>{e.forEach(e=>{C<7&&k(e)})}),S.onmouseover=function(e){e.stopPropagation(),O=!1},S.onmouseleave=function(e){var t;e.stopPropagation(),O=!0,t=E,B||(setInterval(()=>{O&&(E!==t&&L&&(t=E,L=!1),t>=C&&(t=0),N(++t))},5e3),B=!0)};n(3)}]);