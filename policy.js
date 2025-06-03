document.addEventListener("DOMContentLoaded", function() {
    var copyrightArticle = document.getElementById("copyrightArticle");
  var copyrightPolicy = document.getElementById("copyrightPolicy");
   var closeCopyright = document.getElementById("closeCopyright");
 
   setTimeout(function() { copyrightArticle.style.display = "none"; });
    copyrightPolicy.addEventListener("click", function() {
        copyrightArticle.style.display = "block";
    });
   
    closeCopyright.addEventListener("click", function() {
        copyrightArticle.style.display = "none";
    });
   
  });

  document.addEventListener("DOMContentLoaded", function() {
    var privacyArticle2 = document.getElementById("privacyArticle2");
  var privacyPolicy = document.getElementById("privacyPolicy");
   var closeArticle = document.getElementById("closeArticle");
  
    setTimeout(function() { privacyArticle2.style.display = "none"; });
    privacyPolicy.addEventListener("click", function() {
        privacyArticle2.style.display = "block";
    });
   
    closeArticle.addEventListener("click", function() {
        privacyArticle2.style.display = "none";
    });
   
  });
