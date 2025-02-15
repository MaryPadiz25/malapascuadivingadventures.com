document.addEventListener("DOMContentLoaded", function() {
    var privacyArticle = document.getElementById("privacyArticle");
    var privacyTerms = document.getElementById("privacyTerms");
    var closePrivacy = document.getElementById("closePrivacy");
  
    setTimeout(function() { privacyArticle.style.display = "none"; });
    privacyTerms.addEventListener("click", function() {
        privacyArticle.style.display = "block";
    });
   
    closePrivacy.addEventListener("click", function() {
        privacyArticle.style.display = "none";
    });
   
  });


  document.addEventListener("DOMContentLoaded", function() {
    var privacyArticle2 = document.getElementById("privacyArticle2");
  var privacyPolicy = document.getElementById("privacyPolicy");
   var closeArticle = document.getElementById("closePrivacy");
  
    setTimeout(function() { privacyArticle2.style.display = "none"; });
    privacyPolicy.addEventListener("click", function() {
        privacyArticle2.style.display = "block";
    });
   
    closeArticle.addEventListener("click", function() {
        privacyArticle2.style.display = "none";
    });
   
  });

  document.addEventListener("DOMContentLoaded", function() {
    var privacyArticle3 = document.getElementById("privacyArticle3");
    var privacyTerms2 = document.getElementById("privacyTerms2");
     var closeArticle3 = document.getElementById("closePrivacy");
  
    setTimeout(function() { privacyArticle3.style.display = "none"; });
    privacyTerms2.addEventListener("click", function() {
        privacyArticle3.style.display = "block";
    });
   
    closeArticle3.addEventListener("click", function() {
        privacyArticle3.style.display = "none";
    });
   
  });
  

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
  