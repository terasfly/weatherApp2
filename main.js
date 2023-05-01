const city = document.getElementById('city');
const api = '497bea2e477443d8bb185600232504';
const tempNow = document.getElementById('temp__now-degrs')
let nowImage = document.getElementById('weahter__condition-nowImage')
const liveTime = document.getElementById('time__date')

const todayDate = document.getElementById('today__date')

const tempDegres = document.querySelector('.temp__degrs')

const btn = document.getElementById('btn')




const firstBlockImage = document.querySelector('.firstBlockImage')







window.onload = () => {




    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${api}&q=${lat},${lon}`;
        console.log(url);

        fetch(url)
            .then((Response) => Response.json())
            .then((data) => {
                updateHour(0, document.querySelector('.time__hourly'), firstBlockImage, tempDegres, data);


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



function updateHour(hourIndex, timeElement, imageElement, tempElement, data) {
    const hour = data.forecast.forecastday[0].hour[hourIndex];
    const justTime = hour.time.split(' ')[1];
    timeElement.textContent = justTime;

    const image = hour.condition.icon.replace('//cdn.weatherapi.com/weather', 'images');
    imageElement.setAttribute('src', image);

    const temp = hour.temp_c;
    console.log(temp);
    tempElement.textContent = temp;
}

function time(data) {
    const getLiveTime = data.location.localtime
    console.log(getLiveTime)
    const localTime = getLiveTime.split(' ')[1]
    console.log(localTime)
    liveTime.textContent = localTime
}
