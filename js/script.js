var x,i,j,l,ll,selElmnt,a,b,c;for(Fancybox.bind("[data-fancybox]",{Thumbs:!1}),$(".beforeAfter  .slide").twentytwenty(),$(".header-burger").click((function(){$(".header-nav").toggleClass("active"),$(this).toggleClass("open"),$("header").toggleClass("open"),$("html").toggleClass("lock")})),$(".header .close").click((function(){$(".header-nav").toggleClass("active")})),$(".nav-link").click((function(e){$(this).closest(".nav-item").find(".sub-menu").toggleClass("open"),$(this).find("svg").toggleClass("open")})),$(window).scroll((function(){let e=$(".header");$(window).scrollTop()>100?e.addClass("header-scroll"):e.removeClass("header-scroll")})),$(document).ready((function(){let e="1",s="white";function i(){$(".window-image").removeClass("active"),$(`.window-image[data-grid="${e}"][data-color="${s}"]`).addClass("active")}$(".grid-item").click((function(){$(".grid-item").removeClass("active"),$(this).addClass("active"),e=$(this).data("grid"),i()})),$(".color-item").click((function(){$(".color-item").removeClass("active"),$(this).addClass("active"),s=$(this).data("color"),i()})),i(),$(".filterChoose").click((function(){$(".filterChoose").removeClass("open"),$(this).addClass("open");var e=$(this).data("target");$(".chooseItem").each((function(){$(this).data("choose")===e?$(this).removeClass("hidden"):$(this).addClass("hidden")}))}))})),$(".hero-slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:5e3,fade:!0,cssEase:"ease-in-out",pauseOnHover:!1}),$(window).width()<=1024&&$(".services-list").slick({slidesToShow:2,slidesToScroll:2,prevArrow:$(".services-section").closest("section").find(".prev"),nextArrow:$(".services-section").closest("section").find(".next"),responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(window).width()<=768&&$(".benefits-list").slick({slidesToShow:1,slidesToScroll:1,prevArrow:$(".benefits").find(".prev"),nextArrow:$(".benefits").find(".next")}),$(".other-blog-list").slick({slidesToShow:3,slidesToScroll:1,prevArrow:$(".other-blog").closest("section").find(".prev"),nextArrow:$(".other-blog").closest("section").find(".next"),responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".home-projectsSlider").slick({slidesToShow:3,slidesToScroll:1,centerMode:!0,prevArrow:$(".homeProjects").find(".prev"),nextArrow:$(".homeProjects").find(".next"),responsive:[{breakpoint:1300,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".process-slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,fade:!0}),$(".gallery-slider").slick({slidesToShow:3,slidesToScroll:1,prevArrow:$(".windows-gallary").find(".prev"),nextArrow:$(".windows-gallary").find(".next"),responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".similar-slider").slick({slidesToShow:3,slidesToScroll:1,prevArrow:$(".similar").find(".prev"),nextArrow:$(".similar").find(".next"),responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".similar-slider-project").slick({slidesToShow:2,slidesToScroll:1,prevArrow:$(".similar").find(".prev"),nextArrow:$(".similar").find(".next"),responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".beforeAfter-slider").slick({slidesToShow:1,draggable:!1,swipeToSlide:!1,swipe:!1,prevArrow:$(".beforeAfter").find(".prev"),nextArrow:$(".beforeAfter").find(".next")}),$(".faq-item").on("click",(function(){var e=$(this).closest("li"),s=e.find(".plus"),i=e.find(".answer");$(this).toggleClass("open"),s.toggleClass("open"),i.toggleClass("open"),i.hasClass("open")&&($(".answer").not(i).removeClass("open"),$(".plus").not(s).removeClass("open"),$(".faq-item").not(this).removeClass("open"))})),$(document).ready((function(){var e=$("#tel");$("#myForm");e.on("input",(function(e){var s=e.target.value.replace(/\D/g,"").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);e.target.value=s[2]?"("+s[1]+") "+s[2]+(s[3]?"-"+s[3]:""):s[1]}))})),l=(x=document.getElementsByClassName("custom-select")).length,i=0;i<l;i++){for(ll=(selElmnt=x[i].getElementsByTagName("select")[0]).length,(a=document.createElement("DIV")).setAttribute("class","select-selected"),a.innerHTML=selElmnt.options[selElmnt.selectedIndex].innerHTML,x[i].appendChild(a),(b=document.createElement("DIV")).setAttribute("class","select-items select-hide"),j=1;j<ll;j++)(c=document.createElement("DIV")).innerHTML=selElmnt.options[j].innerHTML,c.addEventListener("click",(function(e){var s,i,l,t,o,r,n;for(r=(t=this.parentNode.parentNode.getElementsByTagName("select")[0]).length,o=this.parentNode.previousSibling,i=0;i<r;i++)if(t.options[i].innerHTML==this.innerHTML){for(t.selectedIndex=i,o.innerHTML=this.innerHTML,o.style.color="black",n=(s=this.parentNode.getElementsByClassName("same-as-selected")).length,l=0;l<n;l++)s[l].removeAttribute("class");this.setAttribute("class","same-as-selected");break}o.click()})),b.appendChild(c);x[i].appendChild(b),a.addEventListener("click",(function(e){e.stopPropagation(),closeAllSelect(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")}))}function closeAllSelect(e){var s,i,l,t,o,r=[];for(s=document.getElementsByClassName("select-items"),i=document.getElementsByClassName("select-selected"),t=s.length,o=i.length,l=0;l<o;l++)e==i[l]?r.push(l):i[l].classList.remove("select-arrow-active");for(l=0;l<t;l++)r.indexOf(l)&&s[l].classList.add("select-hide")}document.addEventListener("click",closeAllSelect);const validation=new JustValidate("#main-form");validation.addField("#name",[{rule:"required",errorMessage:"Name is required"},{rule:"minLength",value:2}]).addField(".phoneInput",[{rule:"required",errorMessage:"Phone number is required"},{rule:"minLength",value:14,errorMessage:"The field must contain a minimum of 10 characters"}]).addField("#email",[{rule:"required",errorMessage:"Email is required"},{rule:"email",errorMessage:"Email is invalid!"}]);