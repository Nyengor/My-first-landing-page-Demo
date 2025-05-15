ocument.addEventListener('scroll',function() {
    // console.log(window.scrollY);
    if (window.scrollY > 70) {
        // change nav bar bg to blue
        document.getElementById("nav").style.backgroundColor = "#ed0e0a";
    }
    else {
        // change nav bar to transparent
        document.getElementById("nav").style.backgroundColor = "transparent";
    }