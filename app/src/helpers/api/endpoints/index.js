
const apiKey = "18ba72971212171497a5e216767b0cb8"; 
const baseUrl = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";
let latitude = 0;
let longitude = 0;

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": '*',
    "Access-Control-Allow-Methods": "GET, OPTIONS, HEAD",
    "Access-Control-Allow-Headers": "Origin, Methods, Content-Type"
  };

function getPosition(position) {
   latitude = position.coords.latitude;
   longitude = position.coords.longitude;
} 
// call GET API
export function fetchFromAPI() {
    const url = `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
    return fetch(url, {
      method: "GET",
      //credentials: "same-origin",
      headers
    })    
      .then(response => response.json());   
  }


export function fetchWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
}
  return fetchFromAPI();
}
