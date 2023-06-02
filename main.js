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
const tempDegrs3 = document.querySelectorAll('.temp__degrs3');
const timeHourly = document.querySelectorAll('.time__hourly')
const timeHourly2 = document.querySelectorAll('.time__hourly2')
const timeHourly3 = document.querySelectorAll('.time__hourly3')
    // let imagesElements = document.querySelectorAll('.images')
    // let imagesElements2 = document.querySelectorAll('.images2')
const weatherCondition = document.querySelectorAll('.weather__condition')
    // const weatherCondition2 = document.querySelectorAll('.weather__condition2')

const changeBackground = document.getElementById("change__backgr")

const tomoroDate = document.getElementById('tomorow--date')
    // Update temperature for each hour

const day1 = document.querySelector('.day-1')
const day2 = document.querySelector('.day-2')
const day3 = document.querySelector('.day-3')

const futureDay1 = document.getElementById('forecast--date1')
const futureDay2 = document.getElementById('forecast--date2')
const futureDay3 = document.getElementById('forecast--date3')
    // forecast images

// const forecastImage1 = document.querySelector('.forc--image-1')
// const forecastImage2 = document.querySelector('.forc--image-2')
// const forecastImage3 = document.querySelector('.forc--image-3')



const timeNow = new Date();
console.log(timeNow);

function getTime() {

}
const getHour = timeNow.getHours();
console.log(getHour);




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
                times3(data)
                images2(data)
                images3(data)
                temperature3(data)
                tomorowDate(data)
                localTime(data)
                futuredays(data)
                futuredays2(data)
                futuredays3(data)
                forecastImage1(data)
                forecastImage2(data)
                forecastImage3(data)









            });
    })
};




// function getDay1() {
//     const forecast = new Date()

//     const getDay1 = forecast.getDay()

//     const getday2 = getDay1 + 2;


//     const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//     const getWeekday = weekdays[getday2]

//     day1.textContent = getWeekday

// }

// function getDay2() {
//     const forecast = new Date()

//     const getDay1 = forecast.getDay()

//     const getday2 = getDay1 + 3;


//     const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//     const getWeekday = weekdays[getday2]

//     day2.textContent = getWeekday

// }

// function getDay3() {
//     const forecast = new Date()

//     const getDay1 = forecast.getDay()

//     const getday2 = getDay1 + 4;


//     const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//     const getWeekday = weekdays[getday2]

//     day3.textContent = getWeekday

// }
function futuredays(data) {
    const getfuturedays = data.forecast.forecastday[2].hour[3].time.split(' ')[0].substring(5, 10);

    console.log(getfuturedays)
        // let corectdays = getfuturedays.split(' ')[0]
        // console.log(corectdays)
        // const corectdays1 = corectdays.substring(5, 10)
        // console.log(corectdays1)
    futureDay1.textContent = getfuturedays;

}

function futuredays2(data) {
    const getfuturedays = data.forecast.forecastday[3].hour[1].time.split(' ')[0].substring(5, 10);

    console.log(getfuturedays)
        // let corectdays = getfuturedays.split(' ')[0]
        // console.log(corectdays)
        // const corectdays1 = corectdays.substring(5, 10)
        // console.log(corectdays1)
    futureDay2.textContent = getfuturedays;

}

function futuredays3(data) {
    const getfuturedays = data.forecast.forecastday[4].hour[3].time.split(' ')[0].substring(5, 10);

    console.log(getfuturedays)
        // let corectdays = getfuturedays.split(' ')[0]
        // console.log(corectdays)
        // const corectdays1 = corectdays.substring(5, 10)
        // console.log(corectdays1)
    futureDay3.textContent = getfuturedays;

}

function getFutureDay(dayElement, count) {
    const forecast = new Date()
    console.log(forecast);

    const today = forecast.getDay()
    console.log(today);

    const futureDayIndex = (today + count) % 7;
    console.log(futureDayIndex);


    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    console.log(weekdays);

    const futureDay = weekdays[futureDayIndex]
    console.log(futureDay)

    dayElement.textContent = futureDay
}


