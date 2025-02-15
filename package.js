
document.addEventListener("DOMContentLoaded", function() {
    var three_dives_package = document.getElementById("three_dives_package");
    var newBooking = document.getElementById("newBooking");
    var closeBooking = document.getElementById("closeBooking");
  
    setTimeout(function() { three_dives_package.style.display = "none"; });
    newBooking.addEventListener("click", function() {
        three_dives_package.style.display = "block";
    });
    closeBooking.addEventListener("click", function() {
        three_dives_package.style.display = "none";
    });
   
});

document.addEventListener("DOMContentLoaded", function() {
    var six_dives_package = document.getElementById("six_dives_package");
    var newBooking2 = document.getElementById("newBooking2");
    var closeBooking2 = document.getElementById("closeBooking2");
  
    setTimeout(function() { six_dives_package.style.display = "none"; });
    newBooking2.addEventListener("click", function() {
        six_dives_package.style.display = "block";
    });
    closeBooking2.addEventListener("click", function() {
        six_dives_package.style.display = "none";
    });
   
  });

document.addEventListener("DOMContentLoaded", function() {
        var ten_dives_package = document.getElementById("ten_dives_package");
        var newBooking3 = document.getElementById("newBooking3");
        var closeBooking3 = document.getElementById("closeBooking3");
      
        setTimeout(function() { ten_dives_package.style.display = "none"; });
        newBooking3.addEventListener("click", function() {
            ten_dives_package.style.display = "block";
        });
        closeBooking3.addEventListener("click", function() {
            ten_dives_package.style.display = "none";
        });
       
      });



            
document.addEventListener("DOMContentLoaded", function() {
                var fifteen_dives_package = document.getElementById("fifteen_dives_package");
                var newBooking4 = document.getElementById("newBooking4");
                var closeBooking4 = document.getElementById("closeBooking4");
              
                setTimeout(function() {fifteen_dives_package.style.display = "none"; });
                newBooking4.addEventListener("click", function() {
                    fifteen_dives_package.style.display = "block";
                });
                closeBooking4.addEventListener("click", function() {
                    fifteen_dives_package.style.display = "none";
                });
               
              });
        


document.addEventListener("DOMContentLoaded", function() {
                    var discover_scuba_diving = document.getElementById("discover_scuba_diving");
                    var newBooking5 = document.getElementById("newBooking5");
                    var closeBooking5 = document.getElementById("closeBooking5");
                  
                    setTimeout(function() { discover_scuba_diving.style.display = "none"; });
                    newBooking5.addEventListener("click", function() {
                        discover_scuba_diving.style.display = "block";
                    });
                    closeBooking5.addEventListener("click", function() {
                        discover_scuba_diving.style.display = "none";
                    });
                   
                  });
            
       
document.addEventListener("DOMContentLoaded", function() {
                        var scuba_refresher_program = document.getElementById("scuba_refresher_program");
                        var newBooking6 = document.getElementById("newBooking6");
                        var closeBooking = document.getElementById("closeBooking6");
                      
                        setTimeout(function() { scuba_refresher_program.style.display = "none"; });
                        newBooking6.addEventListener("click", function() {
                            scuba_refresher_program.style.display = "block";
                        });
                        closeBooking6.addEventListener("click", function() {
                            scuba_refresher_program.style.display = "none";
                        });
                       
                      });
                
            

document.addEventListener("DOMContentLoaded", function() {
                            var open_water_course = document.getElementById("open_water_course");
                            var newBooking7 = document.getElementById("newBooking7");
                            var closeBooking7 = document.getElementById("closeBooking7");
                          
                            setTimeout(function() { open_water_course.style.display = "none"; });
                            newBooking7.addEventListener("click", function() {
                                open_water_course.style.display = "block";
                            });
                            closeBooking7.addEventListener("click", function() {
                                open_water_course.style.display = "none";
                            });
                           
                          });
         
document.addEventListener("DOMContentLoaded", function() {
                                var advance_adventurer_course = document.getElementById("advance_adventurer_course");
                                var newBooking8 = document.getElementById("newBooking8");
                                var closeBooking8 = document.getElementById("closeBooking8");
                              
                                setTimeout(function() {advance_adventurer_course.style.display = "none"; });
                                newBooking8.addEventListener("click", function() {
                                    advance_adventurer_course.style.display = "block";
                                });
                                closeBooking8.addEventListener("click", function() {
                                    advance_adventurer_course.style.display = "none";
                                });
                               
                              });
                        
                                          
