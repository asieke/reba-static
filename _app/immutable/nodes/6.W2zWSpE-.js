import{s as X,n as j,r as Y,b as L,o as J,f as at,t as At,h as Ut}from"../chunks/scheduler.CRj-FdYT.js";import{S as F,i as K,h as p,s as N,n as W,j as k,o as T,k as U,a as V,f as w,p as M,l as b,d as H,q as v,u as tt,v as A,y as $,G as ot,r as ct,H as et,c as lt,b as Bt,m as nt,t as G,x as it,e as Z,g as st,z as ut,w as rt,A as ht,B as Ot,C as Ht}from"../chunks/index.C6ozi9ya.js";import{u as z,s as Q,e as R}from"../chunks/stores.Bnxv-Xxq.js";import{S as Pt,I as zt,G as jt,N as Rt,E as Wt,P as Mt,a as qt,f as ft}from"../chunks/Marital.svelte_svelte_type_style_lang.D8vK4RGU.js";function dt(n,e,t){const l=n.slice();return l[17]=e[t],l[19]=t,l}function vt(n){let e,t=R(n[5]),l=[];for(let i=0;i<t.length;i+=1)l[i]=_t(dt(n,t,i));return{c(){e=p("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=k(i,"DIV",{class:!0});var f=T(e);for(let a=0;a<l.length;a+=1)l[a].l(f);f.forEach(w),this.h()},h(){b(e,"class","absolute top-[68px] w-full border-[1px] bg-white text-sm text-fidelity-neutral-600")},m(i,f){H(i,e,f);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p(i,f){if(f&352){t=R(i[5]);let a;for(a=0;a<t.length;a+=1){const m=dt(i,t,a);l[a]?l[a].p(m,f):(l[a]=_t(m),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},d(i){i&&w(e),$(l,i)}}}function _t(n){let e,t=n[17]+"",l,i,f,a;function m(){return n[13](n[19])}return{c(){e=p("button"),l=W(t),i=N(),this.h()},l(o){e=k(o,"BUTTON",{class:!0,style:!0});var s=T(e);l=M(s,t),i=V(s),s.forEach(w),this.h()},h(){b(e,"class","w-full text-left p-2 border-fidelity-neutral-200 cursor-pointer rounded-none hover:bg-fidelity-neutral-200"),ot(e,"background-color",n[6]===n[19]?"rgb(230 228 225)":"")},m(o,s){H(o,e,s),v(e,l),v(e,i),f||(a=A(e,"click",m),f=!0)},p(o,s){n=o,s&32&&t!==(t=n[17]+"")&&ct(l,t),s&64&&ot(e,"background-color",n[6]===n[19]?"rgb(230 228 225)":"")},d(o){o&&w(e),f=!1,a()}}}function Gt(n){let e,t,l,i="What's your Address?",f,a,m="This will help us give you personalized tax and financial guidance",o,s,g,_,c,x,C,h="Back",D,S,I,y,r,d=n[5].length>0&&vt(n);return{c(){e=p("div"),t=p("div"),l=p("h1"),l.textContent=i,f=N(),a=p("p"),a.textContent=m,o=N(),s=p("div"),g=p("textarea"),_=N(),d&&d.c(),c=N(),x=p("div"),C=p("button"),C.textContent=h,D=N(),S=p("button"),I=W("Next"),this.h()},l(E){e=k(E,"DIV",{class:!0});var u=T(e);t=k(u,"DIV",{class:!0});var B=T(t);l=k(B,"H1",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-23if35"&&(l.textContent=i),f=V(B),a=k(B,"P",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-1hhgmn0"&&(a.textContent=m),o=V(B),s=k(B,"DIV",{class:!0});var O=T(s);g=k(O,"TEXTAREA",{class:!0,rows:!0}),T(g).forEach(w),_=V(O),d&&d.l(O),O.forEach(w),c=V(B),x=k(B,"DIV",{class:!0});var P=T(x);C=k(P,"BUTTON",{class:!0,"data-svelte-h":!0}),U(C)!=="svelte-1admezx"&&(C.textContent=h),D=V(P),S=k(P,"BUTTON",{class:!0});var q=T(S);I=M(q,"Next"),q.forEach(w),P.forEach(w),B.forEach(w),u.forEach(w),this.h()},h(){b(l,"class","font-light"),b(a,"class","text-fidelity-neutral-500 my-3"),b(g,"class"," svelte-nz8rex"),b(g,"rows","1"),b(s,"class","relative"),b(C,"class","back"),b(S,"class","next"),S.disabled=n[7],b(x,"class","grid grid-cols-2 w-3/4 mx-auto pt-8 gap-4"),b(t,"class","w-96 h-1/2 mx-auto"),b(e,"class","h-[calc(100vh-112px)] pt-[10vh]")},m(E,u){H(E,e,u),v(e,t),v(t,l),v(t,f),v(t,a),v(t,o),v(t,s),v(s,g),n[10](g),tt(g,n[3].address),v(s,_),d&&d.m(s,null),v(t,c),v(t,x),v(x,C),v(x,D),v(x,S),v(S,I),y||(r=[A(g,"input",n[11]),A(g,"keyup",n[12]),A(g,"keydown",Ft),A(C,"click",n[14]),A(S,"click",n[15])],y=!0)},p(E,[u]){u&8&&tt(g,E[3].address),E[5].length>0?d?d.p(E,u):(d=vt(E),d.c(),d.m(s,null)):d&&(d.d(1),d=null),u&128&&(S.disabled=E[7])},i:j,o:j,d(E){E&&w(e),n[10](null),d&&d.d(),y=!1,Y(r)}}}const Xt="fc57a396dfef452cb85db04e17831c49",Ft=n=>n.key==="Enter"&&n.preventDefault();function Kt(n,e,t){let l,i;L(n,z,r=>t(3,i=r));let f,{back:a}=e,{next:m}=e,{changeStep:o=r=>{}}=e,s=new AbortController;J(()=>{Q.set(!0),f.focus(),window.scrollTo(0,0)});let g=[],_=0;const c=r=>{t(4,f.value=g[r],f),z.set({...i,address:g[r]}),t(5,g=[]),f.focus()},x=r=>{const d=f.value.trim(),E=`https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(d+" USA")}&lang=en&limit=5&format=json&apiKey=${Xt}`;if(r.key==="Enter"&&g.length>0){t(4,f.value=g[_],f),z.set({...i,address:g[_]}),t(5,g=[]),f.focus();return}if(r.key==="Enter"&&o(m),r.key==="ArrowDown"){t(6,_=_===g.length-1?0:_+1);return}if(r.key==="ArrowUp"){t(6,_=_===0?g.length-1:_-1);return}d.length>5?(s.abort(),s=new AbortController,fetch(E,{signal:s.signal}).then(u=>{if(!u.ok)throw new Error("Network response was not ok");return u.json()}).then(u=>{t(5,g=u.results.map(B=>B.formatted.replace(", United States of America","")))}).catch(u=>{u.name!=="AbortError"&&console.error("Fetch error:",u)})):t(5,g=[])};function C(r){at[r?"unshift":"push"](()=>{f=r,t(4,f)})}function h(){i.address=this.value,z.set(i)}const D=r=>x(r),S=r=>c(r),I=()=>o(a),y=()=>o(m);return n.$$set=r=>{"back"in r&&t(0,a=r.back),"next"in r&&t(1,m=r.next),"changeStep"in r&&t(2,o=r.changeStep)},n.$$.update=()=>{n.$$.dirty&8&&t(7,l=!i.address||i.address.length<=20)},[a,m,o,i,f,g,_,l,c,x,C,h,D,S,I,y]}class Yt extends F{constructor(e){super(),K(this,e,Kt,Gt,X,{back:0,next:1,changeStep:2})}}function mt(n,e,t){const l=n.slice();return l[9]=e[t].title,l[10]=e[t].description,l[12]=t,l}function gt(n){let e,t="✓";return{c(){e=p("p"),e.textContent=t,this.h()},l(l){e=k(l,"P",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-v9vf9h"&&(e.textContent=t),this.h()},h(){b(e,"class","text-white")},m(l,i){H(l,e,i)},d(l){l&&w(e)}}}function bt(n){let e,t,l,i=n[9]+"",f,a,m,o,s,g,_=n[10]+"",c,x,C,h,D=n[3].experience===n[9]&&gt();function S(){return n[6](n[9])}return{c(){e=p("button"),t=p("div"),l=p("h3"),f=W(i),a=N(),m=p("div"),D&&D.c(),s=N(),g=p("p"),c=W(_),x=N(),this.h()},l(I){e=k(I,"BUTTON",{class:!0});var y=T(e);t=k(y,"DIV",{class:!0});var r=T(t);l=k(r,"H3",{class:!0});var d=T(l);f=M(d,i),d.forEach(w),a=V(r),m=k(r,"DIV",{class:!0});var E=T(m);D&&D.l(E),E.forEach(w),r.forEach(w),s=V(y),g=k(y,"P",{class:!0});var u=T(g);c=M(u,_),u.forEach(w),x=V(y),y.forEach(w),this.h()},h(){b(l,"class","text-fidelity-neutral-900"),b(m,"class",o="circle "+(n[3].experience===n[9]?"circle-selected":"")+" svelte-lt1wgx"),b(t,"class","flex flex-row justify-between w-full"),b(g,"class","text-fidelity-neutral-800 text-xm mt-2 text-justify"),b(e,"class","experience svelte-lt1wgx")},m(I,y){H(I,e,y),v(e,t),v(t,l),v(l,f),v(t,a),v(t,m),D&&D.m(m,null),v(e,s),v(e,g),v(g,c),v(e,x),C||(h=A(e,"click",S),C=!0)},p(I,y){n=I,n[3].experience===n[9]?D||(D=gt(),D.c(),D.m(m,null)):D&&(D.d(1),D=null),y&8&&o!==(o="circle "+(n[3].experience===n[9]?"circle-selected":"")+" svelte-lt1wgx")&&b(m,"class",o)},d(I){I&&w(e),D&&D.d(),C=!1,h()}}}function Lt(n){let e,t,l,i="How would you rate your knowledge and experience with investing?",f,a,m,o,s,g="Back",_,c,x="Next",C,h,D=R(n[5]),S=[];for(let I=0;I<D.length;I+=1)S[I]=bt(mt(n,D,I));return{c(){e=p("div"),t=p("div"),l=p("h1"),l.textContent=i,f=N(),a=p("div");for(let I=0;I<S.length;I+=1)S[I].c();m=N(),o=p("div"),s=p("button"),s.textContent=g,_=N(),c=p("button"),c.textContent=x,this.h()},l(I){e=k(I,"DIV",{class:!0});var y=T(e);t=k(y,"DIV",{class:!0});var r=T(t);l=k(r,"H1",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-mr4xlr"&&(l.textContent=i),f=V(r),a=k(r,"DIV",{class:!0});var d=T(a);for(let u=0;u<S.length;u+=1)S[u].l(d);d.forEach(w),m=V(r),o=k(r,"DIV",{class:!0});var E=T(o);s=k(E,"BUTTON",{class:!0,"data-svelte-h":!0}),U(s)!=="svelte-1admezx"&&(s.textContent=g),_=V(E),c=k(E,"BUTTON",{class:!0,"data-svelte-h":!0}),U(c)!=="svelte-1c5kkhb"&&(c.textContent=x),E.forEach(w),r.forEach(w),y.forEach(w),this.h()},h(){b(l,"class","font-light text-center"),b(a,"class","flex flex-row gap-4 my-12"),b(s,"class","back"),b(c,"class","next"),b(o,"class","grid grid-cols-2 w-3/4 mx-auto gap-4"),b(t,"class","h-1/2 w-[700px] mx-auto"),b(e,"class","h-[calc(100vh-112px)] pt-[10vh]")},m(I,y){H(I,e,y),v(e,t),v(t,l),v(t,f),v(t,a);for(let r=0;r<S.length;r+=1)S[r]&&S[r].m(a,null);v(t,m),v(t,o),v(o,s),v(o,_),v(o,c),C||(h=[A(s,"click",n[7]),A(c,"click",n[8])],C=!0)},p(I,[y]){if(y&56){D=R(I[5]);let r;for(r=0;r<D.length;r+=1){const d=mt(I,D,r);S[r]?S[r].p(d,y):(S[r]=bt(d),S[r].c(),S[r].m(a,null))}for(;r<S.length;r+=1)S[r].d(1);S.length=D.length}},i:j,o:j,d(I){I&&w(e),$(S,I),C=!1,Y(h)}}}function Jt(n,e,t){let l;L(n,z,c=>t(3,l=c));let{back:i}=e,{next:f}=e,{changeStep:a=c=>{}}=e;J(()=>{Q.set(!0),window.scrollTo(0,0)});const m=c=>{z.update(x=>(x.experience=c,x))};let o=[{title:"Beginner",description:"I'm new to investing and need basic guidance."},{title:"Intermediate",description:"I have some experience but still have a lot to learn."},{title:"Advanced",description:"I'm comfortable making my own investment decisions."}];const s=c=>m(c),g=()=>a(i),_=()=>a(f);return n.$$set=c=>{"back"in c&&t(0,i=c.back),"next"in c&&t(1,f=c.next),"changeStep"in c&&t(2,a=c.changeStep)},[i,f,a,l,m,o,s,g,_]}class Qt extends F{constructor(e){super(),K(this,e,Jt,Lt,X,{back:0,next:1,changeStep:2})}}function xt(n,e,t){const l=n.slice();return l[10]=e[t],l[12]=t,l}function pt(n){let e,t=n[10].label+"",l,i,f,a;function m(){return n[7](n[12])}return{c(){e=p("button"),l=W(t),i=N(),this.h()},l(o){e=k(o,"BUTTON",{class:!0});var s=T(e);l=M(s,t),i=V(s),s.forEach(w),this.h()},h(){b(e,"class","grid"),et(e,"selected",n[10].status)},m(o,s){H(o,e,s),v(e,l),v(e,i),f||(a=A(e,"click",m),f=!0)},p(o,s){n=o,s&8&&t!==(t=n[10].label+"")&&ct(l,t),s&8&&et(e,"selected",n[10].status)},d(o){o&&w(e),f=!1,a()}}}function Zt(n){let e,t,l,i="What are your current Investments?",f,a,m="This helps us understand more about your complete financial picture",o,s,g,_,c,x="Back",C,h,D,S,I,y=R(n[3]),r=[];for(let d=0;d<y.length;d+=1)r[d]=pt(xt(n,y,d));return{c(){e=p("div"),t=p("div"),l=p("h1"),l.textContent=i,f=N(),a=p("p"),a.textContent=m,o=N(),s=p("div");for(let d=0;d<r.length;d+=1)r[d].c();g=N(),_=p("div"),c=p("button"),c.textContent=x,C=N(),h=p("button"),D=W("Next"),this.h()},l(d){e=k(d,"DIV",{class:!0});var E=T(e);t=k(E,"DIV",{class:!0});var u=T(t);l=k(u,"H1",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-9oc6iq"&&(l.textContent=i),f=V(u),a=k(u,"P",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-ag0ipa"&&(a.textContent=m),o=V(u),s=k(u,"DIV",{class:!0});var B=T(s);for(let q=0;q<r.length;q+=1)r[q].l(B);B.forEach(w),g=V(u),_=k(u,"DIV",{class:!0});var O=T(_);c=k(O,"BUTTON",{class:!0,"data-svelte-h":!0}),U(c)!=="svelte-1admezx"&&(c.textContent=x),C=V(O),h=k(O,"BUTTON",{class:!0});var P=T(h);D=M(P,"Next"),P.forEach(w),O.forEach(w),u.forEach(w),E.forEach(w),this.h()},h(){b(l,"class","font-light"),b(a,"class","text-fidelity-neutral-500 my-8"),b(s,"class","flex justify-center items-center flex-wrap gap-4"),b(c,"class","back"),b(h,"class","next"),h.disabled=n[4],b(_,"class","grid grid-cols-2 w-3/4 mx-auto pt-8 gap-4"),b(t,"class","w-[700px] h-1/2 mx-auto text-center"),b(e,"class","h-[calc(100vh-112px)] pt-[5vh]")},m(d,E){H(d,e,E),v(e,t),v(t,l),v(t,f),v(t,a),v(t,o),v(t,s);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(s,null);v(t,g),v(t,_),v(_,c),v(_,C),v(_,h),v(h,D),S||(I=[A(c,"click",n[8]),A(h,"click",n[9])],S=!0)},p(d,[E]){if(E&40){y=R(d[3]);let u;for(u=0;u<y.length;u+=1){const B=xt(d,y,u);r[u]?r[u].p(B,E):(r[u]=pt(B),r[u].c(),r[u].m(s,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=y.length}E&16&&(h.disabled=d[4])},i:j,o:j,d(d){d&&w(e),$(r,d),S=!1,Y(I)}}}function $t(n,e,t){let l,i;L(n,z,x=>t(6,i=x));let{back:f}=e,{next:a}=e,{changeStep:m=x=>{}}=e,o=[{label:"Checking Account",status:0},{label:"Savings Account / CDs",status:0},{label:"Company Sponsored 401k",status:0},{label:"Traditional IRA",status:0},{label:"Roth IRA",status:0},{label:"Crypto Currency",status:0},{label:"Brokerage Account",status:0},{label:"Mortgage",status:0},{label:"HSA (Health Savings Account)",status:0},{label:"529 College Savings Plan",status:0},{label:"Other College Savings Plan",status:0}].map(x=>({label:x.label,status:i.investments&&i.investments.includes(x.label)?1:0}));J(()=>{Q.set(!0),window.scrollTo(0,0)});const s=x=>{t(3,o=o.map((C,h)=>x===h?{...C,status:C.status?0:1}:C)),z.update(C=>(C.investments=o.filter(h=>h.status).map(h=>h.label),C))},g=x=>s(x),_=()=>m(f),c=()=>m(a);return n.$$set=x=>{"back"in x&&t(0,f=x.back),"next"in x&&t(1,a=x.next),"changeStep"in x&&t(2,m=x.changeStep)},n.$$.update=()=>{n.$$.dirty&64&&t(4,l=!i.investments||i.investments.length===0)},[f,a,m,o,l,s,i,g,_,c]}class te extends F{constructor(e){super(),K(this,e,$t,Zt,X,{back:0,next:1,changeStep:2})}}function kt(n,e,t){const l=n.slice();return l[9]=e[t].title,l[11]=t,l}function wt(n){let e,t="✓";return{c(){e=p("p"),e.textContent=t,this.h()},l(l){e=k(l,"P",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-v9vf9h"&&(e.textContent=t),this.h()},h(){b(e,"class","text-white")},m(l,i){H(l,e,i)},d(l){l&&w(e)}}}function Ct(n){let e,t,l,i=n[9]+"",f,a,m,o,s,g,_,c=n[3].debt===n[9]&&wt();function x(){return n[6](n[9])}return{c(){e=p("button"),t=p("div"),l=p("h4"),f=W(i),a=N(),m=p("div"),c&&c.c(),s=N(),this.h()},l(C){e=k(C,"BUTTON",{class:!0});var h=T(e);t=k(h,"DIV",{class:!0});var D=T(t);l=k(D,"H4",{class:!0});var S=T(l);f=M(S,i),S.forEach(w),a=V(D),m=k(D,"DIV",{class:!0});var I=T(m);c&&c.l(I),I.forEach(w),D.forEach(w),s=V(h),h.forEach(w),this.h()},h(){b(l,"class","text-fidelity-neutral-900 max-w-[85%] text-left font-semibold"),b(m,"class",o="circle "+(n[3].debt===n[9]?"circle-selected":"")+" svelte-xmxkbl"),b(t,"class","flex flex-row justify-between w-full"),b(e,"class","experience svelte-xmxkbl")},m(C,h){H(C,e,h),v(e,t),v(t,l),v(l,f),v(t,a),v(t,m),c&&c.m(m,null),v(e,s),g||(_=A(e,"click",x),g=!0)},p(C,h){n=C,n[3].debt===n[9]?c||(c=wt(),c.c(),c.m(m,null)):c&&(c.d(1),c=null),h&8&&o!==(o="circle "+(n[3].debt===n[9]?"circle-selected":"")+" svelte-xmxkbl")&&b(m,"class",o)},d(C){C&&w(e),c&&c.d(),g=!1,_()}}}function ee(n){let e,t,l,i="Do you have any debt?",f,a,m="We're here to offer guidance in managing your financial obligations.",o,s,g,_,c,x="Back",C,h,D="Next",S,I,y=R(n[5]),r=[];for(let d=0;d<y.length;d+=1)r[d]=Ct(kt(n,y,d));return{c(){e=p("div"),t=p("div"),l=p("h1"),l.textContent=i,f=N(),a=p("p"),a.textContent=m,o=N(),s=p("div");for(let d=0;d<r.length;d+=1)r[d].c();g=N(),_=p("div"),c=p("button"),c.textContent=x,C=N(),h=p("button"),h.textContent=D,this.h()},l(d){e=k(d,"DIV",{class:!0});var E=T(e);t=k(E,"DIV",{class:!0});var u=T(t);l=k(u,"H1",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-wfyzn2"&&(l.textContent=i),f=V(u),a=k(u,"P",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-10qz6fh"&&(a.textContent=m),o=V(u),s=k(u,"DIV",{class:!0});var B=T(s);for(let P=0;P<r.length;P+=1)r[P].l(B);B.forEach(w),g=V(u),_=k(u,"DIV",{class:!0});var O=T(_);c=k(O,"BUTTON",{class:!0,"data-svelte-h":!0}),U(c)!=="svelte-1admezx"&&(c.textContent=x),C=V(O),h=k(O,"BUTTON",{class:!0,"data-svelte-h":!0}),U(h)!=="svelte-1c5kkhb"&&(h.textContent=D),O.forEach(w),u.forEach(w),E.forEach(w),this.h()},h(){b(l,"class","font-light text-center"),b(a,"class","text-fidelity-neutral-500 my-3"),b(s,"class","flex flex-row gap-4 my-12"),b(c,"class","back"),b(h,"class","next"),b(_,"class","grid grid-cols-2 w-3/4 mx-auto gap-4"),b(t,"class","h-1/2 w-[700px] mx-auto"),b(e,"class","h-[calc(100vh-112px)] pt-[10vh]")},m(d,E){H(d,e,E),v(e,t),v(t,l),v(t,f),v(t,a),v(t,o),v(t,s);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(s,null);v(t,g),v(t,_),v(_,c),v(_,C),v(_,h),S||(I=[A(c,"click",n[7]),A(h,"click",n[8])],S=!0)},p(d,[E]){if(E&56){y=R(d[5]);let u;for(u=0;u<y.length;u+=1){const B=kt(d,y,u);r[u]?r[u].p(B,E):(r[u]=Ct(B),r[u].c(),r[u].m(s,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=y.length}},i:j,o:j,d(d){d&&w(e),$(r,d),S=!1,Y(I)}}}function le(n,e,t){let l;L(n,z,c=>t(3,l=c));let{back:i}=e,{next:f}=e,{changeStep:a=c=>{}}=e;J(()=>{Q.set(!0),window.scrollTo(0,0)});const m=c=>{z.update(x=>(x.debt=c,x))};let o=[{title:"Yes"},{title:"Yes, but I'm not worried about it"},{title:"No"}];const s=c=>m(c),g=()=>a(i),_=()=>a(f);return n.$$set=c=>{"back"in c&&t(0,i=c.back),"next"in c&&t(1,f=c.next),"changeStep"in c&&t(2,a=c.changeStep)},[i,f,a,l,m,o,s,g,_]}class ne extends F{constructor(e){super(),K(this,e,le,ee,X,{back:0,next:1,changeStep:2})}}function yt(n,e,t){const l=n.slice();return l[10]=e[t],l[12]=t,l}function Et(n){let e,t=n[10].label+"",l,i,f,a;function m(){return n[7](n[12])}return{c(){e=p("button"),l=W(t),i=N(),this.h()},l(o){e=k(o,"BUTTON",{class:!0});var s=T(e);l=M(s,t),i=V(s),s.forEach(w),this.h()},h(){b(e,"class","grid"),et(e,"selected",n[10].status)},m(o,s){H(o,e,s),v(e,l),v(e,i),f||(a=A(e,"click",m),f=!0)},p(o,s){n=o,s&8&&t!==(t=n[10].label+"")&&ct(l,t),s&8&&et(e,"selected",n[10].status)},d(o){o&&w(e),f=!1,a()}}}function se(n){let e,t,l,i="What are your hopes and dreams for the future, both personally and financially?",f,a,m="Select all that matter to you and your family.",o,s,g,_,c,x="Back",C,h,D,S,I,y=R(n[3]),r=[];for(let d=0;d<y.length;d+=1)r[d]=Et(yt(n,y,d));return{c(){e=p("div"),t=p("div"),l=p("h1"),l.textContent=i,f=N(),a=p("p"),a.textContent=m,o=N(),s=p("div");for(let d=0;d<r.length;d+=1)r[d].c();g=N(),_=p("div"),c=p("button"),c.textContent=x,C=N(),h=p("button"),D=W("Next"),this.h()},l(d){e=k(d,"DIV",{class:!0});var E=T(e);t=k(E,"DIV",{class:!0});var u=T(t);l=k(u,"H1",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-75at5i"&&(l.textContent=i),f=V(u),a=k(u,"P",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-1yf88pr"&&(a.textContent=m),o=V(u),s=k(u,"DIV",{class:!0});var B=T(s);for(let q=0;q<r.length;q+=1)r[q].l(B);B.forEach(w),g=V(u),_=k(u,"DIV",{class:!0});var O=T(_);c=k(O,"BUTTON",{class:!0,"data-svelte-h":!0}),U(c)!=="svelte-1admezx"&&(c.textContent=x),C=V(O),h=k(O,"BUTTON",{class:!0});var P=T(h);D=M(P,"Next"),P.forEach(w),O.forEach(w),u.forEach(w),E.forEach(w),this.h()},h(){b(l,"class","font-light"),b(a,"class","text-fidelity-neutral-500 my-8"),b(s,"class","flex justify-center items-center flex-wrap gap-4"),b(c,"class","back"),b(h,"class","next"),h.disabled=n[4],b(_,"class","grid grid-cols-2 w-3/4 mx-auto pt-8 gap-4"),b(t,"class","w-[700px] h-1/2 mx-auto text-center"),b(e,"class","h-[calc(100vh-112px)] pt-[5vh]")},m(d,E){H(d,e,E),v(e,t),v(t,l),v(t,f),v(t,a),v(t,o),v(t,s);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(s,null);v(t,g),v(t,_),v(_,c),v(_,C),v(_,h),v(h,D),S||(I=[A(c,"click",n[8]),A(h,"click",n[9])],S=!0)},p(d,[E]){if(E&40){y=R(d[3]);let u;for(u=0;u<y.length;u+=1){const B=yt(d,y,u);r[u]?r[u].p(B,E):(r[u]=Et(B),r[u].c(),r[u].m(s,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=y.length}E&16&&(h.disabled=d[4])},i:j,o:j,d(d){d&&w(e),$(r,d),S=!1,Y(I)}}}function ae(n,e,t){let l,i;L(n,z,x=>t(6,i=x));let{back:f}=e,{next:a}=e,{changeStep:m=x=>{}}=e,o=[{label:"Retirement savings",status:0},{label:"Home ownership",status:0},{label:"Children's education",status:0},{label:"Financial independence",status:0},{label:"Wealth accumulation",status:0},{label:"Legacy planning",status:0},{label:"Philanthropy",status:0},{label:"Early retirement",status:0},{label:"Other",status:0}].map(x=>({label:x.label,status:i.hopes&&i.hopes.includes(x.label)?1:0}));J(()=>{Q.set(!0),window.scrollTo(0,0)});const s=x=>{t(3,o=o.map((C,h)=>x===h?{...C,status:C.status?0:1}:C)),z.update(C=>(C.hopes=o.filter(h=>h.status).map(h=>h.label),C))},g=x=>s(x),_=()=>m(f),c=()=>m(a);return n.$$set=x=>{"back"in x&&t(0,f=x.back),"next"in x&&t(1,a=x.next),"changeStep"in x&&t(2,m=x.changeStep)},n.$$.update=()=>{n.$$.dirty&64&&t(4,l=!i.hopes||i.hopes.length===0)},[f,a,m,o,l,s,i,g,_,c]}class ce extends F{constructor(e){super(),K(this,e,ae,se,X,{back:0,next:1,changeStep:2})}}function St(n,e,t){const l=n.slice();return l[9]=e[t].title,l[11]=t,l}function Dt(n){let e,t="✓";return{c(){e=p("p"),e.textContent=t,this.h()},l(l){e=k(l,"P",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-v9vf9h"&&(e.textContent=t),this.h()},h(){b(e,"class","text-white")},m(l,i){H(l,e,i)},d(l){l&&w(e)}}}function Tt(n){let e,t,l,i=n[9]+"",f,a,m,o,s,g,_,c=n[3].marital===n[9]&&Dt();function x(){return n[6](n[9])}return{c(){e=p("button"),t=p("div"),l=p("h4"),f=W(i),a=N(),m=p("div"),c&&c.c(),s=N(),this.h()},l(C){e=k(C,"BUTTON",{class:!0});var h=T(e);t=k(h,"DIV",{class:!0});var D=T(t);l=k(D,"H4",{class:!0});var S=T(l);f=M(S,i),S.forEach(w),a=V(D),m=k(D,"DIV",{class:!0});var I=T(m);c&&c.l(I),I.forEach(w),D.forEach(w),s=V(h),h.forEach(w),this.h()},h(){b(l,"class","text-fidelity-neutral-900 max-w-[85%] text-left font-semibold"),b(m,"class",o="circle "+(n[3].marital===n[9]?"circle-selected":"")+" svelte-xmxkbl"),b(t,"class","flex flex-row justify-between w-full"),b(e,"class","experience svelte-xmxkbl")},m(C,h){H(C,e,h),v(e,t),v(t,l),v(l,f),v(t,a),v(t,m),c&&c.m(m,null),v(e,s),g||(_=A(e,"click",x),g=!0)},p(C,h){n=C,n[3].marital===n[9]?c||(c=Dt(),c.c(),c.m(m,null)):c&&(c.d(1),c=null),h&8&&o!==(o="circle "+(n[3].marital===n[9]?"circle-selected":"")+" svelte-xmxkbl")&&b(m,"class",o)},d(C){C&&w(e),c&&c.d(),g=!1,_()}}}function ie(n){let e,t,l,i="What is your Marital Status?",f,a,m="Knowing your marital status helps us recommend the most tax efficient strategies for you.",o,s,g,_,c,x="Back",C,h,D="Next",S,I,y=R(n[5]),r=[];for(let d=0;d<y.length;d+=1)r[d]=Tt(St(n,y,d));return{c(){e=p("div"),t=p("div"),l=p("h1"),l.textContent=i,f=N(),a=p("p"),a.textContent=m,o=N(),s=p("div");for(let d=0;d<r.length;d+=1)r[d].c();g=N(),_=p("div"),c=p("button"),c.textContent=x,C=N(),h=p("button"),h.textContent=D,this.h()},l(d){e=k(d,"DIV",{class:!0});var E=T(e);t=k(E,"DIV",{class:!0});var u=T(t);l=k(u,"H1",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-1ym5xhi"&&(l.textContent=i),f=V(u),a=k(u,"P",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-9islv"&&(a.textContent=m),o=V(u),s=k(u,"DIV",{class:!0});var B=T(s);for(let P=0;P<r.length;P+=1)r[P].l(B);B.forEach(w),g=V(u),_=k(u,"DIV",{class:!0});var O=T(_);c=k(O,"BUTTON",{class:!0,"data-svelte-h":!0}),U(c)!=="svelte-1admezx"&&(c.textContent=x),C=V(O),h=k(O,"BUTTON",{class:!0,"data-svelte-h":!0}),U(h)!=="svelte-1c5kkhb"&&(h.textContent=D),O.forEach(w),u.forEach(w),E.forEach(w),this.h()},h(){b(l,"class","font-light text-center"),b(a,"class","text-fidelity-neutral-500 my-3"),b(s,"class","flex flex-row gap-4 my-12"),b(c,"class","back"),b(h,"class","next"),b(_,"class","grid grid-cols-2 w-3/4 mx-auto gap-4"),b(t,"class","h-1/2 w-[700px] mx-auto"),b(e,"class","h-[calc(100vh-112px)] pt-[10vh]")},m(d,E){H(d,e,E),v(e,t),v(t,l),v(t,f),v(t,a),v(t,o),v(t,s);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(s,null);v(t,g),v(t,_),v(_,c),v(_,C),v(_,h),S||(I=[A(c,"click",n[7]),A(h,"click",n[8])],S=!0)},p(d,[E]){if(E&56){y=R(d[5]);let u;for(u=0;u<y.length;u+=1){const B=St(d,y,u);r[u]?r[u].p(B,E):(r[u]=Tt(B),r[u].c(),r[u].m(s,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=y.length}},i:j,o:j,d(d){d&&w(e),$(r,d),S=!1,Y(I)}}}function re(n,e,t){let l;L(n,z,c=>t(3,l=c));let{back:i}=e,{next:f}=e,{changeStep:a=c=>{}}=e;J(()=>{Q.set(!0),window.scrollTo(0,0)});const m=c=>{z.update(x=>(x.marital=c,x))};let o=[{title:"Single"},{title:"Married"},{title:"Separated / Divorced"}];const s=c=>m(c),g=()=>a(i),_=()=>a(f);return n.$$set=c=>{"back"in c&&t(0,i=c.back),"next"in c&&t(1,f=c.next),"changeStep"in c&&t(2,a=c.changeStep)},[i,f,a,l,m,o,s,g,_]}class oe extends F{constructor(e){super(),K(this,e,re,ie,X,{back:0,next:1,changeStep:2})}}function ue(n){let e,t,l,i="How old are you?",f,a,m="Providing your age will help us personalize your financial goals and account recommendations",o,s,g,_,c,x="Back",C,h,D,S,I;return{c(){e=p("div"),t=p("div"),l=p("h1"),l.textContent=i,f=N(),a=p("p"),a.textContent=m,o=N(),s=p("textarea"),g=N(),_=p("div"),c=p("button"),c.textContent=x,C=N(),h=p("button"),D=W("Next"),this.h()},l(y){e=k(y,"DIV",{class:!0});var r=T(e);t=k(r,"DIV",{class:!0});var d=T(t);l=k(d,"H1",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-1mz16js"&&(l.textContent=i),f=V(d),a=k(d,"P",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-tq9wdd"&&(a.textContent=m),o=V(d),s=k(d,"TEXTAREA",{class:!0,rows:!0}),T(s).forEach(w),g=V(d),_=k(d,"DIV",{class:!0});var E=T(_);c=k(E,"BUTTON",{class:!0,"data-svelte-h":!0}),U(c)!=="svelte-1admezx"&&(c.textContent=x),C=V(E),h=k(E,"BUTTON",{class:!0});var u=T(h);D=M(u,"Next"),u.forEach(w),E.forEach(w),d.forEach(w),r.forEach(w),this.h()},h(){b(l,"class","font-light"),b(a,"class","text-fidelity-neutral-500 my-3"),b(s,"class","single"),b(s,"rows","1"),b(c,"class","back"),b(h,"class","next"),h.disabled=n[5],b(_,"class","grid grid-cols-2 w-3/4 mx-auto pt-8 gap-4"),b(t,"class","w-96 h-1/2 mx-auto text-center"),b(e,"class","h-[calc(100vh-112px)] pt-[10vh]")},m(y,r){H(y,e,r),v(e,t),v(t,l),v(t,f),v(t,a),v(t,o),v(t,s),n[7](s),tt(s,n[3].age),v(t,g),v(t,_),v(_,c),v(_,C),v(_,h),v(h,D),S||(I=[A(s,"input",n[8]),A(s,"keydown",n[9]),A(c,"click",n[10]),A(h,"click",n[11])],S=!0)},p(y,[r]){r&8&&tt(s,y[3].age),r&32&&(h.disabled=y[5])},i:j,o:j,d(y){y&&w(e),n[7](null),S=!1,Y(I)}}}function he(n,e,t){let l,i;L(n,z,h=>t(3,i=h));let{back:f=""}=e,{next:a=""}=e,{changeStep:m=h=>{}}=e,o;J(()=>{Q.set(!0),o==null||o.focus(),window.scrollTo(0,0)});const s=h=>{h.key==="Enter"&&(h.preventDefault(),m(a))};function g(h){at[h?"unshift":"push"](()=>{o=h,t(4,o)})}function _(){i.age=this.value,z.set(i)}const c=h=>s(h),x=()=>m(f),C=()=>m(a);return n.$$set=h=>{"back"in h&&t(0,f=h.back),"next"in h&&t(1,a=h.next),"changeStep"in h&&t(2,m=h.changeStep)},n.$$.update=()=>{n.$$.dirty&8&&t(5,l=i.age?i.age.length==0:!0)},[f,a,m,i,o,l,s,g,_,c,x,C]}class fe extends F{constructor(e){super(),K(this,e,he,ue,X,{back:0,next:1,changeStep:2})}}function de(n){let e,t,l,i="What's your approximate annual income",f,a,m="Certain accounts have income restrictions",o,s,g,_,c,x="Back",C,h,D,S,I;return{c(){e=p("div"),t=p("div"),l=p("h1"),l.textContent=i,f=N(),a=p("p"),a.textContent=m,o=N(),s=p("textarea"),g=N(),_=p("div"),c=p("button"),c.textContent=x,C=N(),h=p("button"),D=W("Next"),this.h()},l(y){e=k(y,"DIV",{class:!0});var r=T(e);t=k(r,"DIV",{class:!0});var d=T(t);l=k(d,"H1",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-ln5izs"&&(l.textContent=i),f=V(d),a=k(d,"P",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-1u77v69"&&(a.textContent=m),o=V(d),s=k(d,"TEXTAREA",{class:!0,rows:!0}),T(s).forEach(w),g=V(d),_=k(d,"DIV",{class:!0});var E=T(_);c=k(E,"BUTTON",{class:!0,"data-svelte-h":!0}),U(c)!=="svelte-1admezx"&&(c.textContent=x),C=V(E),h=k(E,"BUTTON",{class:!0});var u=T(h);D=M(u,"Next"),u.forEach(w),E.forEach(w),d.forEach(w),r.forEach(w),this.h()},h(){b(l,"class","font-light"),b(a,"class","text-fidelity-neutral-500 my-3"),b(s,"class","single"),b(s,"rows","1"),b(c,"class","back"),b(h,"class","next"),h.disabled=n[5],b(_,"class","grid grid-cols-2 w-3/4 mx-auto pt-8 gap-4"),b(t,"class","w-96 h-1/2 mx-auto text-center"),b(e,"class","h-[calc(100vh-112px)] pt-[10vh]")},m(y,r){H(y,e,r),v(e,t),v(t,l),v(t,f),v(t,a),v(t,o),v(t,s),n[7](s),tt(s,n[3].income),v(t,g),v(t,_),v(_,c),v(_,C),v(_,h),v(h,D),S||(I=[A(s,"input",n[8]),A(s,"keydown",n[9]),A(c,"click",n[10]),A(h,"click",n[11])],S=!0)},p(y,[r]){r&8&&tt(s,y[3].income),r&32&&(h.disabled=y[5])},i:j,o:j,d(y){y&&w(e),n[7](null),S=!1,Y(I)}}}function ve(n,e,t){let l,i;L(n,z,h=>t(3,i=h));let{back:f=""}=e,{next:a=""}=e,{changeStep:m=h=>{}}=e,o;J(()=>{Q.set(!0),o==null||o.focus(),window.scrollTo(0,0)});const s=h=>{h.key==="Enter"&&(h.preventDefault(),m(a))};function g(h){at[h?"unshift":"push"](()=>{o=h,t(4,o)})}function _(){i.income=this.value,z.set(i)}const c=h=>s(h),x=()=>m(f),C=()=>m(a);return n.$$set=h=>{"back"in h&&t(0,f=h.back),"next"in h&&t(1,a=h.next),"changeStep"in h&&t(2,m=h.changeStep)},n.$$.update=()=>{n.$$.dirty&8&&t(5,l=i.income?i.income.length==0:!0)},[f,a,m,i,o,l,s,g,_,c,x,C]}class _e extends F{constructor(e){super(),K(this,e,ve,de,X,{back:0,next:1,changeStep:2})}}function It(n,e,t){const l=n.slice();return l[6]=e[t],l[8]=t,l}function Nt(n){let e,t,l,i,f,a;var m=n[4][n[8]];function o(s,g){return{props:{back:s[8]-1,next:s[8]+1,changeStep:s[5]}}}return m&&(t=ht(m,o(n))),{c(){e=p("div"),t&&lt(t.$$.fragment),l=N(),this.h()},l(s){e=k(s,"DIV",{class:!0});var g=T(e);t&&Bt(t.$$.fragment,g),l=V(g),g.forEach(w),this.h()},h(){b(e,"class","h-full w-full")},m(s,g){H(s,e,g),t&&nt(t,e,null),v(e,l),a=!0},p(s,g){if(m!==(m=s[4][s[8]])){if(t){rt();const _=t;Z(_.$$.fragment,1,0,()=>{st(_,1)}),it()}m?(t=ht(m,o(s)),lt(t.$$.fragment),G(t.$$.fragment,1),nt(t,e,l)):t=null}},i(s){a||(t&&G(t.$$.fragment,s),s&&Ut(()=>{a&&(f&&f.end(1),i=Ot(e,ft,{duration:300}),i.start())}),a=!0)},o(s){t&&Z(t.$$.fragment,s),i&&i.invalidate(),s&&(f=Ht(e,ft,{duration:300})),a=!1},d(s){s&&w(e),t&&st(t),s&&f&&f.end()}}}function Vt(n){let e,t,l=n[8]===n[1]&&Nt(n);return{c(){l&&l.c(),e=ut()},l(i){l&&l.l(i),e=ut()},m(i,f){l&&l.m(i,f),H(i,e,f),t=!0},p(i,f){i[8]===i[1]?l?(l.p(i,f),f&2&&G(l,1)):(l=Nt(i),l.c(),G(l,1),l.m(e.parentNode,e)):l&&(rt(),Z(l,1,1,()=>{l=null}),it())},i(i){t||(G(l),t=!0)},o(i){Z(l),t=!1},d(i){i&&w(e),l&&l.d(i)}}}function me(n){let e,t,l,i;t=new Pt({props:{steps:n[3],displayedStep:n[2],maxStep:n[0],changeStep:n[5]}});let f=R(n[3]),a=[];for(let o=0;o<f.length;o+=1)a[o]=Vt(It(n,f,o));const m=o=>Z(a[o],1,1,()=>{a[o]=null});return{c(){e=p("div"),lt(t.$$.fragment),l=N();for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=k(o,"DIV",{class:!0});var s=T(e);Bt(t.$$.fragment,s),l=V(s);for(let g=0;g<a.length;g+=1)a[g].l(s);s.forEach(w),this.h()},h(){b(e,"class","w-full bg-fidelity-neutral-50")},m(o,s){H(o,e,s),nt(t,e,null),v(e,l);for(let g=0;g<a.length;g+=1)a[g]&&a[g].m(e,null);i=!0},p(o,[s]){const g={};if(s&4&&(g.displayedStep=o[2]),s&1&&(g.maxStep=o[0]),t.$set(g),s&50){f=R(o[3]);let _;for(_=0;_<f.length;_+=1){const c=It(o,f,_);a[_]?(a[_].p(c,s),G(a[_],1)):(a[_]=Vt(c),a[_].c(),G(a[_],1),a[_].m(e,null))}for(rt(),_=f.length;_<a.length;_+=1)m(_);it()}},i(o){if(!i){G(t.$$.fragment,o);for(let s=0;s<f.length;s+=1)G(a[s]);i=!0}},o(o){Z(t.$$.fragment,o),a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)Z(a[s]);i=!1},d(o){o&&w(e),st(t),$(a,o)}}}function ge(n,e,t){const l=["Intro","Goals","Name","Age","Email","Password","Marital","Address","Income","Hopes","Investments","Debt","Experience","Summary"],i=[zt,jt,Rt,fe,Wt,Mt,oe,Yt,_e,ce,ne,te,Qt,qt];let f=0,a=0,m=0;async function o(s){t(1,a=-1),await At(),setTimeout(()=>{t(1,a=s),t(2,m=s),s>=f&&t(0,f=s)},300)}return[f,a,m,l,i,o]}class we extends F{constructor(e){super(),K(this,e,ge,me,X,{})}}export{we as component};
