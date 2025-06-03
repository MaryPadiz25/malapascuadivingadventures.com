document.addEventListener("DOMContentLoaded", function() {
  var banner = document.getElementById("banner");
  var divePackage = document.getElementById("divePackage");
  var closeBanner = document.getElementById("closeBanner");

  setTimeout(function() { divePackage.style.display = "none"; });
  banner.addEventListener("click", function() {
    divePackage.style.display = "block";
  });
  closeBanner.addEventListener("click", function() {
    divePackage.style.display = "none";
});
});
document.addEventListener("DOMContentLoaded", function() {
  var contacts = document.getElementById("contacts");
  var divePackage = document.getElementById("divePackage");
  var closeBanner = document.getElementById("closeBanner");

  setTimeout(function() { divePackage.style.display = "none"; });
  contacts.addEventListener("click", function() {
    divePackage.style.display = "block";
  });
  closeBanner.addEventListener("click", function() {
    divePackage.style.display = "none";
});
});