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