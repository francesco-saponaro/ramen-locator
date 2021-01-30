let map;
let infowindow;
let request;
let service;

//MAP FUNCTIONS
//main map
function mainMap() {
    let center = new google.maps.LatLng(35.6762, 139.6503);

    map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 10
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(p) {

            let pos = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
            infowindow = new google.maps.InfoWindow({map:map, position:pos, content:"You Are Here"});

            map.setCenter(pos);

            request = {
                location: pos,
                radius: 30000,
                keyword: ["ramen"]
            };
            infowindow = new google.maps.InfoWindow;
            service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);
    
        }, function() {
            handleLocationError("Geolocation service failed", map.center());
        })
    } else {
        handleLocationError("No geolocation available", map.center());
    }
    google.maps.event.addDomListener(window, "load", mainMap);
}

//hakata map
function hakataMap() {
    let center = new google.maps.LatLng(33.5903, 130.4414);

    map = new google.maps.Map(document.getElementById("hakata-map"), {
        center: center,
        zoom: 13
    });

    request = {
        location:center,
        radius:30000,
        keyword: ["ramen"]
    }
    infowindow = new google.maps.InfoWindow;
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    google.maps.event.addDomListener(window, "load", hakataMap);
};

//sapporo map
function sapporoMap() {
    let center = new google.maps.LatLng(43.0618, 141.3545);

    map = new google.maps.Map(document.getElementById("sapporo-map"), {
        center: center,
        zoom: 13
    });

    request = {
        location:center,
        radius:30000,
        keyword: ["ramen"]
    }
    infowindow = new google.maps.InfoWindow;
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    google.maps.event.addDomListener(window, "load", sapporoMap);
};

//kitakata map
function kitakataMap() {
    let center = new google.maps.LatLng(37.6513, 139.8746);

    map = new google.maps.Map(document.getElementById("kitakata-map"), {
        center: center,
        zoom: 13
    });

    request = {
        location:center,
        radius:30000,
        keyword: ["ramen"]
    }
    infowindow = new google.maps.InfoWindow;
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    google.maps.event.addDomListener(window, "load", kitakataMap);
};

//wakayama map
function wakayamaMap() {
    let center = new google.maps.LatLng(34.2304, 135.170);

    map = new google.maps.Map(document.getElementById("wakayama-map"), {
        center: center,
        zoom: 12
    });

    request = {
        location:center,
        radius:30000,
        keyword: ["ramen"]
    }
    infowindow = new google.maps.InfoWindow;
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    google.maps.event.addDomListener(window, "load", wakayamaMap);
};

//onomichi map
function onomichiMap() {
    let center = new google.maps.LatLng(34.4089, 133.2049);

    map = new google.maps.Map(document.getElementById("onomichi-map"), {
        center: center,
        zoom: 14
    });

    request = {
        location:center,
        radius:30000,
        keyword: ["ramen"]
    }
    infowindow = new google.maps.InfoWindow;
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    google.maps.event.addDomListener(window, "load", onomichiMap);
};

//nagoya map
function nagoyaMap() {
    let center = new google.maps.LatLng(35.1815, 136.9066);

    map = new google.maps.Map(document.getElementById("nagoya-map"), {
        center: center,
        zoom: 13
    });

    request = {
        location:center,
        radius:30000,
        keyword: ["ramen"]
    }
    infowindow = new google.maps.InfoWindow;
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    google.maps.event.addDomListener(window, "load", nagoyaMap);
};

//okinawa map
function okinawaMap() {
    let center = new google.maps.LatLng(26.3344, 127.8056);

    map = new google.maps.Map(document.getElementById("okinawa-map"), {
        center: center,
        zoom: 12
    });

    request = {
        location:center,
        radius:30000,
        keyword: ["ramen"]
    }
    infowindow = new google.maps.InfoWindow;
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    google.maps.event.addDomListener(window, "load", okinawaMap);
};

//hakodate map
function hakodateMap() {
    let center = new google.maps.LatLng(41.7687, 140.7291);

    map = new google.maps.Map(document.getElementById("hakodate-map"), {
        center: center,
        zoom: 13
    });

    request = {
        location:center,
        radius:30000,
        keyword: ["ramen"]
    }
    infowindow = new google.maps.InfoWindow;
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    google.maps.event.addDomListener(window, "load", hakodateMap);
};

//kurume map
function kurumeMap() {
    let center = new google.maps.LatLng(33.3192, 130.5084);

    map = new google.maps.Map(document.getElementById("kurume-map"), {
        center: center,
        zoom: 10
    });

    request = {
        location:center,
        radius:30000,
        keyword: ["tonkotsu"]
    }
    infowindow = new google.maps.InfoWindow;
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    google.maps.event.addDomListener(window, "load", kurumeMap);
};

//kagoshima map
function kagoshimaMap() {
    let center = new google.maps.LatLng(32.7503, 129.8779);

    map = new google.maps.Map(document.getElementById("kagoshima-map"), {
        center: center,
        zoom: 13
    });

    request = {
        location:center,
        radius:30000,
        keyword: ["ramen"]
    }
    infowindow = new google.maps.InfoWindow;
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    google.maps.event.addDomListener(window, "load", kagoshimaMap);
};

//nagasaki map
function nagasakiMap() {
    let center = new google.maps.LatLng(32.7503, 129.8779);

    map = new google.maps.Map(document.getElementById("nagasaki-map"), {
        center: center,
        zoom: 13
    });

    request = {
        location:center,
        radius:30000,
        keyword: ["champon"]
    }
    infowindow = new google.maps.InfoWindow;
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    google.maps.event.addDomListener(window, "load", nagasakiMap);
};

//LOCATION ERROR FUNCTION
function handleLocationError(content, pos) {
    infowindow = new google.maps.InfoWindow({map:map, position:pos, content:content});
}

//MARKER FUNCTIONS
function callback(results, status) {
    if(status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    let marker = new google.maps.Marker({
        map:map,
        position: place.geometry.location,
        icon: "../media/images/ramen-map-icon.svg"
    });
    google.maps.event.addListener(marker, "click", function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

