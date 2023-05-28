const city = document.getElementById('city');
const api = '6bbb6ab5e77e49599f382024232805';
const tempNow = document.getElementById('temp__now-degrs')
let nowImage = document.getElementById('weahter__condition-nowImage')
const liveTime = document.getElementById('time__date')

const todayDate = document.getElementById('today__date')

const tempDegres = document.querySelector('.temp__degrs')

const btn = document.getElementById('btn')


// const weahterCondition = document.querySelectorAll('.weather__condition')
const temp1 = document.querySelector('.temp--1')

const tempDegrs = document.querySelectorAll('.temp__degrs');
const tempDegrs2 = document.querySelectorAll('.temp__degrs2');
const timeHourly = document.querySelectorAll('.time__hourly')
const timeHourly2 = document.querySelectorAll('.time__hourly2')
    // let imagesElements = document.querySelectorAll('.images')
    // let imagesElements2 = document.querySelectorAll('.images2')
const weatherCondition = document.querySelectorAll('.weather__condition')

const changeBackground = document.getElementById("change__backgr")
    // Update temperature for each hour


const timeNow = new Date();
console.log(timeNow);
const getHour = timeNow.getHours();
// console.log(getHour);



window.onload = () => {



    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${api}&q=${lat},${lon}&days=5#`;
        // console.log(url);

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
                temperature2(data)
                times2(data)
                images2(data)









            });
    })
};

btn.addEventListener('click', () => {

    // changeBackground.style.backgroundColor = 'red'

    const searchCity = document.getElementById('search__city').value




    // getIconOfWeather()

    const url2 = `https://api.weatherapi.com/v1/forecast.json?key=${api}&q=${searchCity}&days=5#`;
    fetch(url2)
        .then((Response) => Response.json())
        .then((data) => {


            // console.log(url2)
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
            temperature2(data)
            times2(data)
            images2(data)


        })
})

// function getIconOfWeather(data) {
//     const getIcon = data.current.condition.icon
//     const getWeatherConditionBackground = data.current.condition.text
//     if (getWeatherConditionBackground === 'Clear') {
//         body.style.backgroundColor = 'red';
//     }
//     console.log(getWeatherConditionBackground);
//     console.log(getWeatherConditionBackground)
//     const replace = getIcon.replace('//cdn.weatherapi.com/weather', 'images')
//     nowImage.setAttribute('src', replace);
// }

// const backgroundWeather = {
//     Sunny: 'images/64x64/day/sam-schooler-E9aetBe2w40-unsplash.jpg',
//     overcast: 'images/64x64/day/sam-schooler-E9aetBe2w40-unsplash.jpg'
// }

function getIconOfWeather(data) {
    // changeBackground.style.backgroundPosition = "center";
    // changeBackground.style.backgroundRepeat = "no-repeat";
    // changeBackground.style.backgroundSize = "100% 100%";
    // changeBackground.style.height = "100vh";

    const getIcon = data.current.condition.icon;
    const getWeatherConditionBackground = data.current.condition.text;

    // switch (getWeatherConditionBackground) {
    //     case 'Sunny':
    //         changeBackground.style.background = `url(${backgroundWeather.Sunny}) center/cover no-repeat`;
    //         break;
    //     case 'Overcast':
    //         changeBackground.style.background = `url(${backgroundWeather.overcast}) center/cover no-repeat`;
    //         break;
    //         // Add more cases for other weather conditions if needed
    //     default:
    //         // Handle the default case or fallback image
    //         break;
    // }

    const replace = getIcon.replace('//cdn.weatherapi.com/weather', 'images')
    nowImage.setAttribute('src', replace);
}

// why background color not change

function today(data) {
    const getDate = data.location.localtime
    const justDate = getDate.split(' ')[0]
    todayDate.textContent = justDate
        // console.log(justDate)



}


// location current time

