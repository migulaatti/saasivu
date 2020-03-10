'use strict';

document.getElementById('hakunappi').addEventListener('click', search);

let turkuurl = 'https://api.openweathermap.org/data/2.5/weather?lat=60.4518126&lon=22.2666302&appid=ecc5c5883a90cc204985b44b120ac985&units=metric&lang=fi';
fetch(turkuurl)
    .then(function(vastaus){
        return vastaus.json();
    }).then(function(json){
    const result1 = json;
    console.log(result1);
    turku(result1);
}).catch(function(error){
    console.log(error);
});

let rovaniemiurl = 'https://api.openweathermap.org/data/2.5/weather?lat=66.50394779999999&lon=25.7293906&appid=ecc5c5883a90cc204985b44b120ac985&units=metric&lang=fi';
fetch(rovaniemiurl)
    .then(function(vastaus){
        return vastaus.json();
    }).then(function(json){
    const result2 = json;
    console.log(result2);
    rovaniemi(result2);
}).catch(function(error){
    console.log(error);
});

let helsinkiurl = 'https://api.openweathermap.org/data/2.5/weather?lat=60.16985569999999&lon=24.9383791&appid=ecc5c5883a90cc204985b44b120ac985&units=metric&lang=fi';
fetch(helsinkiurl)
    .then(function(vastaus){
        return vastaus.json();
    }).then(function(json){
    const result3 = json;
    console.log(result3);
    helsinki(result3);
}).catch(function(error){
    console.log(error);
});

function turku(result1) {
    const temp1 = result1.main.temp;
    const desc1 = result1.weather[0].description;
    //const iconurl = "http://openweathermap.org/img/w/" + results.weather.icon + ".png";
    document.getElementById('turkutemp').innerHTML = temp1 + ' °C';
    document.getElementById('turkupilvi').innerHTML = desc1;
    if (desc1 == 'taivas on selkeä') {
        document.getElementById('kuvaturku').src = 'img/weather/clearsky.png';
    } else if (desc1 == 'vähän pilviä') {
        document.getElementById('kuvaturku').src = 'img/weather/fewclouds.png';
    } else if (desc1 == 'ajoittaisia pilviä') {
        document.getElementById('kuvaturku').src = 'img/weather/scatteredclouds.png';
    } else if (desc1 == 'hajanaisia pilviä') {
        document.getElementById('kuvaturku').src = 'img/weather/scatteredclouds.png';
    } else if (desc1 == 'pilvinen') {
        document.getElementById('kuvaturku').src = 'img/weather/brokenclouds.png';
    } else if (desc1 == 'suihku sade') {
        document.getElementById('kuvaturku').src = 'img/weather/showerrain.png';
    } else if (desc1 == 'sade') {
        document.getElementById('kuvaturku').src = 'img/weather/rain.png';
    } else if (desc1 == 'pieni sade') {
        document.getElementById('kuvaturku').src = 'img/weather/rain.png';
    } else if (desc1 == 'ukonilma') {
        document.getElementById('kuvaturku').src = 'img/weather/thunderstorm.png';
    } else if (desc1 == 'lumisade') {
        document.getElementById('kuvaturku').src = 'img/weather/snow.png';
    } else if (desc1 == 'pieni lumisade') {
        document.getElementById('kuvaturku').src = 'img/weather/snow.png';
    } else if (desc1 == 'sumu') {
        document.getElementById('kuvaturku').src = 'img/weather/mist.png';
    } else {
        document.getElementById('kuvaturku').src = '';
    }
    //document.getElementById('kuva').src = iconurl;
}

