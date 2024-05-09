// q=XXX - місто, для якого показати погоду
// +temp – температура
// +pressure - тиск
// description – опис
// +humidity – вологість
// +speed – швидкість вітру
// +deg - напрям у градусах
// icon - значок, де 10d код іконки

let temperature = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Dnipro&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((response) => response.json())
  .then((data) => {
    const divTemp = document.createElement("div");
    divTemp.innerText = `City: ${data.name} \n
        Temperature: ${data.main.temp}°C \n
        Pressure: ${data.main.pressure} \n
        Description: ${data.weather[0].description} \n
        Humidity: ${data.main.humidity}% \n
        Speed: ${data.wind.speed}m/s \n
        Wind: ${data.wind.deg}°`;
    document.querySelector(".temperature").appendChild(divTemp);  // ВАЖНО при создании дива через джс, нужно добавить его на страницу помимо того что создать
    const icon = `${data.weather[0].icon}`;
    iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
    document.querySelector("img").setAttribute("src", iconUrl);
  });