function time(data) {
    const getLiveTime = data.location.localtime
        // console.log(getLiveTime)
    const localTime = getLiveTime.split(' ')[1]

    liveTime.textContent = localTime
        // console.log(localTime)
    const liveTime2 = parseInt(getLiveTime.split(' ')[1].split(':')[0])
        // console.log(liveTime2)


    // if (localTime < getHour) {
    //     weatherCondition[k].style.display = 'none';
    // } else {
    //     weatherCondition[k].style.display = 'block';
    // }

    // const realTime = timehour.time;
    // console.log(realTime)
    // const realtime2 = realTime.split(' ')[1]
    // console.log(realtime2)
    // const corectTime = parseInt(realTime.split(' ')[1].split(':')[0])
    // console.log(corectTime)



    // if (localTime < getHour) {
    //     weatherCondition[k].style.display = 'none';
    // } else {
    //     weatherCondition[k].style.display = 'block';
    // }
}


// temperature of location
function temperature(data) {
    for (let i = 0; i < 24; i++) {
        const hour = data.forecast.forecastday[0].hour[i];



        // console.log(hour)
        let temp = hour.temp_c;
        temp += 1;

        const math = Math.round(temp)
            // console.log(temp)
        tempDegrs[i].textContent = math;
        // console.log(tempDegres)


    }
}





function temperature2(data) {
    for (let i = 0; i < 23; i++) {
        const hour = data.forecast.forecastday[1].hour[i];
        // forecast.forecastday[1].hour[4].temp_c
        // console.log(hour)
        let temp = hour.temp_c;
        temp += 2;
        const math = Math.trunc(temp)
            // console.log(temp)
        tempDegrs2[i].textContent = math;
        // console.log(tempDegres)
    }
}


// const timeNow = new Date();
// console.log(timeNow);
// const getHour = timeNow.getHours();
// console.log(getHour);

function times(data) {

    for (let i = 0; i < 24; i++) {

        const timehour = data.forecast.forecastday[0].hour[i];
        // console.log(hour)
        const realTime = timehour.time;
        // console.log(realTime)
        const realtime2 = realTime.split(' ')[1]
            // console.log(realtime2)
        const corectTime = parseInt(realTime.split(' ')[1].split(':')[0])
            // console.log(corectTime)

        if (corectTime < getHour) {
            weatherCondition[i].style.display = 'none';
        } else {
            weatherCondition[i].style.display = 'block';
        }


        timeHourly[i].textContent = realtime2;
        // console.log(timeHourly)
    }
}

function times2(data) {
    // const timeNow = new Date();
    // console.log(timeNow);
    // const getHour = timeNow.getHours();
    // console.log(getHour);

    for (let i = 0; i < 23; i++) {

        const timehour2 = data.forecast.forecastday[1].hour[i];
        // console.log(hour)
        const realTime = timehour2.time;
        // console.log(realTime)
        const realtime2 = realTime.split(' ')[1]
            // const corectTime = parseInt(realTime.split(' ')[1].split(':')[0])
            // console.log(corectTime)

        // if (corectTime < getHour) {
        //     weatherCondition[i].style.display = 'none';
        // } else {
        //     weatherCondition[i].style.display = 'block';
        // }


        timeHourly2[i].textContent = realtime2;
        // console.log(timeHourly)
    }
}



function images(data) {
    const imagesElements = document.querySelectorAll('.images');

    for (let i = 0; i < 24; i++) {
        const currentImage = data.forecast.forecastday[0].hour[i];
        const realTimes = currentImage.condition.icon;
        // console.log(realTimes)
        const cutRealtimes = realTimes.substring(35)
            // console.log(cutRealtimes)
        imagesElements[i].setAttribute('src', `images/64x64/${cutRealtimes}`);
    }
}

function images2(data) {
    const imagesElements2 = document.querySelectorAll('.images2');
    for (let x = 0; x < 23; x++) {
        const currentImage = data.forecast.forecastday[1].hour[x];
        const realTimes = currentImage.condition.icon;
        // console.log(realTimes)
        const cutRealtimes2 = realTimes.substring(35)
            // console.log(cutRealtimes2)
        imagesElements2[x].setAttribute('src', `images/64x64/${cutRealtimes2}`);
        // console.log(imagesElements2[x])
    }
}
