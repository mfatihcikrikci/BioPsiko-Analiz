/*Navbar - transition between pages*/
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});

//Homepage => infopage
window.onload = function () {
  var homepg_nextbtn = document.querySelector("#homepgnext-button");

  homepg_nextbtn?.addEventListener("click", function () {
    window.location.href = "infopage.html";
  });
};

//infopage => fileupload
var infonextbtn = document.querySelector(".infonext-btn");

infonextbtn?.addEventListener("click", function () {
  window.location.href = "fileupload.html";
});

/*****************FİLE UPLOAD*******************/
const dropArea = document.querySelector(".drop-section");
const listSection = document.querySelector(".list-section");
const listContainer = document.querySelector(".list");
const fileSelector = document.querySelector(".file-selector");
const fileSelectorInput = document.querySelector(".file-selector-input");

//upload with file selector button
// fileSelector.onclick = () => fileSelectorInput.click();

//Check the file type
// fileSelectorInput.onchange = () => {
//   [...fileSelectorInput.files].forEach((file) => {
//     if (typeValidation(file.type)) {
//       uploadFile(file);
//     }
//   });
// };

//File type check function
function typeValidation(type) {
  var splitType = type.split("/")[0];
  if (
    type == "application/pdf" ||
    splitType == "image" ||
    splitType == "video"
  ) {
    return true;
  }
  return false;
}

// document.addEventListener("DOMContentLoaded", function () {
//   document
//     .querySelector(".file-selector-input")
//     .addEventListener("change", function (event) {
//       var files = event.target.files;
//       for (var i = 0; i < files.length; i++) {
//         uploadFile(files[i]);
//       }
//     });

//   function uploadFile(file) {
//     var http = new XMLHttpRequest();
//     var data = new FormData();
//     data.append("file", file);

//     http.onload = () => {
//       if (http.status === 200) {
//         console.log("Dosya yüklendi: " + file.name);
//       } else {
//         console.error("Dosya yüklenirken hata oluştu: " + file.name);
//       }
//     };

//     http.upload.onprogress = (e) => {
//       var percent_complete = (e.loaded / e.total) * 100;
//       console.log(percent_complete);
//     };

//     http.open("POST", "sender.php", true);
//     http.send(data);
//   }
// });


