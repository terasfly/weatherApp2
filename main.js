const city = document.getElementById('city');
const api = '6bbb6ab5e77e49599f382024232805';
const tempNow = document.getElementById('temp__now-degrs')
let nowImage = document.getElementById('weahter__condition-nowImage')
const liveTime = document.getElementById('time__date')

const todayDate = document.getElementById('today__date')

// const tempDegres = document.querySelector('.temp__degrs')

const btn = document.getElementById('btn')


// const weahterCondition = document.querySelectorAll('.weather__condition')
const temp1 = document.querySelector('.temp--1')

const tempDegrs = document.querySelectorAll('.temp__degrs');
const tempDegrs2 = document.querySelectorAll('.temp__degrs2');
const tempDegrs3 = document.querySelectorAll('.temp__degrs3');
// const tempDegrs33 = document.getElementById('temp__degrs3');
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



// forecast day & night degrees
const dayDegrees1 = document.querySelector('.forecast--day-degrees1')
const dayDegrees2 = document.querySelector('.forecast--day-degrees2')
const dayDegrees3 = document.querySelector('.forecast--day-degrees3')


const nightDegrees1 = document.querySelector('.forecast--night-degrees1')
const nightDegrees2 = document.querySelector('.forecast--night-degrees2')
const nightDegrees3 = document.querySelector('.forecast--night-degrees3')
    // forecast images

// const forecastImage1 = document.querySelector('.forc--image-1')
// const forecastImage2 = document.querySelector('.forc--image-2')
// const forecastImage3 = document.querySelector('.forc--image-3')

const forDay = document.querySelectorAll('.forDay')




// change color temperature
const changeColorTemp = document.querySelector('.changeColorTemperature')
const timeNow = new Date();


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
                // const dataTempNow = data.current.temp_c
                // console.log(dataTempNow)
                // tempNow.textContent = dataTempNow;
                // // show real date 

                // today.textContent



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
                temperatureNow(data)
                changeColorByTemp(data)
                    // forecastDayTemp(data)
                    // loopforecastDays(data)


                // loopforecastDays(data)







            });
    })
};


function temperatureNow(data) {



    const dataTempNow = Math.round(data.current.temp_c)
    console.log(dataTempNow)
    const add3 = dataTempNow + 2
    tempNow.textContent = add3;

    // show real date 

    today.textContent

}

function changeColorByTemp(data) {
    const dataTempNow1 = data.current.temp_c
    console.log(dataTempNow1)
}


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

    // console.log(getfuturedays)
    // let corectdays = getfuturedays.split(' ')[0]
    // console.log(corectdays)
    // const corectdays1 = corectdays.substring(5, 10)
    // console.log(corectdays1)
    futureDay1.textContent = getfuturedays;

}

function futuredays2(data) {
    const getfuturedays = data.forecast.forecastday[3].hour[1].time.split(' ')[0].substring(5, 10);

    // console.log(getfuturedays)
    // let corectdays = getfuturedays.split(' ')[0]
    // console.log(corectdays)
    // const corectdays1 = corectdays.substring(5, 10)
    // console.log(corectdays1)
    futureDay2.textContent = getfuturedays;

}

function futuredays3(data) {
    const getfuturedays = data.forecast.forecastday[4].hour[3].time.split(' ')[0].substring(5, 10);

    // console.log(getfuturedays)
    // let corectdays = getfuturedays.split(' ')[0]
    // console.log(corectdays)
    // const corectdays1 = corectdays.substring(5, 10)
    // console.log(corectdays1)
    futureDay3.textContent = getfuturedays;

}

function getFutureDay(dayElement, count) {
    const forecast = new Date()
        // console.log(forecast);

    const today = forecast.getDay()
        // console.log(today);

    const futureDayIndex = (today + count) % 7;
    // console.log(futureDayIndex);


    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        // console.log(weekdays);

    const futureDay = weekdays[futureDayIndex]
        // console.log(futureDay)

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
            const add2 = dataTempNow + 2
            tempNow.textContent = add2;
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
            changeColorByTemp(data)
                // loopforecastDays(data)
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
    // console.log(getIcon)
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

            break;

    }


}

