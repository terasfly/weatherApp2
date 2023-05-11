const city = document.getElementById('city');
const api = 'd54569a31e13474ab52230238231105';
const tempNow = document.getElementById('temp__now-degrs')
let nowImage = document.getElementById('weahter__condition-nowImage')
const liveTime = document.getElementById('time__date')

const todayDate = document.getElementById('today__date')

const tempDegres = document.querySelector('.temp__degrs')

const btn = document.getElementById('btn')


// const weahterCondition = document.querySelectorAll('.weather__condition')
const temp1 = document.querySelector('.temp--1')

const tempDegrs = document.querySelectorAll('.temp__degrs');
const timeHourly = document.querySelectorAll('.time__hourly')
let imagesElements = document.querySelectorAll('.images')
const weatherCondition = document.querySelectorAll('.weather__condition')

// Update temperature for each hour




window.onload = () => {



    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${api}&q=${lat},${lon}`;
        console.log(url);

        fetch(url)
            .then((Response) => Response.json())
            .then((data) => {






                // load page get location
                const cityName = data.location.name;
                city.textContent = cityName;
                // get current temp from location
                const dataTempNow = data.current.temp_c
                tempNow.textContent = dataTempNow;
                // show real date 
                today.textContent



                getIconOfWeather(data)
                today(data)
                time(data)
                temperature(data)
                times(data)
                images(data)





            });
    })
};

btn.addEventListener('click', () => {
    const searchCity = document.getElementById('search__city').value




    // getIconOfWeather()

    const url2 = `https://api.weatherapi.com/v1/forecast.json?key=${api}&q=${searchCity}`;
    fetch(url2)
        .then((Response) => Response.json())
        .then((data) => {


            console.log(url2)
            cityName = data.location.name;
            city.textContent = cityName;
            dataTempNow = data.current.temp_c
            tempNow.textContent = dataTempNow;
            getIconOfWeather(data)
            today(data)
            time(data)
            temperature(data)
            times(data)
            images(data)


        })
})

function getIconOfWeather(data) {
    const getIcon = data.current.condition.icon
    const replace = getIcon.replace('//cdn.weatherapi.com/weather', 'images')
    nowImage.setAttribute('src', replace);
}

function today(data) {
    const getDate = data.location.localtime
    const justDate = getDate.split(' ')[0]
    todayDate.textContent = justDate
    console.log(justDate)



}


// location current time

function time(data) {
    const getLiveTime = data.location.localtime
        // console.log(getLiveTime)
    const localTime = getLiveTime.split(' ')[1]
        // console.log(localTime)
    liveTime.textContent = localTime
}

// temperature of location
function temperature(data) {
    for (let i = 0; i < 24; i++) {
        const hour = data.forecast.forecastday[0].hour[i];
        // console.log(hour)
        const temp = hour.temp_c;
        const math = Math.round(temp)
            // console.log(temp)
        tempDegrs[i].textContent = math;
        // console.log(tempDegres)
    }
}


function times(data) {
    const timeNow = new Date();
    console.log(timeNow);
    const getHour = timeNow.getHours();
    console.log(getHour);

    for (let i = 0; i < 24; i++) {

        const timehour = data.forecast.forecastday[0].hour[i];
        // console.log(hour)
        const realTime = timehour.time;
        console.log(realTime)
        const realtime2 = realTime.split(' ')[1]
        const corectTime = parseInt(realTime.split(' ')[1].split(':')[0])
        console.log(corectTime)

        if (corectTime < getHour) {
            weatherCondition[i].style.display = 'none';
        } else {
            weatherCondition[i].style.display = 'block';
        }


        timeHourly[i].textContent = realtime2;
        console.log(timeHourly)
    }
}



function images(data) {
    const imagesElements = document.querySelectorAll('.images');

    for (let i = 0; i < 24; i++) {
        const currentImage = data.forecast.forecastday[0].hour[i];
        const realTimes = currentImage.condition.icon;
        console.log(realTimes)
        const cutRealtimes = realTimes.substring(35)
        console.log(cutRealtimes)
        imagesElements[i].setAttribute('src', `images/64x64/${cutRealtimes}`);
    }
}
