var revQuotes1=document.getElementById("revQuotes1").children,revQuotes2=document.getElementById("revQuotes2").children,revImages1=document.getElementById("revImages1").children,revImages2=document.getElementById("revImages2").children,reviewerButtons=document.querySelectorAll("ul.review__links li a"),reviewerContents=document.querySelectorAll("section.review-customer__content");for(let e=0;e<reviewerButtons.length;e++)reviewerButtons[e].addEventListener("click",function(e){SAD(e,reviewerButtons,reviewerContents)});function SAD(e,t,r){var s=e.target;for(let e=0;e<t.length;e++)t[e].classList.remove("active-link");s.classList.add("active-link");var n=s.getAttribute("data-id");for(let e=0;e<r.length;e++)r[e].classList.remove("active-content");if(r[n].classList.add("active-content"),0==n)for(let e=0;e<revImages1.length;e++)setTimeout(()=>{revImages1[e].classList.add("show1")},70*e);else for(let e=0;e<revImages2.length;e++)setTimeout(()=>{revImages2[e].classList.add("show2")},70*e)}var revImages1Length=revImages1.length,revImages2Length=revImages2.length,revQuotes1Length=revQuotes1.length,revQuotes2Length=revQuotes2.length;for(let e=0;e<revImages2Length;e++)revImages2[e].addEventListener("click",function(e){switchImgPreviewer(revImages2,revQuotes2,e)});for(let e=0;e<revQuotes1Length;e++)revImages1[e].addEventListener("click",function(e){switchImgPreviewer(revImages1,revQuotes1,e)});function switchImgPreviewer(e,t,r){var s=r.target;for(let t=0;t<e.length;t++)e[t].classList.remove("customer-img_active");s.classList.add("customer-img_active");var n=s.getAttribute("data-id");for(let e=0;e<t.length;e++)t[e].classList.remove("quotes-active");t[n].classList.add("quotes-active")}