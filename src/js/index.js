const keysNum = [...document.querySelectorAll(".num")]
const keysOp = [...document.querySelectorAll(".op")]
const keyRes = document.querySelector(".res")
const display = document.getElementById("display")
const ton = document.getElementById("ton")
const tclean = document.getElementById("tclean")
const tresponse = document.getElementById("tresponse")

let signal = false
let decimal = false

keysNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        signal = false
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

keysOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (!signal) {
            signal = true
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            if (evt.target.innerHTML == "x") {
                display.innerHTML += "*"
            } else {
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

tresponse.addEventListener("click", (evt) => {
    signal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

tclean.addEventListener("click", (evt) => {
    display.innerHTML = "0"
})