getFutureDay(day1, 2) // The day 2 days from now
getFutureDay(day2, 3) // The day 3 days from now
getFutureDay(day3, 4) // The day 4 days from now




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
            dataTempNow = Math.round(data.current.temp_c)

            tempNow.textContent = dataTempNow;
            // console.log(tempNow)
            getIconOfWeather(data)
            today(data)
            time(data)
            temperature(data)
            times(data)
            images(data)
            temperature2(data)
            times2(data)
            times3(data)
            images2(data)
            temperature3(data)
            tomorowDate(data)
            localTime(data)
            forecastImage1(data)
            forecastImage2(data)
            forecastImage3(data)
            weatherConditionNow(data)
                // localTimeBlocks(data)


        })
})
const backgroundWeather = {
    Sunny: 'images/64x64/night/sunny.jpg',
    clear: 'images/64x64/night/nightClear.jpg',
    rain: 'images/64x64/night/rain.jpg',
    cloudy: 'images/64x64/night/nightCloudy.jpg',
    overcast: 'images/64x64/night/overcast.jpg'
}


function weatherConditionNow(data) {


    const getIcon = data.current.condition.icon;
    console.log(getIcon)
    const replace = getIcon.replace('//cdn.weatherapi.com/weather', 'images')
    nowImage.setAttribute('src', replace);


}


function getIconOfWeather(data) {

    // const localTimeHour = parseInt(data.location.localtime.split(' ')[1].substring(0, 2));

    const localTime = data.location.localtime
    const localTimeArray = localTime.split(' ')
    const localTimeNow = localTimeArray[1].substring(0, 2)
    const localTimeNumber = parseInt(localTimeNow)



    // console.log(localTimeNumber)
    const getIcon = data.current.condition.icon;
    console.log(getIcon)
    const replace = getIcon.replace('//cdn.weatherapi.com/weather', 'images')
    nowImage.setAttribute('src', replace);


    const getWeatherConditionBackground = data.current.condition.text;

    switch (getWeatherConditionBackground) {
        // case 'Sunny':
        //     changeBackground.style.background = `url(${backgroundWeather.Sunny}) center/cover no-repeat`;
        //     break;
        case 'Moderate or heavy rain with thunder':
        case "Moderate rain at times":
        case 'Patchy light drizzle':
        case 'Patchy light rain':
        case 'Moderate rain':
        case 'Light rain':
        case 'Light rain shower':
        case 'Moderate or heavy rain shower':
        case 'Torrential rain shower':
            // case 'Patchy rain possible':
            changeBackground.style.background = `url(${backgroundWeather.rain}) center/cover no-repeat`;
            break;




        case 'Sunny':
        case 'Clear':
            if (localTimeNumber > 5 && localTimeNumber < 22) {
                changeBackground.style.background = `url(${backgroundWeather.Sunny}) center/cover no-repeat`;
            } else {
                changeBackground.style.background = `url(${backgroundWeather.
                cloudy}) center/cover no-repeat`;
            }
            break;
        case 'Partly cloudy':
        case 'Overcast':
            if (localTimeNumber > 5 && localTimeNumber < 22) {
                changeBackground.style.background = `url(${backgroundWeather.overcast}) center/cover no-repeat`;
            } else {
                changeBackground.style.background = `url(${backgroundWeather.
                    cloudy}) center/cover no-repeat`;

            }
            break;
        default:
            // Handle the default case or fallback image
            break;

    }


}

// why background color not change

function today(data) {
    const getDate = data.location.localtime
    const justDate = getDate.split(' ')[0]
    todayDate.textContent = justDate
        // console.log(justDate)



}

function tomorowDate(data) {
    const getTomorowDate = data.forecast.forecastday[1].date
        // console.log(getTomorowDate)
    tomoroDate.textContent = getTomorowDate
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
        temp += 2;

        const math = Math.round(temp)
            // console.log(temp)
        tempDegrs[i].textContent = math;
        // console.log(tempDegres)


    }
}





function temperature2(data) {
    for (let i = 0; i < 24; i++) {
        const hour = data.forecast.forecastday[1].hour[i];
        // forecast.forecastday[1].hour[4].temp_c
        // console.log(hour)
        let temp = hour.temp_c;
        temp += 2;
        // console.log(temp)
        const math = Math.round(temp)
            // console.log(temp)
        tempDegrs2[i].textContent = math;
        // console.log(tempDegres)
    }
}

