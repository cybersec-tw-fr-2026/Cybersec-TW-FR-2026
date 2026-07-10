const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// 左右滑動
document.querySelectorAll(".venue-carousel").forEach((carousel) => {
  const slides = carousel.querySelectorAll(".carousel-slide");
  const dots = carousel.querySelectorAll(".carousel-dot");
  const prevBtn = carousel.querySelector(".carousel-prev");
  const nextBtn = carousel.querySelector(".carousel-next");
  const captionList = carousel.parentElement.querySelector(".caption-list");
  const captions = captionList ? captionList.querySelectorAll(".route-item") : [];

  if (!slides.length) return;

  let currentIndex = 0;

  const showSlide = (index) => {
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });

    captions.forEach((caption, i) => {
      caption.classList.toggle("active", i === currentIndex);
    });
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      showSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      showSlide(currentIndex + 1);
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  });
});
// 左右滑動

// 交通方式選項切換
document.querySelectorAll(".route-tabs").forEach((tabs) => {
  const buttons = tabs.querySelectorAll(".route-tab");
  const switcher = tabs.nextElementSibling;

  if (!switcher || !switcher.classList.contains("route-switcher")) return;

  const photos = switcher.querySelectorAll(".route-photo");
  const items = switcher.querySelectorAll(".route-item");

  const showRoute = (route) => {
    buttons.forEach((btn) => btn.classList.toggle("active", btn.dataset.route === route));
    photos.forEach((photo) => photo.classList.toggle("active", photo.dataset.route === route));
    items.forEach((item) => item.classList.toggle("active", item.dataset.route === route));
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      showRoute(btn.dataset.route);
    });
  });
});