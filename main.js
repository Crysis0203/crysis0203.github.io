!function(e){function t(t){for(var o,i,l=t[0],c=t[1],r=t[2],u=0,m=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);m.length;)m.shift()();return s.push.apply(s,r||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={0:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var r=0;r<l.length;r++)t(l[r]);var d=c;s.push([0,1]),n()}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4),n(5),n(6),n(7)},,,function(e,t){const n=document.getElementsByClassName("headerContent")[0],o=document.getElementById("header"),a=document.querySelectorAll(".navigation>ul>li>a"),s=document.getElementById("features"),i=document.getElementById("works"),l=document.getElementById("teams"),c=document.getElementById("testimonials"),r=document.getElementById("download"),d=document.querySelector("#download>a");function u(e){const t=window.pageYOffset+e.getBoundingClientRect().top,n=window.pageXOffset+e.getBoundingClientRect().left,o=window.pageXOffset+e.getBoundingClientRect().right,s=window.pageYOffset+e.getBoundingClientRect().bottom,i=window.pageYOffset,l=window.pageXOffset,c=window.pageXOffset+document.documentElement.clientWidth,r=window.pageYOffset+document.documentElement.clientHeight;if(s-350>i&&t+650<r&&o>l&&n<c){for(let t of a)if(t.getAttribute("href")===`#${e.id}`)if(document.getElementsByClassName("navigationEvent").length>0)for(let t of document.getElementsByClassName("navigationEvent"))t.getAttribute("href")!==`#${e.id}`&&t.classList.remove("navigationEvent");else t.classList.add("navigationEvent");"download"===e.id&&(d.style.transform="rotate(360deg)")}else for(let t of a)t.classList.contains("navigationEvent")&&t.getAttribute("href")===`#${e.id}`&&t.classList.remove("navigationEvent")}window.onscroll=()=>{window.scrollY>20?(n.style.padding="25px 0",n.style.borderBottom="none",o.style.backgroundColor="#292C47"):(n.style.padding="40px 0",n.style.borderBottom="1px solid rgba(255, 255, 255, 0.15)",o.style.background="none"),u(s),u(i),u(l),u(c),u(r)}},function(e,t){const n=document.getElementsByClassName("mobileNavigationButton")[0],o=document.getElementsByClassName("mobileNavigationContainer")[0];let a=!1;function s(){n.classList.remove("mobileNavigationButtonRotate"),o.style.display="none",a=!1}n.onclick=function(e){e.stopPropagation(),a?s():(n.classList.add("mobileNavigationButtonRotate"),o.style.display="flex",a=!0,o.addEventListener("click",(function(e){"A"===e.target.tagName&&s()})))},screen.orientation.onchange=function(){screen.width>1024&&(o.style.display="none")}},function(e,t){const n=document.getElementsByClassName("teamsContent")[0],o=Object.freeze({FACEBOOK:"FACEBOOK",TWITTER:"TWITTER",LINKED_IN:"LINKED_IN",GOOGLE_PLUS:"GOOGLE_PLUS",REDDIT:"REDDIT"});fetch("./data/employees.json").then(e=>e.json()).then(e=>{e.forEach(e=>{n.appendChild(function(e){const t=document.createElement("div");t.classList.add("teamCard");const n=function(e){const t=document.createElement("div");t.classList.add("teamImageContainer");const n=new Image;return n.src=e.avatar,n.alt="avatar",t.appendChild(n),t}(e);t.appendChild(n);const a=function(e){const t=document.createElement("h4");return t.classList.add("fullName"),t.innerText=e.name,t}(e);t.appendChild(a);const s=function(e){const t=document.createElement("h5");return t.classList.add("teamRole"),t.innerText=e.position,t}(e);t.appendChild(s);const i=function(e){const t=document.createElement("p");return t.classList.add("teamDescription"),t.innerText=e.description,t}(e);t.appendChild(i);const l=function(e){const t=document.createElement("div");return t.classList.add("socialNetworkList"),e.contacts.forEach(e=>{if(e.type===o.FACEBOOK){const n=document.createElement("a");n.href=e.href;const o=document.createElement("i");o.setAttribute("class","fab fa-facebook-f"),n.appendChild(o),t.appendChild(n)}if(e.type===o.TWITTER){const n=document.createElement("a");n.href=e.href;const o=document.createElement("i");o.setAttribute("class","fab fa-twitter"),n.appendChild(o),t.appendChild(n)}if(e.type===o.LINKED_IN){const n=document.createElement("a");n.href=e.href;const o=document.createElement("i");o.setAttribute("class","fab fa-linkedin-in"),n.appendChild(o),t.appendChild(n)}if(e.type===o.GOOGLE_PLUS){const n=document.createElement("a");n.href=e.href;const o=document.createElement("i");o.setAttribute("class","fab fa-google-plus-g"),n.appendChild(o),t.appendChild(n)}if(e.type===o.REDDIT){const n=document.createElement("a");n.href=e.href;const o=document.createElement("i");o.setAttribute("class","fas fa-basketball-ball"),n.appendChild(o),t.appendChild(n)}}),t}(e);return t.appendChild(l),t}(e))})})},function(e,t){const n=[],o=document.getElementsByClassName("slide")[0],a=document.getElementsByClassName("slideDescription")[0],s=document.getElementsByClassName("author")[0],i=document.getElementsByClassName("slidesControllerContainer")[0],l=document.getElementById("testimonials");let c=0;function r(e){e--,o.src=n[e].href,a.innerText=n[e].description,s.innerText=n[e].name;const t=document.getElementsByClassName("slideController");for(let n of t)n.classList.remove("activeSlide"),+n.getAttribute("numSlide")===e&&n.classList.add("activeSlide")}fetch("./data/slider.json").then(e=>e.json()).then(e=>{e.forEach(e=>{n.push(e),function(){const e=document.createElement("div");e.classList.add("slideController"),e.setAttribute("numSlide",`${c++}`),i.appendChild(e),function(){const e=document.getElementsByClassName("slideController");for(let t of e)t.onclick=()=>{r(+t.getAttribute("numSlide")+1)}}()}(),r(1)})});let d=!1,u=!0;l.onmouseover=function(e){e.stopPropagation(),u=!1},l.onmouseleave=function(e){var t;e.stopPropagation(),u=!0,t=1,d||(setInterval(()=>{u&&(t===n.length&&(t=0),r(++t))},5e3),d=!0)}},function(e,t){const n=document.getElementsByClassName("work");for(let e of n)e.addEventListener("click",(function(t){t.stopPropagation(),document.getElementsByClassName("imageOfWork")[0].src=`${e.querySelector("img").src}`,o()}));function o(){document.body.style.overflow="hidden";const e=document.getElementsByClassName("workClick")[0];e.style.display="flex",e.style.overflow="scroll",document.getElementsByClassName("closeWork ")[0].onclick=a,e.addEventListener("click",(function(t){t.stopPropagation(),e===t.target&&a()}))}function a(){document.body.style.overflow="unset",document.getElementsByClassName("workClick")[0].style.display="none"}}]);