(()=>{"use strict";function e(){const e=document.createElement("div");return e.innerHTML="<h2>Welcome to Our Restaurant!</h2><p>We offer delicious dishes and cozy atmosphere.</p>",e}document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("content");function n(e){t.innerHTML="",t.appendChild(e)}const i=document.getElementById("home-tab"),d=document.getElementById("menu-tab"),o=document.getElementById("about-tab");i.addEventListener("click",(()=>n(e()))),d.addEventListener("click",(()=>n(function(){const e=document.createElement("div");return e.innerHTML="<h2>Our Menu</h2><ul><li>Appletizers</li><li>Main Courses</li><li>Desserts</li></ul>",e}()))),o.addEventListener("click",(()=>n(function(){const e=document.createElement("div");return e.innerHTML="<h2>About Us</h2><p>We are a family-owned restaurant dedicated to serving high-quality food.</p>",e}()))),n(e())}))})();