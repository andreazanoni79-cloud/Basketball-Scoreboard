let scHome = document.getElementById("schome")
let scGuest = document.getElementById("scguest")
let hmresult = 0
let gstresult = 0

function hplus1() {
    hmresult += 1
    schome.innerText = hmresult
}

function gplus1() {
    gstresult += 1
    scGuest.innerText = gstresult
}

function gplus2() {
    gstresult += 2
    scGuest.innerText = gstresult
}

function hplus2() {
    hmresult += 2
    scHome.innerText = hmresult
}

function hplus3() {
    hmresult += 3
    scHome.innerText = hmresult
}

function gplus3() {
    gstresult += 3
    scGuest.innerText = gstresult
}