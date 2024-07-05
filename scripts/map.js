var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-1.62272, 54.97554]),
      zoom: 6
    })
  });

  var stadiumLoc = new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([-1.62272, 54.97554]))
             })
         ]
     })
 });
 map.addLayer(stadiumLoc);

var pos = document.getElementById("map");

navigator.geolocation.getCurrentPosition(showPositionOnMap);

function showPositionOnMap(position) {
    var userLoc = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude])),
                })
            ]
        })
    });
    map.addLayer(userLoc);
}


