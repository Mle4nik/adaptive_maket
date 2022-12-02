document.querySelector('.c-hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    // this.classList.toggle('is-active')
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('.header__menu').classList.remove('nav-active');
    //     // document.querySelector('#menu').style.background = "rgba(29, 91, 29, 0)"
    //     document.body.classList.remove('body-active');
        
    }
    else {
        this.classList.add('is-active');
        document.querySelector('.header__menu').classList.add('nav-active');
    //     // document.querySelector('#menu').style.background = "rgb(29, 91, 29)"
    //     document.body.classList.add('body-active');
    }
})