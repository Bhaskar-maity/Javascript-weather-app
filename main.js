var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var temp = document.querySelector('#temp')

apik = '3045dd712ffe6e702e3245525ac7fa38'


 window.onload=function(){
    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var tempature = data['main']['temp']
            var windspeed = data['weather']['0']['description']
            var humidity = data['main']['humidity']


            

        })
        .catch(err => alert('Wrong city name'))
    })
}
