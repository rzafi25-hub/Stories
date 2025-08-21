function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


window.addEventListener('scroll', function () {
    const headers = document.querySelectorAll('.mobile__header');
    headers.forEach(header => {
        if (window.scrollY >= 150) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});


const menuToggle = document.querySelectorAll('.menu__btn');
        const navLinks = document.querySelectorAll('header nav');

        menuToggle.forEach(toggle => {
            toggle.addEventListener('click', () => {
                navLinks.forEach(link => {
                    link.classList.toggle('active');
                    toggle.classList.toggle('active');
                    document.body.classList.toggle('active');
                });
            });
        });


        document.querySelectorAll(".scroll__buttons").forEach(button => {
            button.addEventListener("click", function () {
              const targetId = this.getAttribute("data-target");
              document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
            });
          });