document.addEventListener("DOMContentLoaded", function() {
                                    var popupBooking9 = document.getElementById("popupBooking9");
                                    var newBooking9 = document.getElementById("newBooking9");
                                    var closeBooking = document.getElementById("closeBooking");
                                  
                                    setTimeout(function() { popupBooking9.style.display = "none"; });
                                    newBooking9.addEventListener("click", function() {
                                        popupBooking9.style.display = "block";
                                    });
                                    closeBooking.addEventListener("click", function() {
                                        popupBooking9.style.display = "none";
                                    });
                                   
                                  });

     /*-----------------------------*/
     
     



document.addEventListener("DOMContentLoaded", function() {
                                    var images = [
                                        "dvdivers.jpg",
                                        "dvscuba.jpg",
                                        "dvbudol.jpg",
                                        "dvboat.jpg"
                                    ];
                                    var currentIndex = 0;
                                
                                    var mainImage = document.getElementById("mainImage");
                                    var prevBtn = document.getElementById("prevBtn");
                                    var nextBtn = document.getElementById("nextBtn");
                                
                                    function updateImage(index) {
                                        mainImage.src = images[index];
                                    }
                                
                                    mainImage.addEventListener("click", function() {
                                        window.location.href = images[currentIndex];
                                    });
                                
                                    prevBtn.addEventListener("click", function() {
                                        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
                                        updateImage(currentIndex);
                                    });
                                
                                    nextBtn.addEventListener("click", function() {
                                        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                                        updateImage(currentIndex);
                                    });
                                
                                    // Initial image load
                                    updateImage(currentIndex);
                                });

document.addEventListener("DOMContentLoaded", function() {
                                    var images = [
                                        "dvdivers.jpg",
                                        "dvscuba.jpg",
                                        "dvbudol.jpg",
                                        "dvboat.jpg"
                                    ];
                                    var currentIndex = 0;
                                
                                    var mainImage2 = document.getElementById("mainImage2");
                                    var prevBtn2 = document.getElementById("prevBtn2");
                                    var nextBtn2 = document.getElementById("nextBtn2");
                                
                                    function updateImage(index) {
                                        mainImage2.src = images[index];
                                    }
                                
                                    mainImage2.addEventListener("click", function() {
                                        window.location.href = images[currentIndex];
                                    });
                                
                                    prevBtn2.addEventListener("click", function() {
                                        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
                                        updateImage(currentIndex);
                                    });
                                
                                    nextBtn2.addEventListener("click", function() {
                                        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                                        updateImage(currentIndex);
                                    });
                                
                                    // Initial image load
                                    updateImage(currentIndex);
                                });

document.addEventListener("DOMContentLoaded", function() {
                                    var images = [
                                        "dvdivers.jpg",
                                        "dvscuba.jpg",
                                        "dvbudol.jpg",
                                        "dvboat.jpg"
                                    ];
                                    var currentIndex = 0;
                                
                                    var mainImage3 = document.getElementById("mainImage3");
                                    var prevBtn3 = document.getElementById("prevBtn3");
                                    var nextBtn3 = document.getElementById("nextBtn3");
                                
                                    function updateImage(index) {
                                        mainImage3.src = images[index];
                                    }
                                
                                    mainImage3.addEventListener("click", function() {
                                        window.location.href = images[currentIndex];
                                    });
                                
                                    prevBtn3.addEventListener("click", function() {
                                        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
                                        updateImage(currentIndex);
                                    });
                                
                                    nextBtn3.addEventListener("click", function() {
                                        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                                        updateImage(currentIndex);
                                    });
                                
                                    // Initial image load
                                    updateImage(currentIndex);
                                });

document.addEventListener("DOMContentLoaded", function() {
                                    var images = [
                                        "dvdivers.jpg",
                                        "dvscuba.jpg",
                                        "dvbudol.jpg",
                                        "dvboat.jpg"
                                    ];
                                    var currentIndex = 0;
                                
                                    var mainImage4 = document.getElementById("mainImage4");
                                    var prevBtn4 = document.getElementById("prevBtn4");
                                    var nextBtn4 = document.getElementById("nextBtn4");
                                
                                    function updateImage(index) {
                                        mainImage4.src = images[index];
                                    }
                                
                                    mainImage4.addEventListener("click", function() {
                                        window.location.href = images[currentIndex];
                                    });
                                
                                    prevBtn4.addEventListener("click", function() {
                                        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
                                        updateImage(currentIndex);
                                    });
                                
                                    nextBtn4.addEventListener("click", function() {
                                        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                                        updateImage(currentIndex);
                                    });
                                
                                    // Initial image load
                                    updateImage(currentIndex);
                                });


