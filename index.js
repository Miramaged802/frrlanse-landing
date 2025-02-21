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
      title: "المسار الرقمي المميز للخدمات العقارية",
      content: "إدارة نسائية - تواصل مباشر مع مديرة القسم النسائي.",
      background: "beige" // تعريف خلفية خاصة لهذه الشريحة
    },
    {
      title: "المسار الرقمي للخدمات العقارية",
      content: "علاقات واسعة مع المستثمرين والمطورين.",
    },
    {
      title: "المسار الرقمي للخدمات العقارية",
      content: "اتفاقيات مع المنفذين.",
    },
    { title: "خدماتنا", content: "رهن كافة العقارات الفردية." },
    { title: "خدماتنا", content: "فك الرهن وإعادة التمويل." },
    { title: "خدماتنا", content: "دراسة تطوير الأراضي." },
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

      const carouselItem = document.querySelector(".carousel-item");
      if (slidesData[currentIndex].background === "beige") {
        carouselItem.classList.add("beige-background");
      } else {
        carouselItem.classList.remove("beige-background");
      }

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
  let autoPlayInterval = setInterval(nextSlide, 3000);

  const carousel = document.querySelector(".carousel");
  carousel.addEventListener("mouseenter", () =>
    clearInterval(autoPlayInterval)
  );
  carousel.addEventListener("mouseleave", () => {
    autoPlayInterval = setInterval(nextSlide, 3000);
  });

  // تفعيل أول نقطة نشطة عند بدء الصفحة
  updateDots();

  // عرض الشريحة الأولى
  showSlide(currentIndex);
});
