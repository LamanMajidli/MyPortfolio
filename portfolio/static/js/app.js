Mousemove hissesi


var krug = document.querySelector(".krug")
var tochka = document.querySelector(".tochka")
document.addEventListener("mousemove", function(e) {
    krug.style.cssText = tochka.style.css.Text = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

function followMouse(e) {
    console.log(e)

    let krug = document.querySelector('.krug')
    krug.style.left = `${e.clientX}px`
    krug.style.top = `${e.clientY}px`
}

let leftPos = 0;
let topPos = 0;
document.body.addEventListener('keydown', function(e) {
    let krug = document.querySelector('.krug')
    krug.style.left = `${e.clientX}px`
})


