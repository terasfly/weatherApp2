const city = document.getElementById('city');
const api = '497bea2e477443d8bb185600232504';
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




function time(data) {
    const getLiveTime = data.location.localtime
    console.log(getLiveTime)
    const localTime = getLiveTime.split(' ')[1]
    console.log(localTime)
    liveTime.textContent = localTime
}

function temperature(data) {
    for (let i = 0; i < 24; i++) {
        const hour = data.forecast.forecastday[0].hour[i];
        console.log(hour)
        const temp = hour.temp_c;
        const math = Math.round(temp)
        console.log(temp)
        tempDegrs[i].textContent = math;
    }
}

function times(data) {
    for (let i = 0; i < 24; i++) {
        const timehour = data.forecast.forecastday[0].hour[i];
        // console.log(hour)
        const realTime = timehour.time;
        const corectTime = realTime.split(' ')[1]

        timeHourly[i].textContent = corectTime;
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
