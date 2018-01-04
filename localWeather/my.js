let geoCoords;
document.addEventListener("DOMContentLoaded", function(event) { 
	if ("geolocation" in navigator) {
		/* geolocation is available */
		main();
	} else {
		alert("I'm sorry, but geolocation services are not supported by your browser.");
	}
});

function main(){
	var watchID = navigator.geolocation.getCurrentPosition(function(position) {
		let lat = position.coords.latitude,
			lon = position.coords.longitude;
		console.log(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`);
		fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
			.then(function(response){
				if(response.status != 200) return;
				response.json().then(function(data){
					document.getElementById("info").innerHTML = `
						<img src="https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&size=250x250&zoom=10" style="float:right">
						<p>You are at: ${data.name}</p>
						<p>${data.weather[0].description}</p>
						<img src="${data.weather[0].icon}" />
						<p>${data.main.temp} °C</p>
						<ul>
							<li>min: ${data.main.temp_min} °C</li>
							<li>max: ${data.main.temp_max} °C</li>
						</ul>
						<p>Humidity: ${data.main.humidity}</p>
						`
				});
			})
			.catch(function(err){
				console.log(err);
			});
	});
}