// why background color not change

function today(data) {
    const getDate = data.location.localtime
    const justDate = getDate.split(' ')[0]
    todayDate.textContent = justDate




}

function tomorowDate(data) {
    const getTomorowDate = data.forecast.forecastday[1].date

    tomoroDate.textContent = getTomorowDate
}


// location current time

function time(data) {
    const getLiveTime = data.location.localtime

    const localTime = getLiveTime.split(' ')[1]

    liveTime.textContent = localTime

    const liveTime2 = parseInt(getLiveTime.split(' ')[1].split(':')[0])




}


// temperature of location
function temperature(data) {
    for (let i = 0; i < 24; i++) {
        const hour = data.forecast.forecastday[0].hour[i];
        let temp = hour.temp_c;
        temp += 2;
        const math = Math.round(temp);
        tempDegrs[i].textContent = math;
        console.log(tempDegrs);
        switch (true) {
            case math >= 35:
                tempDegrs[i].style.color = '#FF0000';
                break;
            case math >= 30:
                tempDegrs[i].style.color = '#FF4500';
                break;
            case math >= 25:
                tempDegrs[i].style.color = '#FF8C00';
                break;
            case math >= 20:
                tempDegrs[i].style.color = '#FFA07A';
                break;
            case math >= 15:
                tempDegrs[i].style.color = '#FFFFE0';
                break;
            case math >= 10:
                tempDegrs[i].style.color = '#D3D3D3';
                break;
            case math >= 2:
                tempDegrs[i].style.color = '#808080';
                break;
            case math >= -5:
                tempDegrs[i].style.color = '#ADD8E6';
                break;
            case math >= -10:
                tempDegrs[i].style.color = '#B0E0E6';
                break;
            case math >= -15:
                tempDegrs[i].style.color = '#87CEEB';
                break;
            case math >= -20:
                tempDegrs[i].style.color = '#0000CD';
                break;
            case math >= -25:
                tempDegrs[i].style.color = '#00008B';
                break;
            case math >= -30:
                tempDegrs[i].style.color = '#000066';
                break;
            default:
                // Choose a default color
                // tempDegrs[i].style.color = '#000000';
                break;
        }
    }
}








function temperature2(data) {
    for (let i = 0; i < 24; i++) {
        const hour = data.forecast.forecastday[1].hour[i];
        let temp = hour.temp_c;
        temp += 2;
        const math = Math.round(temp);
        tempDegrs2[i].textContent = math;
        switch (true) {
            case (math >= 35):
                tempDegrs2[i].style.color = '#FF0000';
                break;
            case (math >= 30):
                tempDegrs2[i].style.color = '#FF4500';
                break;
            case (math >= 25):
                tempDegrs2[i].style.color = '#FF8C00';
                break;
            case (math >= 20):
                tempDegrs2[i].style.color = '#FFA07A';
                break;
            case (math >= 15):
                tempDegrs2[i].style.color = '#FFFFE0';
                break;
            case (math >= 10):
                tempDegrs2[i].style.color = '#D3D3D3';
                break;
            case (math >= 2):
                tempDegrs2[i].style.color = '#808080';
                break;
            case (math >= -5):
                tempDegrs2[i].style.color = '#ADD8E6';
                break;
            case (math >= -10):
                tempDegrs2[i].style.color = '#B0E0E6';
                break;
            case (math >= -15):
                tempDegrs2[i].style.color = '#87CEEB';
                break;
            case (math >= -20):
                tempDegrs2[i].style.color = '#0000CD';
                break;
            case (math >= -25):
                tempDegrs2[i].style.color = '#00008B';
                break;
            case (math >= -30):
                tempDegrs2[i].style.color = '#000066';
                break;
            default:
                tempDegrs2[i].style.color = '#000000'; // Choose a default color
                break;
        }
    }
}



