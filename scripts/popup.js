let but1 = document.querySelector(".banner .button-reserve1")
let but2 = document.querySelectorAll('.rooms .button-reserve2')
let popup = document.querySelector('.pop-up')
let close = document.querySelector(".close-button")
let white = document.querySelector(".white")

function pupupShow(elem){
    elem.style.display = "block"
}

function popupHide(elem){
    elem.style.display = "none"
}

but1.addEventListener("click", function() {
    pupupShow(popup)
    pupupShow(white)
})

for(let i=0; i<but2.length;  i++){
    but2[i].addEventListener("click", function() {
        pupupShow(popup)
        pupupShow(white)
    })
}

close.addEventListener('click', function(){
    popupHide(popup)
    popupHide(white)
})

console.log(but2)