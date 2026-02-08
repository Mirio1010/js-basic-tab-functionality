const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");

    // 1. Remove active class from all buttons and panels
    buttons.forEach((b) => b.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // 2. Add active class to clicked button and target panel
    btn.classList.add("active");
    document.getElementById(targetId).classList.add("active");
  });
});
