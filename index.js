document.getElementById("whatsappBtn").addEventListener("click", function () {
  document.getElementById("chatBox").style.display = "block";
});

// إغلاق نافذة الدردشة
document.getElementById("closeChat").addEventListener("click", function () {
  document.getElementById("chatBox").style.display = "none";
});

let menu = document.querySelector("#menu-icons");
let navbar = document.querySelector(".nav-links");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};


document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const dotsContainer = document.getElementById("carouselDots");
  const cardTitle = document.getElementById("cardTitle");
  const cardContent = document.getElementById("cardContent");

  // بيانات الشرائح
  const slidesData = [
    {
      title: "المسار الرقمي للخدمات العقارية",
      content:
        "المسار الرقمي المميز هو موقع إلكتروني رائد لتسويق العقارات في السعودية...",
    },
    {
      title: "خدماتنا",
      content:
        "نحن نقدم حلولاً فعالة ومبتكرة لتحسين تجربة الباحثين عن العقارات...",
    },
    {
      title: "تطوير السوق العقاري",
      content: "نعمل على تسهيل عملية البحث عن العقارات وتعزيز تجربة التسويق...",
    },
  ];

  const totalSlides = slidesData.length;

  if (!track || totalSlides === 0) {
    console.error("Carousel track or slides data not found!");
    return;
  }

  // إنشاء النقاط الديناميكية (dots)
  slidesData.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
  });

  let currentIndex = 0;

  // تحديث النقاط النشطة
  function updateDots() {
    const dots = document.querySelectorAll("#carouselDots span");
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  // دالة عرض الشريحة
  function showSlide(index) {
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    // تحديث محتوى البطاقة
    cardTitle.textContent = slidesData[currentIndex].title;
    cardContent.textContent = slidesData[currentIndex].content;

    // تحديث النقاط النشطة
    updateDots();
  }

  // الوظائف العامة للانتقال بين الشرائح
  window.nextSlide = function () {
    showSlide(currentIndex + 1);
  };

  window.prevSlide = function () {
    showSlide(currentIndex - 1);
  };

  // تشغيل السلايدر تلقائيًا (اختياري)
  let autoPlayInterval = setInterval(nextSlide, 2000);

  const carousel = document.querySelector(".carousel");
  carousel.addEventListener("mouseenter", () =>
    clearInterval(autoPlayInterval)
  );
  carousel.addEventListener("mouseleave", () => {
    autoPlayInterval = setInterval(nextSlide, 5000);
  });

  // تفعيل أول نقطة نشطة عند بدء الصفحة
  updateDots();

  // عرض الشريحة الأولى
  showSlide(currentIndex);
});
