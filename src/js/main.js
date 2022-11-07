const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const banners = $$('.banner-element')

var myIndex = 0;
carousel();

function carousel() {
    var i
    var banners = $$('.banner-element')
    for (i = 0; i < banners.length; i++) {
        banners[i].style.display = "none"
    }
    myIndex++
    if (myIndex > banners.length) {
        myIndex = 1
    }
    banners[myIndex - 1].style.display = "block"
    setTimeout(carousel, 5000)
}