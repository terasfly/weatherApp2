const city = document.getElementById('city');
const api = '497bea2e477443d8bb185600232504';
const tempNow = document.getElementById('temp__now-degrs')
let nowImage = document.getElementById('weahter__condition-nowImage')


const btn = document.getElementById('btn')





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
                // get current weather condition from location

                const dataCondNow = data.current.condition.icon
                    // replace link to link which need for me
                const dataCondNowReplace = dataCondNow.replace('//cdn.weatherapi.com/weather', 'images')
                console.log(dataCondNowReplace)
                    // too current location add new image
                nowImage.setAttribute('src', dataCondNowReplace);








            });
    })
};

btn.addEventListener('click', () => {
    const searchCity = document.getElementById('search__city').value

    console.log(searchCity)
})
