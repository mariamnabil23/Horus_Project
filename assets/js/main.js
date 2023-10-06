let arabic = document.querySelector("#Ar");
let english = document.querySelector("#En");
let body_mode = true;
let transBtn = document.querySelectorAll(".trans");
let mood = true;

// loading page
$(window).ready(function () {
  $(".loader").fadeOut(1200, function () {
    $("body").css("overflow", "auto");
    $(".loading-spiner").fadeOut(1500);
  });
});

// lightbox photo transition
lightbox.option({
  resizeDuration: 1000,
  wrapAround: true,
  positionFromTop: 100,
  disableScrolling: true,
  fitImagesInViewport: true,
});

// animation
wow = new WOW({
  boxClass: "animate__animated", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();

// btn-top
var btn_top = document.querySelector("#top");
console.log(btn_top);

window.onscroll = function () {
  if (scrollY >= 100) {
    btn_top.classList.add("btn-visible");
  } else {
    btn_top.classList.remove("btn-visible");
  }
};

// translate code

function State() {
  if (mood == true) {
    arabic.classList.add("state");
    english.classList.remove("state");
    mood = false;
  } else {
    arabic.classList.remove("state");
    english.classList.add("state");
    mood = true;
  }
}

// Dark and light mood
function myFunction() {
  let btnMode = document.querySelector("#btnMode");
  var element = document.body;

  if (body_mode == true) {
    btnMode.classList.add("light");
    element.classList.add("light-mode");
    btnMode.classList.remove("moon-dark");
    element.classList.remove("dark");
    body_mode = false;
  } else {
    btnMode.classList.add("moon-dark");
    element.classList.add("dark");
    btnMode.classList.remove("light");
    element.classList.remove("light-mode");
    body_mode = true;
  }
}

/**
 * Initiate Bootstrap validation check
 */
var needsValidation = document.querySelectorAll(".needs-validation");

Array.prototype.slice.call(needsValidation).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});
