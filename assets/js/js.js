function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    }
}

/*Parte do carrossel*/

/*
let main_div = document.querySelector('#carousel')

const paused =  setTimeout(()=>{
    main_div.style.animationPlayState = 'paused'
},2000)


const run = setInterval(()=>{

    clearTimeout(paused)

},4000)
*/
