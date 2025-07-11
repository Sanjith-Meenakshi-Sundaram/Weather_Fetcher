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
