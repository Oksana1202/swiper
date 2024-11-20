let swiper = undefined;
function createSwiper() {
  swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    freeMode: true,
    mousewheel: true,
    observer: true,
    observeParents: true,
    keyboard: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
addEventListener("resize", function () {
  if (window.innerWidth < 769 && !swiper) {
    createSwiper();
  }

  if (window.innerWidth > 768 && swiper) {
    swiper.destroy();
    swiper = undefined;
  }
});
if (window.innerWidth < 769 && !swiper) {
  createSwiper();
}

document.addEventListener("click", function (el) {
  const showMoreButton = document.querySelector(".show-more");
  const showMoreText = document.querySelector(".show-more_text");
  const showMoreImg = document.querySelector(".show-more_img");
  const hiddenBrands = document.querySelectorAll(".hidden");
  const hiddenTabletBrands = document.querySelectorAll(".hidden");
  const swiperSlide = document.querySelector(".swiper-slide");

  if (
    el.target.classList.contains("show-more") ||
    el.target.classList.contains("show-more_img") ||
    el.target.classList.contains("show-more_text")
  ) {
    if (window.innerWidth > 1119) {
      swiperSlide.style.width = "240px";
    } else if (window.innerWidth > 767) {
      swiperSlide.style.width = "224px";
    }

    if (showMoreText.innerText === "Показать все") {
      hiddenBrands.forEach(function (elem) {
        elem.style.display = "block";
      });
      hiddenTabletBrands.forEach(function (elem) {
        elem.style.display = "block";
      });
      showMoreText.innerText = "Скрыть";
      showMoreImg.style.transform = "rotate(180deg)";
    } else {
      hiddenBrands.forEach(function (elem) {
        elem.style.display = "none";
      });
      hiddenTabletBrands.forEach(function (elem) {
        elem.style.display = "none";
      });
      showMoreText.innerText = "Показать все";
      showMoreImg.style.transform = "rotate(0deg)";
    }
  }
});
