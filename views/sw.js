if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const o=s=>i(s,n),u={module:{uri:n},exports:t,require:o};e[n]=Promise.all(l.map((s=>u[s]||o(s)))).then((s=>(r(...s),t)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AppEmptyState.0bd80ed8.js",revision:null},{url:"assets/AppEmptyState.ca335003.css",revision:null},{url:"assets/AppNetworkError.17e2a553.js",revision:null},{url:"assets/AppNetworkError.703c7af2.css",revision:null},{url:"assets/CreateEmailView.9ec589a6.js",revision:null},{url:"assets/CreateEmailView.f2042f33.css",revision:null},{url:"assets/EmailIndexView.80df0651.js",revision:null},{url:"assets/EmailView.4480ec03.css",revision:null},{url:"assets/EmailView.83734fe0.js",revision:null},{url:"assets/index.568f329e.css",revision:null},{url:"assets/index.686b4ede.js",revision:null},{url:"assets/NotFoundView.6ff6b9d3.css",revision:null},{url:"assets/NotFoundView.72f633d7.js",revision:null},{url:"assets/NotificationView.46eaa65d.js",revision:null},{url:"assets/ProjectsView.1d53b205.css",revision:null},{url:"assets/ProjectsView.76760aea.js",revision:null},{url:"assets/SettingsView.7b150c91.js",revision:null},{url:"assets/TodoView.7740782a.css",revision:null},{url:"assets/TodoView.a678943c.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"18f5bf6813694144ae6f0d57b9ea9dbd"},{url:"manifest.webmanifest",revision:"2278a49869c66e44212511dd80370d3c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
