var inputvalue = document.querySelector('#cityoutput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp= document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik="ce4cc872b456a604bd7ad54f75048d3a"
function convertion(val)
{
    return(val-273).toFixed(2)
}
btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res=> res.json())
    .then (data=>
    {
        var nameval = data['name'];
        var descrip = data['weather'][0]['description'];
        var temperature = data['main']['temp'];
        var windspeed = data['wind']['speed'];

        city.innerHTML=`weather of <span>${nameval}<span>`;
        temp.innerHTML = `Temperature: <span>${convertion(temperature)}°C</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
        wind.innerHTML= `Wind Speed: <span>${windspeed} km/h</span>`;
    })
    .catch(err => alert('You Entered Wrong City Name.'));
});