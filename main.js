var inputval = document.querySelector('.cityinput')
var button = document.querySelector('.submit')
var city = document.querySelector('.cityoutput')
var temp = document.querySelector('.temp')

apik = '3045dd712ffe6e702e3245525ac7fa38'


// window.onload=function(){
document.addEventListener('DOMContentLoaded', function () {
button.addEventListener("click", ()=>{
    fetch(`api.openweathermap.org/data/2.5/weather?q=${inputval}&appid=${apik}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => alert('Wrong city name'))
})
})