document.addEventListener("DOMContentLoaded", function() {
  var popupForm = document.getElementById("popupForm");
  var divePackage = document.getElementById("divePackage")
  var closeForm = document.getElementById("closeForm");
  var closeBanner = document.getElementById("closeBanner");

  setTimeout(function() { popupForm.style.display = "none"; });
  contacts.addEventListener("click", function() {
      popupForm.style.display = "block";
  });
  setTimeout(function() { divePackage.style.display = "none"; });
  banner.addEventListener("click", function() {
    divePackage.style.display = "block";
  });
  closeForm.addEventListener("click", function() {
      popupForm.style.display = "none";
  });
  closeBanner.addEventListener("click", function() {
    divePackage.style.display = "none";
});
});
