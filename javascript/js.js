const img = document.getElementById("show_image");
const overlay = document.getElementById("overlay");

img.addEventListener("click", function () {
  const enlarged = img.cloneNode(true);
  enlarged.style.width = 'auto'; // remove fixed width
  overlay.innerHTML = "";         // clear previous
  overlay.appendChild(enlarged);  // insert enlarged image
  overlay.style.display = "flex";
});

// Close overlay on click
overlay.addEventListener("click", function () {
  overlay.style.display = "none";
});