function temperature3(data) {
    for (let i = 0; i < 24; i++) {
        const hour = data.forecast.forecastday[1].hour[i];
        let temp = hour.temp_c;
        temp += 1;
        const math = Math.round(temp);
        tempDegrs3[i].textContent = math;
        switch (true) {
            case (math >= 35):
                tempDegrs3[i].style.color = '#FF0000';
                break;
            case (math >= 30):
                tempDegrs3[i].style.color = '#FF4500';
                break;
            case (math >= 25):
                tempDegrs3[i].style.color = '#FF8C00';
                break;
            case (math >= 20):
                tempDegrs3[i].style.color = '#FFA07A';
                break;
            case (math >= 15):
                tempDegrs3[i].style.color = '#FFFFE0';
                break;
            case (math >= 10):
                tempDegrs3[i].style.color = '#D3D3D3';
                break;
            case (math >= 2):
                tempDegrs3[i].style.color = '#808080';
                break;
            case (math >= -5):
                tempDegrs3[i].style.color = '#ADD8E6';
                break;
            case (math >= -10):
                tempDegrs3[i].style.color = '#B0E0E6';
                break;
            case (math >= -15):
                tempDegrs3[i].style.color = '#87CEEB';
                break;
            case (math >= -20):
                tempDegrs3[i].style.color = '#0000CD';
                break;
            case (math >= -25):
                tempDegrs3[i].style.color = '#00008B';
                break;
            case (math >= -30):
                tempDegrs3[i].style.color = '#000066';
                break;
            default:
                tempDegrs3[i].style.color = '#000000'; // Choose a default color
                break;
        }
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

        const realtime2 = realTime.split(' ')[1]



        timeHourly3[i].textContent = realtime2;
        // console.log(timeHourly)
    }
}



function images(data) {
    const imagesElements = document.querySelectorAll('.images');

    for (let i = 0; i < 24; i++) {
        const currentImage = data.forecast.forecastday[0].hour[i];
        const realTimes = currentImage.condition.icon;

        const cutRealtimes = realTimes.substring(35)

        imagesElements[i].setAttribute('src', `images/64x64/${cutRealtimes}`);
    }
}

// function for forecast every day

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

    }
}

// forecast images

// ...
const forecastImageElement1 = document.querySelector('.forc--image-1');
const forecastImageElement2 = document.querySelector('.forc--image-2');
const forecastImageElement3 = document.querySelector('.forc--image-3');

// ...



