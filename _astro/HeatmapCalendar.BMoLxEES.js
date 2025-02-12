import{j as o,L as C,G as L}from"./config.BJCCgaMV.js";import{r as u}from"./index.CVf8TyFT.js";function _({posts:x,colors:P}){const S=u.useRef(null),F=u.useRef(null),[y,N]=u.useState(null),[i,z]=u.useState(()=>new Date().getFullYear()),[D,Y]=u.useState("dark"),M=P||{light:{0:"#ebedf0",1:"#9be9a8",2:"#40c463",3:"#30a14e",4:"#216e39",text:"#24292f",subtext:"#57606a"},dark:{0:"#161B22",1:"#0e4429",2:"#006d32",3:"#26a641",4:"#39d353",text:"#adbac7",subtext:"#768390"}};u.useEffect(()=>{const t=localStorage.getItem("theme")==="dark";Y(t?"dark":"light");const a=O();a.length>0&&z(a[0])},[]),u.useEffect(()=>{const e=()=>{const r=localStorage.getItem("theme")==="dark";Y(r?"dark":"light")},t=()=>{e()},a=new MutationObserver(n=>{n.forEach(r=>{r.attributeName==="class"&&e()})});return window.addEventListener("themeChange",t),a.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>{a.disconnect(),window.removeEventListener("themeChange",t)}},[]);const O=()=>{const e=new Set;return x.forEach(t=>{const a=new Date(t.data.pubDatetime).getFullYear();e.add(a)}),Array.from(e).sort((t,a)=>a-t)},J=e=>{const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["January","February","March","April","May","June","July","August","September","October","November","December"],n=new Date(e.toLocaleString(C.lang,{timeZone:L.timezone}));return`${t[n.getDay()]}, ${a[n.getMonth()]} ${n.getDate()}, ${n.getFullYear()}`},G=()=>{if(!S.current)return;const e=S.current,t=e.getContext("2d");if(!t)return;const a=window.devicePixelRatio||1,n=10*a,r=2*a,p=53,f=7,v=28*a,m=28*a,b=m+p*(n+r),w=v+f*(n+r);e.style.width=`${b/a}px`,e.style.height=`${w/a}px`,e.width=b,e.height=w,t.scale(a,a),t.clearRect(0,0,e.width,e.height);const g=new Map;x.forEach(s=>{const c=new Date(s.data.pubDatetime),d=new Date(c.toLocaleString(C.lang,{timeZone:L.timezone})).toLocaleDateString();new Date(d).getFullYear()===i&&g.set(d,(g.get(d)||0)+1)});const k=(new Date(i,0,1).getDay()+6)%7,T=["Mon","Wed","Fri"];t.textAlign="right",t.fillStyle=M[D].subtext,t.font="bold 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",T.forEach((s,c)=>{const l=v/a+c*2*((n+r)/a)+n/a;t.fillText(s,(m-4)/a,l)}),t.textAlign="left",t.fillStyle=M[D].text,t.font="bold 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";const A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h=new Date(i,0,1),j=new Date(i,11,31);A.forEach((s,c)=>{const l=new Date(i,c,1),d=Math.floor((l.getTime()-h.getTime())/(7*24*60*60*1e3));if(d>=0&&d<p){const E=(m+d*(n+r))/a;t.fillText(s,E,14)}});for(let s=0;s<p;s++)for(let c=0;c<f;c++){const l=new Date(h);if(l.setDate(l.getDate()-k+s*7+c),l>=h&&l<=j){const d=l.toLocaleDateString(),E=g.get(d)||0,I=Math.min(E,4),H=(m+s*(n+r))/a,Z=(v+c*(n+r))/a,$=n/a,B=2;t.beginPath(),t.roundRect(H,Z,$,$,B),t.fillStyle=M[D][I],t.fill()}}};return u.useEffect(()=>{G()},[x,i,D]),u.useEffect(()=>{const e=S.current,t=F.current;if(!e||!t)return;const a=10,n=2,r=28,p=28,f=new Date(i,0,1),v=new Date(i,11,31),m=(f.getDay()+6)%7,b=g=>{const R=e.getBoundingClientRect(),k=t.getBoundingClientRect(),T=g.clientX-R.left-p,A=g.clientY-R.top-r,h=Math.floor(T/(a+n)),j=Math.floor(A/(a+n));if(h>=0&&j>=0){const s=new Date(f);if(s.setDate(s.getDate()-m+h*7+j),s>=f&&s<=v){const c=s.toLocaleDateString(C.lang,{timeZone:L.timezone}),l=x.filter(d=>new Date(d.data.pubDatetime).toLocaleDateString(C.lang,{timeZone:L.timezone})===c).length;N({x:g.clientX-k.left,y:g.clientY-k.top,date:J(s),count:l});return}}N(null)},w=()=>{N(null)};return e.addEventListener("mousemove",b),e.addEventListener("mouseleave",w),()=>{e.removeEventListener("mousemove",b),e.removeEventListener("mouseleave",w)}},[i,x]),o.jsxs("div",{className:"my-8",children:[o.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[o.jsxs("h3",{className:"text-lg font-medium",children:[i," Publication Activity"]}),o.jsx("select",{value:i,onChange:e=>z(Number(e.target.value)),className:"rounded-md border bg-transparent px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:focus:ring-offset-gray-800",children:O().map(e=>o.jsx("option",{value:e,className:"dark:bg-gray-800",children:e},e))})]}),o.jsxs("div",{className:"relative flex justify-center",ref:F,children:[o.jsxs("div",{children:[o.jsx("canvas",{ref:S,width:900,height:140,className:"w-full"}),o.jsxs("div",{className:"mt-4 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400",children:[o.jsx("span",{children:"Less"}),Object.values(M[D]).slice(0,5).map((e,t)=>o.jsx("div",{className:"h-3 w-3 rounded-sm",style:{backgroundColor:e}},t)),o.jsx("span",{children:"More"})]})]}),y&&o.jsxs("div",{className:"pointer-events-none absolute z-10 -translate-y-full transform rounded-lg bg-gray-800 px-3 py-2 text-xs text-white shadow-lg dark:bg-gray-700",style:{left:`${y.x}px`,top:`${y.y-10}px`},children:[o.jsxs("div",{className:"font-medium",children:[y.count," posts"]}),o.jsx("div",{className:"text-gray-300",children:y.date})]})]})]})}export{_ as default};
