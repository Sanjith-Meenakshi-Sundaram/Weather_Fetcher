# Weather_Fetcher
## Date:11/7/2025
## Objective:
To demonstrate how to use Promises and async/await in JavaScript by fetching and displaying live weather data from an API. This activity reinforces real-world async data handling in web applications.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>WeatherNow</h1>```

Create an ```<input>``` for the city name

Add a ```<button>``` to trigger the fetch

Create a <div> to display the weather information

#### 2. Style with CSS:
Center the layout and style input and button

Style the weather output box with borders, padding, and a background color

Add hover effects for the button

#### 3. JavaScript with Promises and Async/Await:
Use fetch() to get weather data from a free API like https://api.weatherapi.com or a mock API

Wrap the fetch in an async function

Use await to wait for the response and parse it as JSON

Use .catch() to handle any errors in the promise

Display the temperature, description, and location in the output div
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>WeatherNow</title>
  <link rel="stylesheet" href="color.css" />
</head>
<body>
  <div class="container">
    <h1>WeatherNow</h1>
    <input type="text" id="city" placeholder="Enter city name" />
    <button id="getweather">Get Weather</button>
    <div id="weather"></div>
  </div>
  <script src="src.js"></script>
</body>
</html>

```
## CSS Code:
```
body{
  font-family: Arial, sans-serif;
  background: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container{
  background: #ccc;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 350px;
}
input{
  width: 80%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
button{
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover{
  background-color: #2980b9;
}
#weather{
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}

```
## JavaScript Code:
```
const apikey="99d0c5b9396e4e2aa5f91945251107";
document.getElementById("getweather").addEventListener("click", async () => {
  const city=document.getElementById("city").value.trim();
  const weatherBox=document.getElementById("weather");
  if (!city) {
    weatherBox.innerText = "Please enter a city name.";
    return;
  }
  const url=`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`;
  try{
    const response=await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data=await response.json();
    const {name,country}=data.location;
    const {temp_c,condition}=data.current;
    weatherBox.innerHTML=`
      <strong>${name}, ${country}</strong><br />
      Temperature: ${temp_c}°C<br />
      Condition: ${condition.text}<br />
      <img src="${condition.icon}" alt="weather icon" />
    `;
  }catch(error){
    weatherBox.innerText="Error fetching weather. Please try again.";
    console.error(error);
  }
});

```
## Output:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/215a718f-839c-4a77-8eba-ef193c93529a" />


## Result:
A mini module that successfully uses Promises and async/await to handle real-time API data, reinforcing asynchronous JavaScript patterns in a practical context.
