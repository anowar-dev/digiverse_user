// Sitebar menu active class added function

let sitebarmenu = document.querySelectorAll(".nav-link_aside");
let count = 1;
for (let i = 0; i < sitebarmenu.length; i++) {
  sitebarmenu[i].addEventListener("click", function () {
    let activeClas = document.querySelector(".active");
    if (activeClas === true) {
      return;
    } else {
      activeClas.classList.remove("active");
      this.classList.add("active");
    }

    // sitebarmenu[i].classList.add('active');
  });
}

// Popup open btn
let predic_btn = document.querySelectorAll(".popup_open");
for (let i = 0; i < predic_btn.length; i++) {
  predic_btn[i].addEventListener("click", function () {
    let popup = document.querySelector(".symtomp_popup");
    popup.classList.add("display_block");
  });
}

// Symtomp popup btn close
let popup_close = document.querySelectorAll(".dep_popup_close");
for (let i = 0; i < popup_close.length; i++) {
  popup_close[i].addEventListener("click", function () {
    let popup = this.parentElement.parentElement.parentElement;
    popup.classList.remove("display_block");
  });
}

// Symtomp popup close ok btn
let popup_close_ok = document.querySelectorAll(".popup_ok");
for (let i = 0; i < popup_close_ok.length; i++) {
  popup_close_ok[i].addEventListener("click", function () {
    let popup_ok = this.parentElement.parentElement.parentElement;
    popup_ok.classList.add("display_none");
  });
}

// Search bar
let searchbtn = document.querySelector(".symptom_search_btn_profile");
searchbtn.addEventListener("focus", function () {
  this.classList.add("display_none")
  let searchbar = document.querySelector(".symtomp_h_form_div form");
  searchbar.classList.add("display_block");
});

