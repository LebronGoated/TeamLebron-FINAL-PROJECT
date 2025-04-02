document.addEventListener("DOMContentLoaded", function () {
  const reviewItem = JSON.parse(localStorage.getItem("reviewItem"));

  if (reviewItem) {
    document.getElementById("item-name").textContent = reviewItem.name;
    document.getElementById("item-price").textContent = `₱${reviewItem.price}`;
    document.getElementById("item-image").src = reviewItem.image;
  } else {
    document.getElementById("review-container").innerHTML =
      "<p class='text-red-500'>No item selected for review.</p>";
  }
});
// What is the purpose of this code snippet?