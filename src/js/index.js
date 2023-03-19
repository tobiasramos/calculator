const keysNum = [...document.querySelectorAll(".num")]
const keysOp = [...document.querySelectorAll(".op")]
const keyRes = document.querySelector(".res")
const display = document.querySelector(".display")
const ton = document.getElementById("ton")
const tclean = document.getElementById("tclean")
const tresponse = document.getElementById("tresponse")

let signal = false
let decimal = false

keysNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (evt.target.innerHTNL == ",") {
            if (!decimal) {
                decimal = true
                if (display.innerHTML == "0") {
                    display.innerHTML = "0,"
                } else {
                    display.innerHTML += evt.target.innerHTML
                }
            }
        } else {
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})