document.addEventListener("DOMContentLoaded", function() {
                                    var images = [
                                        "dnscuba3.jpg",
                                        "dnscuba2.jpg",
                                        "dvdivers.jpg",
                                        "dvscuba.jpg"
                                    ];
                                    var currentIndex = 0;
                                
                                    var mainImage5 = document.getElementById("mainImage5");
                                    var prevBtn5 = document.getElementById("prevBtn5");
                                    var nextBtn5 = document.getElementById("nextBtn5");
                                
                                    function updateImage(index) {
                                        mainImage5.src = images[index];
                                    }
                                
                                    mainImage5.addEventListener("click", function() {
                                        window.location.href = images[currentIndex];
                                    });
                                
                                    prevBtn5.addEventListener("click", function() {
                                        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
                                        updateImage(currentIndex);
                                    });
                                
                                    nextBtn5.addEventListener("click", function() {
                                        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                                        updateImage(currentIndex);
                                    });
                                
                                    // Initial image load
                                    updateImage(currentIndex);
                                });

document.addEventListener("DOMContentLoaded", function() {
                                    var images = [
                                        "dnscuba3.jpg",
                                        "dnscuba2.jpg",
                                        "dvdivers.jpg",
                                        "dvscuba.jpg"
                                    ];
                                    var currentIndex = 0;
                                
                                    var mainImage6 = document.getElementById("mainImage6");
                                    var prevBtn6 = document.getElementById("prevBtn6");
                                    var nextBtn6 = document.getElementById("nextBtn6");
                                
                                    function updateImage(index) {
                                        mainImage6.src = images[index];
                                    }
                                
                                    mainImage6.addEventListener("click", function() {
                                        window.location.href = images[currentIndex];
                                    });
                                
                                    prevBtn6.addEventListener("click", function() {
                                        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
                                        updateImage(currentIndex);
                                    });
                                
                                    nextBtn6.addEventListener("click", function() {
                                        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                                        updateImage(currentIndex);
                                    });
                                
                                    // Initial image load
                                    updateImage(currentIndex);
                                });

document.addEventListener("DOMContentLoaded", function() {
                                    var images = [
                                        "dnscuba3.jpg",
                                        "dnscuba2.jpg",
                                        "dvdivers.jpg",
                                        "dvscuba.jpg"
                                    ];
                                    var currentIndex = 0;
                                
                                    var mainImage7 = document.getElementById("mainImage7");
                                    var prevBtn7 = document.getElementById("prevBtn7");
                                    var nextBtn7 = document.getElementById("nextBtn7");
                                
                                    function updateImage(index) {
                                        mainImage7.src = images[index];
                                    }
                                
                                    mainImage7.addEventListener("click", function() {
                                        window.location.href = images[currentIndex];
                                    });
                                
                                    prevBtn7.addEventListener("click", function() {
                                        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
                                        updateImage(currentIndex);
                                    });
                                
                                    nextBtn7.addEventListener("click", function() {
                                        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                                        updateImage(currentIndex);
                                    });
                                
                                    // Initial image load
                                    updateImage(currentIndex);
                                });

document.addEventListener("DOMContentLoaded", function() {
                                    var images = [
                                        "dnscuba3.jpg",
                                        "dnscuba2.jpg",
                                        "dvdivers.jpg",
                                        "dvscuba.jpg"
                                    ];
                                    var currentIndex = 0;
                                
                                    var mainImage8 = document.getElementById("mainImage8");
                                    var prevBtn8 = document.getElementById("prevBtn8");
                                    var nextBtn8 = document.getElementById("nextBtn8");
                                
                                    function updateImage(index) {
                                        mainImage8.src = images[index];
                                    }
                                
                                    mainImage8.addEventListener("click", function() {
                                        window.location.href = images[currentIndex];
                                    });
                                
                                    prevBtn8.addEventListener("click", function() {
                                        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
                                        updateImage(currentIndex);
                                    });
                                
                                    nextBtn8.addEventListener("click", function() {
                                        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                                        updateImage(currentIndex);
                                    });
                                
                                    // Initial image load
                                    updateImage(currentIndex);
                                });
