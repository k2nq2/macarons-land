window.onscroll = function showHeader(){
    let cont = document.querySelector('.cont');
    let contup = document.querySelector('.cont-up');
    if(window.scrollY > 790){
        cont.style.display = "block";
    } else {
        cont.style.display = "none";
    }
    if(window.scrollY > 790){
        contup.style.display = "flex";
    } else {
        contup.style.display = "none";
    }
}