function forecastImage1(data) {
    // get days degrees

    const getDaydegrees1 = Math.round(data.forecast.forecastday[2].hour[15].temp_c)
    console.log(getDaydegrees1)
    const add = getDaydegrees1 + 3
    dayDegrees1.textContent = add
        // console.log(dayDegrees1)
        // get nights degrees

    const getNigthDegrees1 = Math.round(data.forecast.forecastday[2].hour[4].temp_c)
    const add1 = getNigthDegrees1 + 2
    nightDegrees1.textContent = add1


    switch (true) {
        case (getDaydegrees1 >= 35):
            dayDegrees1.style.color = '#FF0000';
            break;
        case (getDaydegrees1 >= 30):
            dayDegrees1.style.color = '#FF4500';
            break;
        case (getDaydegrees1 >= 25):
            dayDegrees1.style.color = '#FF8C00';
            break;
        case (getDaydegrees1 >= 20):
            dayDegrees1.style.color = '#FFA07A';
            break;
        case (getDaydegrees1 >= 15):
            dayDegrees1.style.color = '#FFFFE0';
            break;
        case (getDaydegrees1 >= 10):
            dayDegrees1.style.color = '#D3D3D3';
            break;
        case (getDaydegrees1 >= 2):
            dayDegrees1.style.color = '#808080';
            break;
        case (getDaydegrees1 >= -5):
            dayDegrees1.style.color = '#ADD8E6';
            break;
        case (getDaydegrees1 >= -10):
            dayDegrees1.style.color = '#B0E0E6';
            break;
        case (getDaydegrees1 >= -15):
            dayDegrees1.style.color = '#87CEEB';
            break;
        case (getDaydegrees1 >= -20):
            dayDegrees1.style.color = '#0000CD';
            break;
        case (getDaydegrees1 >= -25):
            dayDegrees1.style.color = '#00008B';
            break;
        case (getDaydegrees1 >= -30):
            dayDegrees1.style.color = '#000066';
            break;
        default:
            dayDegrees1.style.color = '#000000'; // Choose a default color
            break;
    }
    switch (true) {
        case (getNigthDegrees1 >= 35):
            nightDegrees1.style.color = '#FF0000';
            break;
        case (getNigthDegrees1 >= 30):
            nightDegrees1.style.color = '#FF4500';
            break;
        case (getNigthDegrees1 >= 25):
            nightDegrees1.style.color = '#FF8C00';
            break;
        case (getNigthDegrees1 >= 20):
            nightDegrees1.style.color = '#FFA07A';
            break;
        case (getNigthDegrees1 >= 15):
            nightDegrees1.style.color = '#FFFFE0';
            break;
        case (getNigthDegrees1 >= 10):
            nightDegrees1.style.color = '#D3D3D3';
            break;
        case (getNigthDegrees1 >= 2):
            nightDegrees1.style.color = '#808080';
            break;
        case (getNigthDegrees1 >= -5):
            nightDegrees1.style.color = '#ADD8E6';
            break;
        case (getNigthDegrees1 >= -10):
            nightDegrees1.style.color = '#B0E0E6';
            break;
        case (getNigthDegrees1 >= -15):
            nightDegrees1.style.color = '#87CEEB';
            break;
        case (getNigthDegrees1 >= -20):
            nightDegrees1.style.color = '#0000CD';
            break;
        case (getNigthDegrees1 >= -25):
            nightDegrees1.style.color = '#00008B';
            break;
        case (getNigthDegrees1 >= -30):
            nightDegrees1.style.color = '#000066';
            break;
        default:
            nightDegrees1.style.color = '#000000'; // Choose a default color
            break;
    }

    const addImage = data.forecast.forecastday[2].hour[15].condition.icon;
    console.log(addImage);

    const cutImage = addImage.substring(35);
    console.log(cutImage);
    forecastImageElement1.setAttribute('src', `images/64x64/${cutImage}`);
    console.log(forecastImageElement1);
}

