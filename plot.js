                var map;
                var InforObj = [];
                var centerCords = {
                    lat: 41.637631,
                    lng: -71.587407
                };
                var markersOnMap = [{
                        placeName: "Division Street",
                        LatLng: [{
                            lat: 41.647816,
                            lng: -71.595931
                        }]
                    },
                    {
                        placeName: "Hopkins Hill Road",
                        LatLng: [{
                            lat: 41.640404,
                            lng: -71.572973
                        }]
                    },
                    //{
                    //    placeName: "New London Turnpike",
                    //        lat: ,
                    //        lng: 
                    //    }]
                    //},
                ];
        
                window.onload = function () {
                    initMap();
                };
        
                function addMarker() {
                    for (var i = 0; i < markersOnMap.length; i++) {
                        var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName;
        
                        const marker = new google.maps.Marker({
                            position: markersOnMap[i].LatLng[0],
                            map: map
                        });
        
                        const infowindow = new google.maps.InfoWindow({
                            content: contentString,
                            maxWidth: 200
                        });
        
                        marker.addListener('click', function () {
                            closeOtherInfo();
                            infowindow.open(marker.get('map'), marker);
                            InforObj[0] = infowindow;
                        });
                    }
                }
        
                function closeOtherInfo() {
                    if (InforObj.length > 0) {
                        InforObj[0].set("marker", null);
                        InforObj[0].close();
                        InforObj.length = 0;
                    }
                }
        
                function initMap() {
                    map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 14,
                        center: centerCords
                    });
                    addMarker();
                }
