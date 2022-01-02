import{S,i as T,s as q,e as g,j as I,t as R,c as $,a as y,l as D,d,g as U,D as Y,b as v,f as V,E as u,G,k as W,v as N,w as O,x as M,p as x,n as j,A as H,m as F,a7 as J,o as K,a8 as Q,a6 as X}from"../../chunks/vendor-753aeb83.js";function Z(l){let s,t,e,r,n,c,f,p,_,h,i,a,o,m,E;return{c(){s=g("a"),t=g("div"),e=g("div"),r=g("img"),c=I(),f=g("div"),p=I(),_=g("div"),h=g("h1"),i=R(l[0]),a=I(),o=g("div"),m=g("img"),this.h()},l(k){s=$(k,"A",{href:!0});var C=y(s);t=$(C,"DIV",{class:!0});var w=y(t);e=$(w,"DIV",{class:!0});var b=y(e);r=$(b,"IMG",{src:!0,alt:!0,class:!0}),c=D(b),f=$(b,"DIV",{class:!0}),y(f).forEach(d),b.forEach(d),p=D(w),_=$(w,"DIV",{class:!0});var A=y(_);h=$(A,"H1",{class:!0});var L=y(h);i=U(L,l[0]),L.forEach(d),a=D(A),o=$(A,"DIV",{class:!0});var P=y(o);m=$(P,"IMG",{src:!0,alt:!0,class:!0}),P.forEach(d),A.forEach(d),w.forEach(d),C.forEach(d),this.h()},h(){Y(r.src,n=l[2])||v(r,"src",n),v(r,"alt",`image representing ${l[0]}`),v(r,"class","svelte-17mtdry"),v(f,"class","overlay svelte-17mtdry"),v(e,"class","image svelte-17mtdry"),v(h,"class","svelte-17mtdry"),Y(m.src,E=l[3])||v(m,"src",E),v(m,"alt",`flag of ${l[0]}`),v(m,"class","svelte-17mtdry"),v(o,"class","flag svelte-17mtdry"),v(_,"class","data svelte-17mtdry"),v(t,"class","card svelte-17mtdry"),v(s,"href",`/destinations/${l[1]}`)},m(k,C){V(k,s,C),u(s,t),u(t,e),u(e,r),u(e,c),u(e,f),u(t,p),u(t,_),u(_,h),u(h,i),u(_,a),u(_,o),u(o,m)},p:G,i:G,o:G,d(k){k&&d(s)}}}function ee(l,s,t){let{country:e}=s,{name:r,slug:n,flag:c,image:f}=e;const p=`/images/countries/${n}/${f}`,_=`/images/countries/${n}/${c}`;return l.$$set=h=>{"country"in h&&t(4,e=h.country)},[r,n,p,_,e]}class te extends S{constructor(s){super();T(this,s,ee,Z,q,{country:4})}}function z(l,s,t){const e=l.slice();return e[1]=s[t],e[3]=t,e}function B(l,s){let t,e,r;return e=new te({props:{country:s[1]}}),{key:l,first:null,c(){t=W(),N(e.$$.fragment),this.h()},l(n){t=W(),O(e.$$.fragment,n),this.h()},h(){this.first=t},m(n,c){V(n,t,c),M(e,n,c),r=!0},p(n,c){s=n;const f={};c&1&&(f.country=s[1]),e.$set(f)},i(n){r||(x(e.$$.fragment,n),r=!0)},o(n){j(e.$$.fragment,n),r=!1},d(n){n&&d(t),H(e,n)}}}function se(l){let s,t,e=[],r=new Map,n,c,f,p,_=l[0];const h=i=>i[1].slug;for(let i=0;i<_.length;i+=1){let a=z(l,_,i),o=h(a);r.set(o,e[i]=B(o,a))}return{c(){s=g("div"),t=g("div");for(let i=0;i<e.length;i+=1)e[i].c();n=I(),c=g("div"),f=g("div"),this.h()},l(i){s=$(i,"DIV",{class:!0});var a=y(s);t=$(a,"DIV",{class:!0});var o=y(t);for(let E=0;E<e.length;E+=1)e[E].l(o);o.forEach(d),n=D(a),c=$(a,"DIV",{class:!0});var m=y(c);f=$(m,"DIV",{class:!0}),y(f).forEach(d),m.forEach(d),a.forEach(d),this.h()},h(){v(t,"class","dark svelte-1tput84"),v(f,"class","fixedInner svelte-1tput84"),v(c,"class","fixedWrap svelte-1tput84"),v(s,"class","fixedContainer svelte-1tput84")},m(i,a){V(i,s,a),u(s,t);for(let o=0;o<e.length;o+=1)e[o].m(t,null);u(s,n),u(s,c),u(c,f),p=!0},p(i,[a]){a&1&&(_=i[0],F(),e=J(e,a,h,1,i,_,r,t,Q,B,null,z),K())},i(i){if(!p){for(let a=0;a<_.length;a+=1)x(e[a]);p=!0}},o(i){for(let a=0;a<e.length;a+=1)j(e[a]);p=!1},d(i){i&&d(s);for(let a=0;a<e.length;a+=1)e[a].d()}}}function re(l,s,t){let{countries:e}=s;return l.$$set=r=>{"countries"in r&&t(0,e=r.countries)},[e]}class ae extends S{constructor(s){super();T(this,s,re,se,q,{countries:0})}}function ne(l){let s,t,e,r,n,c,f,p,_,h,i;return h=new ae({props:{countries:l[0]}}),{c(){s=g("div"),t=g("div"),e=g("h1"),r=R("SELECT YOUR DESTINATION"),n=I(),c=g("div"),f=I(),p=g("div"),_=I(),N(h.$$.fragment),this.h()},l(a){s=$(a,"DIV",{});var o=y(s);t=$(o,"DIV",{class:!0});var m=y(t);e=$(m,"H1",{class:!0});var E=y(e);r=U(E,"SELECT YOUR DESTINATION"),E.forEach(d),n=D(m),c=$(m,"DIV",{class:!0}),y(c).forEach(d),f=D(m),p=$(m,"DIV",{class:!0}),y(p).forEach(d),m.forEach(d),_=D(o),O(h.$$.fragment,o),o.forEach(d),this.h()},h(){v(e,"class","header"),v(c,"class","header-underline"),v(p,"class","divider svelte-1e3qllk"),v(t,"class","container svelte-1e3qllk")},m(a,o){V(a,s,o),u(s,t),u(t,e),u(e,r),u(t,n),u(t,c),u(t,f),u(t,p),u(s,_),M(h,s,null),i=!0},p(a,[o]){const m={};o&1&&(m.countries=a[0]),h.$set(m)},i(a){i||(x(h.$$.fragment,a),i=!0)},o(a){j(h.$$.fragment,a),i=!1},d(a){a&&d(s),H(h)}}}function le(l,s,t){let{countries:e}=s;return l.$$set=r=>{"countries"in r&&t(0,e=r.countries)},[e]}class ie extends S{constructor(s){super();T(this,s,le,ne,q,{countries:0})}}function ce(l){let s,t,e;return t=new ie({props:{countries:l[0]}}),{c(){s=I(),N(t.$$.fragment),this.h()},l(r){X('[data-svelte="svelte-mxa92b"]',document.head).forEach(d),s=D(r),O(t.$$.fragment,r),this.h()},h(){document.title="All Countries"},m(r,n){V(r,s,n),M(t,r,n),e=!0},p(r,[n]){const c={};n&1&&(c.countries=r[0]),t.$set(c)},i(r){e||(x(t.$$.fragment,r),e=!0)},o(r){j(t.$$.fragment,r),e=!1},d(r){r&&d(s),H(t,r)}}}async function de({url:l,params:s,fetch:t,session:e,stuff:r}){const n=await t("/api/countries/allcountriesdata.json");return n.ok?{props:{countries:(await n.json()).countries}}:{status:n.status,error:new Error("Could not load countries data!")}}function oe(l,s,t){let{countries:e}=s;return l.$$set=r=>{"countries"in r&&t(0,e=r.countries)},[e]}class fe extends S{constructor(s){super();T(this,s,oe,ce,q,{countries:0})}}export{fe as default,de as load};