function forecastImage2(data) {

    const getDaydegrees1 = Math.round(data.forecast.forecastday[3].hour[15].temp_c)
    const add = getDaydegrees1 + 3
    dayDegrees2.textContent = add


    // get nights degrees

    const getNigthDegrees1 = Math.round(data.forecast.forecastday[3].hour[4].temp_c)
    const add1 = getNigthDegrees1 + 2
    nightDegrees2.textContent = add1

    const addImage = data.forecast.forecastday[3].hour[15].condition.icon;
    console.log(addImage);


    switch (true) {
        case (getDaydegrees1 >= 35):
            dayDegrees2.style.color = '#FF0000';
            break;
        case (getDaydegrees1 >= 30):
            dayDegrees2.style.color = '#FF4500';
            break;
        case (getDaydegrees1 >= 25):
            dayDegrees2.style.color = '#FF8C00';
            break;
        case (getDaydegrees1 >= 20):
            dayDegrees2.style.color = '#FFA07A';
            break;
        case (getDaydegrees1 >= 15):
            dayDegrees2.style.color = '#FFFFE0';
            break;
        case (getDaydegrees1 >= 10):
            dayDegrees2.style.color = '#D3D3D3';
            break;
        case (getDaydegrees1 >= 2):
            dayDegrees2.style.color = '#808080';
            break;
        case (getDaydegrees1 >= -5):
            dayDegrees2.style.color = '#ADD8E6';
            break;
        case (getDaydegrees1 >= -10):
            dayDegrees2.style.color = '#B0E0E6';
            break;
        case (getDaydegrees1 >= -15):
            dayDegrees2.style.color = '#87CEEB';
            break;
        case (getDaydegrees1 >= -20):
            dayDegrees2.style.color = '#0000CD';
            break;
        case (getDaydegrees1 >= -25):
            dayDegrees2.style.color = '#00008B';
            break;
        case (getDaydegrees1 >= -30):
            dayDegrees2.style.color = '#000066';
            break;
        default:
            dayDegrees2.style.color = '#000000'; // Choose a default color
            break;
    }
    switch (true) {
        case (getNigthDegrees1 >= 35):
            nightDegrees2.style.color = '#FF0000';
            break;
        case (getNigthDegrees1 >= 30):
            nightDegrees2.style.color = '#FF4500';
            break;
        case (getNigthDegrees1 >= 25):
            nightDegrees2.style.color = '#FF8C00';
            break;
        case (getNigthDegrees1 >= 20):
            nightDegrees2.style.color = '#FFA07A';
            break;
        case (getNigthDegrees1 >= 15):
            nightDegrees2.style.color = '#FFFFE0';
            break;
        case (getNigthDegrees1 >= 10):
            nightDegrees2.style.color = '#D3D3D3';
            break;
        case (getNigthDegrees1 >= 2):
            nightDegrees2.style.color = '#808080';
            break;
        case (getNigthDegrees1 >= -5):
            nightDegrees2.style.color = '#ADD8E6';
            break;
        case (getNigthDegrees1 >= -10):
            nightDegrees2.style.color = '#B0E0E6';
            break;
        case (getNigthDegrees1 >= -15):
            nightDegrees2.style.color = '#87CEEB';
            break;
        case (getNigthDegrees1 >= -20):
            nightDegrees2.style.color = '#0000CD';
            break;
        case (getNigthDegrees1 >= -25):
            nightDegrees2.style.color = '#00008B';
            break;
        case (getNigthDegrees1 >= -30):
            nightDegrees2.style.color = '#000066';
            break;
        default:
            nightDegrees2.style.color = '#000000'; // Choose a default color
            break;
    }
    const cutImage = addImage.substring(35);
    console.log(cutImage);
    forecastImageElement2.setAttribute('src', `images/64x64/${cutImage}`);
    console.log(forecastImageElement2);
}

