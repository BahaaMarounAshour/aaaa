let scrolltoTOP =document.querySelector('.scrolltoTOP')
let navbar = document.querySelector('.navbar')
window.onscroll = function(){
    if(window.scrollY > 10){
        navbar.style.backgroundColor = "red"
         scrolltoTOP.style.display = 'block'
    }else{
scrolltoTOP.style.display = 'none'
navbar.style.backgroundColor = "transparent"
    }
   
}

scrolltoTOP.onclick = function(){
    window.scrollTo(0,0)

}