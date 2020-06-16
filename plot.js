// plot.js
// last updated: 15 june 2020
// author: Elliot Vosburgh
// API req: Google Maps

var map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }

    var iconBase = '/icons/';

    var icons = {
        litter: {
            icon: iconBase + 'litter_maps.png'
        },
        wasteDump: {
            icon: iconBase + 'wasteDump_maps.png'
        },
        oilDeposit: {
            icon: iconBase + 'oilDeposit_maps.png'
        }
    };

    var markers = [
        {
            position: new google.maps.LatLn(// coordinates),
            type: // icon name
        },{
            position: new google.maps.LatLn(// coordinates),
            type: // icon name
        }
        /*
        * ... add markers for incident points
        */
    ];

    // spawn markers
    for (var i = 0; i < markers.length; i++) {
        var spawnedMarker = new google.maps.Marker({
            position: markers[i].position,
            icon: icons[markers[i].type].icon,
            map: map
        })
    };
};
