var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var humid = document.querySelector('#humidity')
var descrip = document.querySelector('#description')

apik = '3045dd712ffe6e702e3245525ac7fa38'


 window.onload=function(){
    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var tempature = data['main']['temp']
            var descrip = data['weather']['0']['description']
            var humidity = data['main']['humidity']
            // var descValue = data['weather'][0]['description']

            city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temparature: ${ tempature}`
            description.innerHTML = `Conditions: ${descrip}`
            humid.innerHTML = `Humidity: ${ humidity}`


        })
        .catch(err => alert('Wrong city name'))
    })
}
