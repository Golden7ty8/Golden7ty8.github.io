import{S as y,P as b,W as M,T as S,M as d,a as i,b as z,A as L,c as T,G,O as H,d as s,t as w,B as P,e as A,f,g as v}from"./Alastair Child F Icon 8-BSIk0uzW.js";const e=new y,t=new b(75,window.innerWidth/window.innerHeight,.1,1e3),a=new M({canvas:document.querySelector("#bg")});a.setPixelRatio(window.devicePixelRatio);a.setSize(window.innerWidth,window.innerHeight);t.position.setZ(30);a.render(e,t);const B=new S(10,3,16,100),C=new d({color:16737095}),r=new i(B,C);e.add(r);const l=new z(16777215);l.position.set(5,5,5);const F=new L(16777215);e.add(l,F);const R=new T(l),W=new G(200,50);e.add(R,W);const q=new H(t,a.domElement);function E(){const o=new f(.25),u=new d({color:16777215}),m=new i(o,u),[g,x,h]=Array(3).fill().map(()=>v.randFloatSpread(100));m.position.set(g,x,h),e.add(m)}Array(200).fill().forEach(E);const O=new s().load(w);e.background=O;const j=new s().load(w),c=new i(new P(3,3,3),new A({map:j}));e.add(c);const k=new s().load(w),I=new s().load("normal.jpg"),n=new i(new f(3,32,32),new d({map:k,normalMap:I}));e.add(n);n.position.z=30;n.position.setX(-10);function U(){const o=document.body.getBoundingClientRect().top;n.rotation.x+=.05,n.rotation.y+=.075,n.rotation.z+=.05,c.rotation.y+=.01,c.rotation.z+=.01,t.position.z=o*-.01,t.position.x=o*-2e-4,t.position.y=o*-2e-4}document.body.onscroll=U;function p(){requestAnimationFrame(p),r.rotation.x+=.01,r.rotation.y+=.005,r.rotation.z+=.01,q.update(),a.render(e,t)}p();