function rovaniemi(result2) {
    const temp2 = result2.main.temp;
    const desc2 = result2.weather[0].description;
    //const iconurl = "http://openweathermap.org/img/w/" + results.weather.icon + ".png";
    document.getElementById('rovaniemitemp').innerHTML = temp2 + ' °C';
    document.getElementById('rovaniemipilvi').innerHTML = desc2;
    if (desc2 == 'taivas on selkeä') {
        document.getElementById('kuvaniemi').src = 'img/weather/clearsky.png';
    } else if (desc2 == 'vähän pilviä') {
        document.getElementById('kuvaniemi').src = 'img/weather/fewclouds.png';
    } else if (desc2 == 'ajoittaisia pilviä') {
        document.getElementById('kuvaniemi').src = 'img/weather/scatteredclouds.png';
    } else if (desc2 == 'hajanaisia pilviä') {
        document.getElementById('kuvaniemi').src = 'img/weather/scatteredclouds.png';
    } else if (desc2 == 'pilvinen') {
        document.getElementById('kuvaniemi').src = 'img/weather/brokenclouds.png';
    } else if (desc2 == 'suihku sade') {
        document.getElementById('kuvaniemi').src = 'img/weather/showerrain.png';
    } else if (desc2 == 'sade') {
        document.getElementById('kuvaniemi').src = 'img/weather/rain.png';
    } else if (desc2 == 'pieni sade') {
        document.getElementById('kuvaniemi').src = 'img/weather/rain.png';
    } else if (desc2 == 'ukonilma') {
        document.getElementById('kuvaniemi').src = 'img/weather/thunderstorm.png';
    } else if (desc2 == 'lumisade') {
        document.getElementById('kuvaniemi').src = 'img/weather/snow.png';
    } else if (desc2 == 'pieni lumisade') {
        document.getElementById('kuvaniemi').src = 'img/weather/snow.png';
    } else if (desc2 == 'sumu') {
        document.getElementById('kuvaniemi').src = 'img/weather/mist.png';
    } else {
        document.getElementById('kuvaniemi').src = '';
    }
    //document.getElementById('kuva').src = iconurl;
}

function helsinki(result3) {
    const temp3 = result3.main.temp;
    const desc3 = result3.weather[0].description;
    //const iconurl = "http://openweathermap.org/img/w/" + results.weather.icon + ".png";
    document.getElementById('helsinkitemp').innerHTML = temp3 + ' °C';
    document.getElementById('helsinkipilvi').innerHTML = desc3;
    if (desc3 == 'taivas on selkeä') {
        document.getElementById('kuvahesa').src = 'img/weather/clearsky.png';
    } else if (desc3 == 'vähän pilviä') {
        document.getElementById('kuvahesa').src = 'img/weather/fewclouds.png';
    } else if (desc3 == 'ajoittaisia pilviä') {
        document.getElementById('kuvahesa').src = 'img/weather/scatteredclouds.png';
    } else if (desc3 == 'hajanaisia pilviä') {
        document.getElementById('kuvahesa').src = 'img/weather/scatteredclouds.png';
    } else if (desc3 == 'pilvinen') {
        document.getElementById('kuvahesa').src = 'img/weather/brokenclouds.png';
    } else if (desc3 == 'suihku sade') {
        document.getElementById('kuvahesa').src = 'img/weather/showerrain.png';
    } else if (desc3 == 'sade') {
        document.getElementById('kuvahesa').src = 'img/weather/rain.png';
    } else if (desc3 == 'pieni sade') {
        document.getElementById('kuvahesa').src = 'img/weather/rain.png';
    } else if (desc3 == 'ukonilma') {
        document.getElementById('kuvahesa').src = 'img/weather/thunderstorm.png';
    } else if (desc3 == 'lumisade') {
        document.getElementById('kuvahesa').src = 'img/weather/snow.png';
    } else if (desc3 == 'pieni lumisade') {
        document.getElementById('kuvahesa').src = 'img/weather/snow.png';
    } else if (desc3 == 'sumu') {
        document.getElementById('kuvahesa').src = 'img/weather/mist.png';
    } else {
        document.getElementById('kuvahesa').src = '';
    }
    //document.getElementById('kuva').src = iconurl;
}

