Fancybox.bind("[data-fancybox]", {
  Thumbs: false,
});
$(".beforeAfter  .slide").twentytwenty();
//__________________________HEADER__________________________//

$(".header-burger").click(function () {
  $(".header-nav").toggleClass("active");
  $(this).toggleClass("open");
  $("header").toggleClass("open");
  $("html").toggleClass("lock");
});
$(".header .close").click(function () {
  $(".header-nav").toggleClass("active");
});
$(".nav-link").click(function (event) {
  $(this).closest(".nav-item").find(".sub-menu").toggleClass("open");
  $(this).find("svg").toggleClass("open");
});

$(window).scroll(function () {
  let header = $(".header");
  let scrollPosition = $(window).scrollTop();
  if (scrollPosition > 100) {
    header.addClass("header-scroll");
  } else {
    header.removeClass("header-scroll");
  }
});
//__________________________WINDOWS__________________________//

$(document).ready(function () {
  let currentGrid = "1";
  let currentColor = "white";
  function updateImage() {
    $(".window-image").removeClass("active");
    $(
      `.window-image[data-grid="${currentGrid}"][data-color="${currentColor}"]`
    ).addClass("active");
  }
  $(".grid-item").click(function () {
    $(".grid-item").removeClass("active");
    $(this).addClass("active");
    currentGrid = $(this).data("grid");
    updateImage();
  });
  $(".color-item").click(function () {
    $(".color-item").removeClass("active");
    $(this).addClass("active");
    currentColor = $(this).data("color");
    updateImage();
  });
  updateImage();
  $(".filterChoose").click(function () {
    $(".filterChoose").removeClass("open");
    $(this).addClass("open");
    var target = $(this).data("target");
    $(".chooseItem").each(function () {
      if ($(this).data("choose") === target) {
        $(this).removeClass("hidden");
      } else {
        $(this).addClass("hidden");
      }
    });
  });
});

//__________________________SLIDERS__________________________//

$(".hero-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "ease-in-out",
  pauseOnHover: false,
});
if ($(window).width() <= 1024) {
  $(".services-list").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $(".services-section").closest("section").find(".prev"),
    nextArrow: $(".services-section").closest("section").find(".next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
if ($(window).width() <= 768) {
  $(".benefits-list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".benefits").find(".prev"),
    nextArrow: $(".benefits").find(".next"),
  });
}
$(".other-blog-list").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".other-blog").closest("section").find(".prev"),
  nextArrow: $(".other-blog").closest("section").find(".next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".home-projectsSlider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  prevArrow: $(".homeProjects").find(".prev"),
  nextArrow: $(".homeProjects").find(".next"),
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".process-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,
});
$(".gallery-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".windows-gallary").find(".prev"),
  nextArrow: $(".windows-gallary").find(".next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".similar-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".similar").find(".prev"),
  nextArrow: $(".similar").find(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".similar-slider-project").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: $(".similar").find(".prev"),
  nextArrow: $(".similar").find(".next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".beforeAfter-slider").slick({
  slidesToShow: 1,
  draggable: false,
  swipeToSlide: false,
  swipe: false,
  prevArrow: $(".beforeAfter").find(".prev"),
  nextArrow: $(".beforeAfter").find(".next"),
});

//_____________________________FAQ_____________________________//

$(".faq-item").on("click", function () {
  var $parentListItem = $(this).closest("li");
  var $plusIcon = $parentListItem.find(".plus");
  var $answer = $parentListItem.find(".answer");

  $(this).toggleClass("open");
  $plusIcon.toggleClass("open");
  $answer.toggleClass("open");

  if ($answer.hasClass("open")) {
    $(".answer").not($answer).removeClass("open");
    $(".plus").not($plusIcon).removeClass("open");
    $(".faq-item").not(this).removeClass("open");
  }
});
//_____________________________FILTER_____________________________//

// $(".area-filter-item").on("click", function () {
//   $(".area-filter-item").removeClass("open");
//   $(this).addClass("open");
//   const filter = $(this).data("filter");
//   $(".about-service").each(function () {
//     const category = $(this).data("category");
//     if (category === filter) {
//       $(this).addClass("open");
//     } else {
//       $(this).removeClass("open");
//     }
//   });
// });

//_____________________________FORM_____________________________//

$(document).ready(function () {
  var $phoneInput = $("#tel");
  var $myForm = $("#myForm");

  $phoneInput.on("input", function (e) {
    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  });
});

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          // Set the color of the selected item to black
          h.style.color = "black";
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

const validation = new JustValidate("#main-form");
validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
    {
      rule: "minLength",
      value: 2,
    },
  ])
  .addField(".phoneInput", [
    {
      rule: "required",
      errorMessage: "Phone number is required",
    },
    {
      rule: "minLength",
      value: 14,
      errorMessage: "The field must contain a minimum of 10 characters",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ]);
