window.onload = start(); 

function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();

  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
     
      const data = response.data;

      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // Modifier le DOM pour demain
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      /*for(var i = 0; i < 3; i++){

      const main[i] = data.list[1].weather[0].main;
      const description[i] = data.list[1].weather[0].description;
      const temp[i] = data.list[1].temp.day;
      const icon[i] = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // Modifier le DOM pour demain
      document.getElementById('forecast-main-'+i).innerHTML = main[i];
      document.getElementById('forecast-more-info-'+i).innerHTML = description[i];
      document.getElementById('icon-weather-container-'+i).innerHTML = icon[i];
      document.getElementById('forecast-temp-'+i).innerHTML = `${temp[i]}°C`;
      }*/

      // Demain
      const main_2 = data.list[1].weather[0].main;
      const description_2 = data.list[1].weather[0].description;
      const temp_2 = data.list[1].temp.day;
      const icon_2 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      document.getElementById('forecast-main-2').innerHTML = main_2;
      document.getElementById('forecast-more-info-2').innerHTML = description_2;
      document.getElementById('icon-weather-container-2').innerHTML = icon_2;
      document.getElementById('forecast-temp-2').innerHTML = `${temp_2}°C`;

      // Après-demain
      const main_3 = data.list[2].weather[0].main;
      const description_3 = data.list[2].weather[0].description;
      const temp_3 = data.list[2].temp.day;
      const icon_3 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      document.getElementById('forecast-main-3').innerHTML = main_3;
      document.getElementById('forecast-more-info-3').innerHTML = description_3;
      document.getElementById('icon-weather-container-3').innerHTML = icon_3;
      document.getElementById('forecast-temp-3').innerHTML = `${temp_3}°C`;

      // J+3
      const main_4 = data.list[3].weather[0].main;
      const description_4 = data.list[3].weather[0].description;
      const temp_4 = data.list[3].temp.day;
      const icon_4 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);

      document.getElementById('forecast-main-4').innerHTML = main_4;
      document.getElementById('forecast-more-info-4').innerHTML = description_4;
      document.getElementById('icon-weather-container-4').innerHTML = icon_4;
      document.getElementById('forecast-temp-4').innerHTML = `${temp_4}°C`;

    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