function forecastImage3(data) {

    const getDaydegrees1 = Math.round(data.forecast.forecastday[2].hour[15].temp_c)

    dayDegrees3.textContent = getDaydegrees1
    const add = getDaydegrees1 + 3
    dayDegrees3.textContent = add
        // get nights degrees

    const getNigthDegrees1 = Math.round(data.forecast.forecastday[2].hour[4].temp_c)
    const add1 = getNigthDegrees1 + 2
    nightDegrees3.textContent = add1

    const addImage = data.forecast.forecastday[4].hour[15].condition.icon;
    console.log(addImage);
    switch (true) {
        case (getDaydegrees1 >= 35):
            dayDegrees3.style.color = '#FF0000';
            break;
        case (getDaydegrees1 >= 30):
            dayDegrees3.style.color = '#FF4500';
            break;
        case (getDaydegrees1 >= 25):
            dayDegrees3.style.color = '#FF8C00';
            break;
        case (getDaydegrees1 >= 20):
            dayDegrees3.style.color = '#FFA07A';
            break;
        case (getDaydegrees1 >= 15):
            dayDegrees3.style.color = '#FFFFE0';
            break;
        case (getDaydegrees1 >= 10):
            dayDegrees3.style.color = '#D3D3D3';
            break;
        case (getDaydegrees1 >= 2):
            dayDegrees3.style.color = '#808080';
            break;
        case (getDaydegrees1 >= -5):
            dayDegrees3.style.color = '#ADD8E6';
            break;
        case (getDaydegrees1 >= -10):
            dayDegrees3.style.color = '#B0E0E6';
            break;
        case (getDaydegrees1 >= -15):
            dayDegrees3.style.color = '#87CEEB';
            break;
        case (getDaydegrees1 >= -20):
            dayDegrees3.style.color = '#0000CD';
            break;
        case (getDaydegrees1 >= -25):
            dayDegrees3.style.color = '#00008B';
            break;
        case (getDaydegrees1 >= -30):
            dayDegrees3.style.color = '#000066';
            break;
        default:
            dayDegrees3.style.color = '#000000'; // Choose a default color
            break;
    }
    switch (true) {
        case (getNigthDegrees1 >= 35):
            nightDegrees3.style.color = '#FF0000';
            break;
        case (getNigthDegrees1 >= 30):
            nightDegrees3.style.color = '#FF4500';
            break;
        case (getNigthDegrees1 >= 25):
            nightDegrees3.style.color = '#FF8C00';
            break;
        case (getNigthDegrees1 >= 20):
            nightDegrees3.style.color = '#FFA07A';
            break;
        case (getNigthDegrees1 >= 15):
            nightDegrees3.style.color = '#FFFFE0';
            break;
        case (getNigthDegrees1 >= 10):
            nightDegrees3.style.color = '#D3D3D3';
            break;
        case (getNigthDegrees1 >= 2):
            nightDegrees3.style.color = '#808080';
            break;
        case (getNigthDegrees1 >= -5):
            nightDegrees3.style.color = '#ADD8E6';
            break;
        case (getNigthDegrees1 >= -10):
            nightDegrees3.style.color = '#B0E0E6';
            break;
        case (getNigthDegrees1 >= -15):
            nightDegrees3.style.color = '#87CEEB';
            break;
        case (getNigthDegrees1 >= -20):
            nightDegrees3.style.color = '#0000CD';
            break;
        case (getNigthDegrees1 >= -25):
            nightDegrees3.style.color = '#00008B';
            break;
        case (getNigthDegrees1 >= -30):
            nightDegrees3.style.color = '#000066';
            break;
        default:
            nightDegrees3.style.color = '#000000'; // Choose a default color
            break;
    }

    const cutImage = addImage.substring(35);
    console.log(cutImage);
    forecastImageElement3.setAttribute('src', `images/64x64/${cutImage}`);
    console.log(forecastImageElement3);
}


function changeColorByTemp(data) {
    const dataTempNow = data.current.temp_c;
    const add3 = dataTempNow + 2
    tempNow.textContent = add3;
    switch (true) {
        case (add3 >= 35):
            tempNow.style.color = '#FF0000';
            break;
        case (add3 >= 30):
            tempNow.style.color = '#FF4500';
            break;
        case (add3 >= 25):
            tempNow.style.color = '#FF8C00';
            break;
        case (add3 >= 20):
            tempNow.style.color = '#FFA07A';
            break;
        case (add3 >= 15):
            tempNow.style.color = '#FFFFE0';
            break;
        case (add3 >= 10):
            tempNow.style.color = '#D3D3D3';
            break;
        case (add3 >= 2):
            tempNow.style.color = '#808080';
            break;
        case (add3 >= -5):
            tempNow.style.color = '#ADD8E6';
            break;
        case (add3 >= -10):
            tempNow.style.color = '#B0E0E6';
            break;
        case (add3 >= -15):
            tempNow.style.color = '#87CEEB';
            break;
        case (add3 >= -20):
            tempNow.style.color = '#0000CD';
            break;
        case (add3 >= -25):
            tempNow.style.color = '#00008B';
            break;
        case (add3 >= -30):
            tempNow.style.color = '#000066';
            break;
        default:
            tempNow.style.color = '#000000'; // Choose a default color
            break;
    }
}


// function forecastDayTemp(data) {
//     for (let i = 0; i < forDay.length; i++) {
//         const corectDay = forDay[i];
//         console.log(corectDay)

//     }
// }

// function loopforecastDays(data) {
//     const loopForecast = document.querySelectorAll('.loopForecast')
//     console.log(loopForecast)
//     for (let index = 0; index < 3; index++) {
//         const getDaydegrees1 = parseInt(Math.round(data.forecast.forecastday[2][i].hour[15].temp_c))

//         console.log(getDaydegrees1)
//     }
// }
