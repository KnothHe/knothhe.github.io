import"./hoisted.VFObjY0O.js";function d(){const t=document.querySelector(".modal");t&&t.remove();const e=document.createElement("div");e.className="modal",document.body.appendChild(e),document.querySelectorAll(".prose img").forEach(a=>{a.addEventListener("click",o=>{o.preventDefault(),e.innerHTML=`
        <div class="modal-content">
          <img src="${a.src}" alt="${a.alt}" />
        </div>
      `,e.classList.add("active")})}),e.addEventListener("click",()=>{e.classList.remove("active")}),document.addEventListener("keydown",a=>{a.key==="Escape"&&e.classList.contains("active")&&e.classList.remove("active")})}document.addEventListener("DOMContentLoaded",d);document.addEventListener("astro:page-load",d);document.addEventListener("astro:before-swap",()=>{const t=document.querySelector(".modal");t&&t.remove()});
