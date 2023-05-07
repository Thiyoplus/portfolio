var typed = new Typed(".multiple-text",{
    strings: ["Frontend Devolper","Fresher","Student"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

/* feedback */

var stars = document.getElementsByClassName("fa");

stars[0].onclick =  function(){
    stars[0].style.color = "skyblue";
    stars[1].style.color = "#363b44";
    stars[2].style.color = "#363b44";
    stars[3].style.color = "#363b44";
    stars[4].style.color = "#363b44";

}

    stars[1].onclick =  function(){
        stars[0].style.color = "skyblue";
        stars[1].style.color = "skyblue";
        stars[2].style.color = "#363b44";
        stars[3].style.color = "#363b44";
        stars[4].style.color = "#363b44";

    }

        stars[2].onclick =  function(){
            stars[0].style.color = "skyblue";
            stars[1].style.color = "skyblue";
            stars[2].style.color = "skyblue";
            stars[3].style.color = "#363b44";
            stars[4].style.color = "#363b44";

        }

            stars[3].onclick =  function(){
                stars[0].style.color = "skyblue";
                stars[1].style.color = "skyblue";
                stars[2].style.color = "skyblue";
                stars[3].style.color = "skyblue";
                stars[4].style.color = "#363b44";

            }

                stars[4].onclick =  function(){
                    stars[0].style.color = "skyblue";
                    stars[1].style.color = "skyblue";
                    stars[2].style.color = "skyblue";
                    stars[3].style.color = "skyblue";
                    stars[4].style.color = "skyblue";

}

/* scroll event */

var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('.header .nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header .nav a[href*='+id+']').classList.add('active');
            });
        };
    });
};
