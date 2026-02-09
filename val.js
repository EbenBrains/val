document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const popup = document.getElementById("popup");
  const buttonsArea = document.querySelector(".buttons");

  let scale = 1;

  function moveNoButton() {
    const areaRect = buttonsArea.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    scale -= 0.05;
    if (scale < 0.2) scale = 0.2;

    const maxX = areaRect.width - btnRect.width;
    const maxY = areaRect.height - btnRect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
  }

  buttonsArea.addEventListener("mousemove", (e) => {
    const btnRect = noBtn.getBoundingClientRect();

    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const distance = Math.hypot(
      e.clientX - btnCenterX,
      e.clientY - btnCenterY
    );

    if (distance < 90) {
      moveNoButton();
    }
  });

  noBtn.addEventListener("mousedown", (e) => {
    e.preventDefault();
    moveNoButton();
  });

  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
  });

  yesBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

    const phoneNumber = "2348105619954";
    const message = encodeURIComponent("Yes I will be your val 💖");

    setTimeout(() => {
      window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }, 500);
  });
});
