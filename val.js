const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");

let scale = 1;

noBtn.addEventListener("mouseenter", () => {
  const maxX = 180;
  const maxY = 180;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  scale -= 0.05;
  if (scale < 0.3) scale = 0.3;

  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
});

yesBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");

  const phoneNumber = "2348105619954"; // your WhatsApp number
  const message = encodeURIComponent("Yes I will be your val 💖");

  setTimeout(() => {
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  },    500);
});
