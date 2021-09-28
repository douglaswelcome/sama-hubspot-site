buildOfficeList(offices);

mapboxgl.accessToken =
    'pk.eyJ1IjoiYWVzaW1wc29uIiwiYSI6ImNrcm1vdGM3eDd2ZTMycHBheTEwajhqcjMifQ.nHuWTNRfeQ83cdMK2qJnpw';

let mapCenter = [-9.888865, 30.638876];
let homeZoom = 1.4
let intVW= window.innerWidth;
if (intVW <= 816) {
    homeZoom = 0
}

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/aesimpson/ckrmovdwb2j2r17lqxf2p2lw5',
    center: mapCenter,
    zoom: homeZoom
});

map.addControl(new mapboxgl.NavigationControl({
    showCompass: false,
}));

map.on('load', function (e) {
    map.addSource('places', {
        type: 'geojson',
        data: offices
    });
});

offices.features.forEach(function (marker, i) {
    // Create a div element for the marker
    var el = document.createElement('div');
    // Add a class called 'marker' to each div
    el.className = 'bodymove_map_marker';
    el.id = "marker-" + i;


    if (marker.properties.city) {
        const labelClass = "bodymove_map_marker_label " + (marker.properties.labelPosition ?
            marker.properties.labelPosition : "");
        el.innerHTML = "<p class='" + labelClass + "'>" + marker.properties.city + "</p>";
    }

    // By default the image for your custom marker will be anchored
    // by its center. Adjust the position accordingly
    // Create the custom markers, set their position, and add to map
    new mapboxgl.Marker(el, {

        })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

    el.addEventListener('click', function (e) {
        flyToOffice(marker);
    })

});

function flyToOffice(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 11.5
    });
}

function flyToDefault() {
    map.flyTo({
        center: mapCenter,
        zoom: homeZoom
    });
    var poppers = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (poppers[0]) poppers[0].remove();
}

// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

function buildOfficeList(data) {
    // Iterate through the list of stores
    for (i = 0; i < data.features.length; i++) {
        var currentFeature = data.features[i];
        var prop = currentFeature.properties;
    }
}

// Add an event listeners for each marked point on the map
map.on('click', function (e) {
    // Query all the rendered points in the view
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['locations']
    });
    if (features.length) {
        var clickedPoint = features[0];
        // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
        var selectedFeature = clickedPoint.properties.address;

        for (var i = 0; i < stores.features.length; i++) {
            if (stores.features[i].properties.address === selectedFeature) {
                selectedFeatureIndex = i;
            }
        }
    }
});

// glober dudes. zoom it out
window.onload = function () {
    var globers = document.getElementById('globe');
    globers.onclick = function () {
        flyToDefault();
    };
};