function temperature3(data) {
    for (let i = 0; i < 24; i++) {
        const hour = data.forecast.forecastday[1].hour[i];
        // forecast.forecastday[1].hour[4].temp_c
        // console.log(hour)
        let temp = hour.temp_c;
        temp += 1;
        // console.log(temp)
        const math = Math.round(temp)
            // console.log(temp)
        tempDegrs3[i].textContent = math;
        // console.log(tempDegres)
    }
}


// const timeNow = new Date();
// console.log(timeNow);
// const getHour = timeNow.getHours();
// console.log(getHour);

//   blokas laikas kas kad weathercondition panaikintu

function localTime(data) {
    const getLocalTimeHour = parseInt(data.location.localtime.split(' ')[1].split(':')[0]);
    // console.log(getLocalTimeHour);

    for (let i = 0; i < 24; i++) {
        const forecastHour = parseInt(data.forecast.forecastday[0].hour[i].time.split(' ')[1].split(':')[0]);
        // console.log(forecastHour)

        if (forecastHour <= getLocalTimeHour) {
            if (i < 23) { // Check if it's not the last hour to avoid out of bounds
                weatherCondition[i].style.display = 'none'; // hide the next hour
            }
        } else {
            weatherCondition[i].style.display = 'block';
        }
    }
}








function times(data) {

    for (let i = 0; i < 24; i++) {

        const timehour = data.forecast.forecastday[0].hour[i];
        // console.log(timehour)
        const realTime = timehour.time;
        // console.log(realTime)
        const realtime2 = realTime.split(' ')[1]
            // console.log(realtime2)
        const corectTime = parseInt(realTime.split(' ')[1].split(':')[0])
        console.log(corectTime)

        if (corectTime <= getHour) {
            weatherCondition[i].style.display = 'none';
        } else {
            weatherCondition[i].style.display = 'block';
        }


        timeHourly[i].textContent = realtime2;
        // console.log(timeHourly)
    }
}


function times2(data) {


    for (let i = 0; i < 24; i++) {

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

function times3(data) {
    // const timeNow = new Date();
    // console.log(timeNow);
    // const getHour = timeNow.getHours();
    // console.log(getHour);

    for (let i = 0; i < 24; i++) {

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


        timeHourly3[i].textContent = realtime2;
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
    for (let x = 0; x < 24; x++) {
        const currentImage = data.forecast.forecastday[1].hour[x];
        const realTimes = currentImage.condition.icon;
        // console.log(realTimes)
        const cutRealtimes2 = realTimes.substring(35)
            // console.log(cutRealtimes2)
        imagesElements2[x].setAttribute('src', `images/64x64/${cutRealtimes2}`);
        // console.log(imagesElements2[x])
    }
}

function images3(data) {
    const imagesElements3 = document.querySelectorAll('.images3');
    for (let x = 0; x < 24; x++) {
        const currentImage = data.forecast.forecastday[1].hour[x];
        const realTimes = currentImage.condition.icon;
        // console.log(realTimes)
        const cutRealtimes2 = realTimes.substring(35)
            // console.log(cutRealtimes2)
        imagesElements3[x].setAttribute('src', `images/64x64/${cutRealtimes2}`);
        // console.log(imagesElements2[x])
    }
}

// forecast images

// ...
const forecastImageElement1 = document.querySelector('.forc--image-1');
const forecastImageElement2 = document.querySelector('.forc--image-2');
const forecastImageElement3 = document.querySelector('.forc--image-3');

// ...

function forecastImage1(data) {
    const addImage = data.forecast.forecastday[2].hour[15].condition.icon;
    console.log(addImage);

    const cutImage = addImage.substring(35);
    console.log(cutImage);
    forecastImageElement1.setAttribute('src', `images/64x64/${cutImage}`);
    console.log(forecastImageElement1);
}

function forecastImage2(data) {
    const addImage = data.forecast.forecastday[3].hour[15].condition.icon;
    console.log(addImage);

    const cutImage = addImage.substring(35);
    console.log(cutImage);
    forecastImageElement2.setAttribute('src', `images/64x64/${cutImage}`);
    console.log(forecastImageElement2);
}

function forecastImage3(data) {
    const addImage = data.forecast.forecastday[4].hour[15].condition.icon;
    console.log(addImage);

    const cutImage = addImage.substring(35);
    console.log(cutImage);
    forecastImageElement3.setAttribute('src', `images/64x64/${cutImage}`);
    console.log(forecastImageElement3);
}
