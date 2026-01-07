const btn = document.getElementById("newImageBtn");
const img = document.getElementById("photo");

btn.addEventListener("click", () => {
  // Add a unique query string to avoid cached images
  img.src = `https://picsum.photos/600/400?random=${Date.now()}`;
});
