
document.addEventListener("DOMContentLoaded", () => {
  const filterItem = document.querySelector(".items");
  const filterImg = document.querySelectorAll(".gallery .image");

  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");

      filterImg.forEach((image) => {
        let filterImageName = image.getAttribute("data-name");

        if (filterImageName === filterName || filterName === "all") {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    }
  };

  filterImg.forEach((image) => {
    image.addEventListener("click", () => preview(image));
  });
});

const previewBox = document.querySelector(".preview-box");
const categoryName = previewBox.querySelector(".title p");
const previewImg = previewBox.querySelector(".image-box img");
const closeIcon = previewBox.querySelector(".icon");
const shadow = document.querySelector(".shadow");

function preview(element) {
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src;
  let selectedImgCategory = element.getAttribute("data-name");
  previewImg.src = selectedPrevImg;
  categoryName.textContent = selectedImgCategory;
  previewBox.classList.add("show");
  shadow.classList.add("show");

  closeIcon.onclick = () => {
    previewBox.classList.remove("show");
    shadow.classList.remove("show");
    document.querySelector("body").style.overflow = "auto";
  };
}