
async function getWeather() {
    let city = document.getElementById("city").value.trim();

    let apiKey = "ffed90d6f79350bf3df47b0e799ebd41";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    if (data.cod == 200) {
        document.getElementById("result").innerHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } else {
        document.getElementById("result").innerHTML = data.message;
    }
}