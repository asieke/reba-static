function w(){}const S=t=>t;function j(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return t()}function A(){return Object.create(null)}function E(t){t.forEach(v)}function B(t){return typeof t=="function"}function C(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function F(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function P(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const r of n)r(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t){let n;return m(t,e=>n=e)(),n}function D(t,n,e){t.$$.on_destroy.push(m(n,e))}function G(t,n,e,r){if(t){const o=y(t,n,e,r);return t[0](o)}}function y(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function H(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const i=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)i[s]=n.dirty[s]|o[s];return i}return n.dirty|o}return n.dirty}function I(t,n,e,r,o,i){if(o){const _=y(n,e,r,i);t.p(_,o)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function K(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function L(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}let f;function d(t){f=t}function x(){if(!f)throw new Error("Function called outside component initialization");return f}function N(t){x().$$.on_mount.push(t)}function Q(t){x().$$.after_update.push(t)}const a=[],g=[];let u=[];const b=[],k=Promise.resolve();let p=!1;function q(){p||(p=!0,k.then(z))}function R(){return q(),k}function O(t){u.push(t)}const h=new Set;let c=0;function z(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,d(n),M(n.$$)}}catch(n){throw a.length=0,c=0,n}for(d(null),a.length=0,c=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(a.length);for(;b.length;)b.pop()();p=!1,h.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function T(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{K as A,F as B,U as C,G as a,H as b,D as c,Q as d,g as e,O as f,J as g,S as h,B as i,A as j,z as k,P as l,T as m,w as n,N as o,f as p,d as q,E as r,C as s,R as t,I as u,v,a as w,q as x,j as y,L as z};
