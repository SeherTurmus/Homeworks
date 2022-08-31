let fname = prompt("İsminizi giriniz:")

let info = document.querySelector("#myName")

info.innerHTML = fname
var today = new Date()
var time = today.getHours() + ":" + today

let clock = document.querySelector(".clock")
console.log(today)
clock.innerHTML = `${today}`
/* info.innerHTML = `${info.innerHTML} ${fname}` */