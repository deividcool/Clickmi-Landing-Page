import{u as m}from"./index.1dca32fc.js";import{s as r,a as h}from"./store.ac37cfed.js";import{_ as k}from"./_plugin-vue_export-helper.c27b6911.js";import{u as g}from"./index.d9178191.js";import{r as w,o as y,w as _,a as B,c as T}from"./runtime-core.esm-bundler.10e5df62.js";const q={__name:"Init",setup(E,{expose:d}){d();const{width:i}=m(),s=w(!1);y(()=>{const c=document.documentElement,S=document.getElementsByTagName("html")[0],b=new Date().getTime();window.onload=function(){const e=new Date().getTime()-b;document.documentElement.setAttribute("data-speed",Math.round(e/1e3))};const v=navigator.userAgent;/iPad|iPhone|iPod/.test(v)&&document.documentElement.setAttribute("data-ios",1),setTimeout(()=>{S.style["scroll-behavior"]="smooth"},500);let p=0,f=!1;function u(t,e){c.setAttribute(t,String(e))}const x=g(()=>{const t=window.scrollY,e=t-p,o=Math.sign(e)===-1,a=t+window.innerHeight>document.body.offsetHeight-100,n=t<100;(e<-15||e>15)&&(f=o),u("data-is-scrolling-up",f),u("data-is-bottom",a),u("data-is-top",n),p=t},20);window.addEventListener("scroll",()=>x(),{passive:!0});const A=document.querySelectorAll(".parallax-wrap");document.documentElement.dataset.ios||A.forEach(t=>{t.querySelectorAll(".parallax").forEach(o=>o.animate({transform:["none","translateY(50%)"]},{fill:"both",timeline:new ViewTimeline({subject:t}),rangeStart:{rangeName:"exit",offset:CSS.percent(5)},rangeEnd:{rangeName:"exit",offset:CSS.percent(100)}}))}),document.querySelectorAll("[href='#sign-in']").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),r.set({show:!0,type:"auth",link:"auth",auth:"sign_in"})})}),document.querySelectorAll("[href='#sign-up']").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),r.set({show:!0,type:"auth",link:"auth",auth:"sign_up"})})}),document.querySelectorAll("[data-dialog]").forEach(t=>{const e=t.dataset.dialog,o=t.dataset.type;document.querySelectorAll(`[href='#${e}']`).forEach(n=>{n.addEventListener("click",D=>{D.preventDefault(),r.set({show:!0,link:e,type:o})})})}),document.querySelectorAll("[data-popup]").forEach(t=>{const e=t.dataset.popup;document.querySelectorAll(`[href='#${e}']`).forEach(a=>{a.addEventListener("click",n=>{n.preventDefault(),h.set({show:!0,type:e})})})})}),_(i,c=>{s.value||(console.log(`%c ♻️🔋+ 🧠👷🏽+ 🗜 = 🚀🍃🌐
%cThis site has a low carbon footprint 
%c🪙CREDITS:
%cTheme based on StarFunnel 🌌
%cby: https://unfolding.io`,"font-family:Verdana; font-size: 20px; color: #2A4D47; font-weight:bold; padding: 5px 0; opacity: 0.5; ","font-family:Verdana; font-size: 25px; color: #2A4D47; font-weight:bold; padding: 5px 0; ","font-family:Verdana; font-size:16px; color: #2A4D47; font-weight:bold;  padding: 5px 0; ","font-family:Verdana; font-size:12px; color: #2A4D47; padding: 2px 0; ","font-family:Verdana; font-size:12px; color: #2A4D47; padding: 2px 0; "),s.value=!0)});const l={width:i,shown:s,watch:_,ref:w,onMounted:y,get useWindowSize(){return m},get useDebounceFn(){return g},get showPopup(){return h},get showDialog(){return r}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},z={class:"hide hidden"};function P(E,d,i,s,l,c){return B(),T("div",z)}const j=k(q,[["render",P]]);export{j as default};
