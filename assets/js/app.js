/***************************************/
/* Navigation */
/***************************************/

const header = document.querySelector(".header");
const navigation = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");

const toggleNav = function () {
  navigation.classList.toggle("active");
  navToggle.classList.toggle("active");
};
navToggle.addEventListener("click", toggleNav);

// Add box shadow to header when scrolled
window.addEventListener("scroll", () => {
  if (window.scrollY > 670) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/***************************************/
/* Magazine Modal */
/***************************************/
const modalWrapper = document.querySelector(".magazine-download");
const magazineImage = document.querySelector(".magazine-img");
const magazineName = document.querySelector(".magazine-name");
const downloadBtns = document.querySelectorAll(".magazine__btn");
const magazineDownloadBtn = document.querySelector(".magazine-download-btn");
const magazineCloseBtn = document.querySelector(".close-modal");

for (const downloadBtn of downloadBtns) {
  downloadBtn.onclick = function (e) {
    e.preventDefault();
    modalWrapper.classList.add("active");
    if (e.target.getAttribute("data-volume") === "1") {
      magazineImage.src = "assets/images/talpata/talpata-v1-inner.jpg";
      magazineName.innerText = "Talpata magazine v1";
      magazineDownloadBtn.href =
        "https://drive.google.com/file/d/1Pt84aGaYpq7yM5McJ-0LHDryBNy04h7r/view?usp=share_link";
    } else if (e.target.getAttribute("data-volume") === "2") {
      magazineImage.src = "assets/images/talpata/talpata-v2-inner.jpg";
      magazineDownloadBtn.href =
        "https://drive.google.com/file/d/1UpgYPzDHdk9noOcM2erUKwpDQZbYLFNt/view?usp=share_link";
      magazineName.innerText = "Talpata magazine v2";
    } else {
      magazineImage.src = "assets/images/talpata/talpata-v1-inner.jpg";
      magazineName.innerText = "Talpata magazine v1";
    }
  };
}

const closeMagazineModal = function (e) {
  //   e.preventDefault();
  modalWrapper.classList.remove("active");
};
magazineDownloadBtn.addEventListener("click", closeMagazineModal);
magazineCloseBtn.addEventListener("click", closeMagazineModal);
