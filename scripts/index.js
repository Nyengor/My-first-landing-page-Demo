document.addEventListener('scroll', function () {
    // console.log(window.scrollY);
    if (window.scrollY > 150) {
        // change nav bar bg to blue
        document.getElementById("navbar").style.backgroundColor = "orange";
    }
    else {
        // change nav bar to transparent
        document.getElementById("navbar").style.backgroundColor = "transparent";
    }
});