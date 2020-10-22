//selector variable
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var humid = document.querySelector('#humidi')
var descrip = document.querySelector('#description')

apik = '3045dd712ffe6e702e3245525ac7fa38'

function convertion(val){
    return (val - 273)
}

 //window.onload=function(){
    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
         //.then(data => console.log(data))
        .then(data => {
            var nameval = data['name']
            var tempature = data['main']['temp']
            var descrip = data['weather']['0']['description']
            var humidity = data['main']['humidity']
            var wndspd = data['wind']['speed']

            city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temparature: ${ convertion(tempature)}`
            description.innerHTML = `Conditions: ${descrip}`
            humid.innerHTML = `Humidity: ${ humidity}`
            wind.innerHTML = `Wind Speed: ${wndspd}`

        })
        .catch(err => alert('Wrong city name'))
    })
//}