function search() {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(document.getElementById("pac-input").value) + '&key=AIzaSyBPCxKjLbTCqZUem26OycA3xy5gfKDyat4';
    fetch(url) //haetaan osoitteen koordinaatit
        .then(function(vastaus){
            return vastaus.json();
        }).then(function(json){
        const result = json;
        console.log(result);
        weather(result);
    }).catch(function(error){
        console.log(error);
    });
}

function weather(result) {
    const lng = result.results[0].geometry.location.lng;
    const lat = result.results[0].geometry.location.lat;
    const url2 = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=ecc5c5883a90cc204985b44b120ac985' + '&units=metric' + '&lang=fi';
    fetch(url2)  //haetaan koordinaattien avulla sen paikan säätiedot
        .then(function(vastaus){
            return vastaus.json();
        }).then(function(json){
        const results = json;
        console.log(results);
        showWeather(results);
    }).catch(function(error){
        console.log(error);
    });
    //document.getElementById('sarjannimi').innerHTML = nimi;
    //document.getElementById('linkki').href = sivulinkki;
    //document.getElementById('summary').innerHTML = yhtveto;
}
//näytetään säätiedot
function showWeather(results) {
    const temp = results.main.temp;
    const loc = results.name;
    const wndspd = results.wind.speed;
    const pressure = results.main.pressure;
    const feelslike = results.main.feels_like;
    const desc = results.weather[0].description;
    //const iconurl = "http://openweathermap.org/img/wn/" + results.weather.icon + "@2x.png";
    document.getElementById('lampo').innerHTML = 'lämpötila: ' + temp + ' °C';
    document.getElementById('pilvi').innerHTML = desc;
    document.getElementById('windspd').innerHTML = 'tuulen nopeus: ' + wndspd + ' m/s';
    document.getElementById('pressure').innerHTML = 'ilmanpaine: ' + pressure + ' hpa';
    document.getElementById('feelslike').innerHTML = 'tuntuu: ' + feelslike + ' °C';
    document.getElementById('sijainti').innerHTML = loc + ':';
    if (desc == 'taivas on selkeä') {
        document.getElementById('kuva').src = 'img/weather/clearsky.png';
    } else if (desc == 'vähän pilviä') {
        document.getElementById('kuva').src = 'img/weather/fewclouds.png';
    } else if (desc == 'ajoittaisia pilviä') {
        document.getElementById('kuva').src = 'img/weather/scatteredclouds.png';
    } else if (desc == 'hajanaisia pilviä') {
        document.getElementById('kuva').src = 'img/weather/scatteredclouds.png';
    } else if (desc == 'pilvinen') {
        document.getElementById('kuva').src = 'img/weather/brokenclouds.png';
    } else if (desc == 'suihku sade') {
        document.getElementById('kuva').src = 'img/weather/showerrain.png';
    } else if (desc == 'sade') {
        document.getElementById('kuva').src = 'img/weather/rain.png';
    } else if (desc == 'pieni sade') {
        document.getElementById('kuva').src = 'img/weather/rain.png';
    } else if (desc == 'ukonilma') {
        document.getElementById('kuva').src = 'img/weather/thunderstorm.png';
    } else if (desc == 'lumisade') {
        document.getElementById('kuva').src = 'img/weather/snow.png';
    } else if (desc == 'pieni lumisade') {
        document.getElementById('kuva').src = 'img/weather/snow.png';
    } else if (desc == 'sumu') {
        document.getElementById('kuva').src = 'img/weather/mist.png';
    } else {
        document.getElementById('kuva').src = '';
    }
    //document.getElementById('kuva').src = iconurl;
}

function initAutocomplete() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 13,
        mapTypeId: 'roadmap'
    });

    let input = document.getElementById('pac-input');
    let searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    let markers = [];

    searchBox.addListener('places_changed', function() {
        let places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        let bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            let icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

//https://api.openweathermap.org/data/2.5/weather?lat=60.2&lon=25&appid=ecc5c5883a90cc204985b44b120ac985
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBPCxKjLbTCqZUem26OycA3xy5gfKDyat4