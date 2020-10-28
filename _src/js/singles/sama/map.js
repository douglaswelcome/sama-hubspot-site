

buildOfficeList(offices);

mapboxgl.accessToken = 'pk.eyJ1IjoiZHdlbGNvbWUiLCJhIjoiY2p6MXNkdmZiMGF3OTNibzFoMm1ocG05cSJ9.xZ8njmOGIVM4sLRiit4xdg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/dwelcome/ckfxhibcm08vf1aoaxw0c2nj5',
    center: [-122.419532, 37.764734],
    // initial zoom
    zoom: 11.5
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
    el.className = 'map-baby__marker';
    el.id = "marker-" + i;

    // By default the image for your custom marker will be anchored
    // by its center. Adjust the position accordingly
    // Create the custom markers, set their position, and add to map
    new mapboxgl.Marker(el, {
            offset: [0, -23]
        })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

    el.addEventListener('click', function (e) {

        // 1. Fly to the point
        flyToStore(marker);

        // 2. Close all other popups and display popup for clicked store
        createPopUp(marker);

        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        var listing = document.getElementById('listing-' + i);
        listing.classList.add('active');
    });

    el.addEventListener('mouseenter', function (e) {
        createPopUp(marker);
    });



});


function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 11.5
    });
}


function flyToDefault() {
    map.flyTo({
        center: [-24.547817, 36.980944],
        // initial zoom
        zoom: 1
    });
    var poppers = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (poppers[0]) poppers[0].remove();
}





//Popup shop. sell that organic honey, beard cream, and vintage scandanavian fashion pieces

function createPopUp(currentFeature) {
    removePopup();

    var popup = new mapboxgl.Popup({
            closeOnClick: false
        })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h6>' + 'Samasource HQ' + '</h6>' + '<h6 class="city">' + 'San Francisco, CA' + '</h6>')
        .addTo(map);
}

function removePopup() {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();
};


// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

// Bomb aka clear those active little buggers on the location list
function bombActive() {
    var activeItem = document.getElementsByClassName('active')
    if (activeItem[0]) {
        activeItem[0].classList.remove('active');
    }
};

// Build Location List

function buildOfficeList(data) {
    // Iterate through the list of stores
    for (i = 0; i < data.features.length; i++) {
        var currentFeature = data.features[i];
        // Shorten data.feature.properties to `prop` so we're not
        // writing this long form over and over again.
        var prop = currentFeature.properties;
        // Select the listing container in the HTML and append a div
        // with the class 'item' for each store
        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.className = 'locations__item';
        listing.id = 'listing-' + i;

        // Create a new link with the class 'title' for each store
        // and fill it with the store address
        var link = listing.appendChild(document.createElement('a'));
        link.href = 'javascript:void();';
        link.className = 'locations__office-link';
        link.dataPosition = i;
        link.innerHTML = '<span class="locations__office-title">' + '<h2>' + prop.city + '</h2>' + '</span>'
        // +
        // `<?xml version="1.0" encoding="utf-8"?>
        // <!-- Generator: Adobe Illustrator 23.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        // <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        //      width="20px" height="20px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
        // <path class="st0" d="M5.7,20c-0.3,0-0.7-0.1-0.9-0.4c-0.5-0.5-0.5-1.3,0-1.8l7.8-7.8L4.7,2.2c-0.5-0.5-0.5-1.3,0-1.8
        //     c0.5-0.5,1.3-0.5,1.8,0l8.7,8.7c0.5,0.5,0.5,1.3,0,1.8l-8.7,8.7C6.3,19.9,6,20,5.7,20z"/>
        // </svg>`
        ;
        link.addEventListener('click', function (e) {
            // Update the currentFeature to the store associated with the clicked link
            var clickedListing = data.features[this.dataPosition];

            flyToStore(clickedListing);
            createPopUp(clickedListing);

            var activeItem = document.getElementsByClassName('active');

            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
        });

        //  This Creates the list and details. A new div with the class 'details' for each store is created
        //   and fill it with the city and phone number

        var details = listing.appendChild(document.createElement('div'));

        details.className = "locations__details";

        var row1 = details.appendChild(document.createElement('p'));
        var row2 = details.appendChild(document.createElement('p'));
        var row3 = details.appendChild(document.createElement('p'));
        var row4 = details.appendChild(document.createElement('p'));
        var row5 = details.appendChild(document.createElement('p'));
        var row6 = details.appendChild(document.createElement('p'));

        row1.className = 'locations__row1';
        row2.className = 'locations__row2';
        row3.className = 'locations__row3';
        row4.className = 'locations__row4';
        row5.className = 'locations__row5';
        row6.className = 'locations__row6';

        

        if (prop.suite) {
            row1.innerHTML += prop.suite;
        };
        row2.innerHTML += prop.address;
        row3.innerHTML += prop.city;
        if (prop.state) {
            row3.innerHTML += ', ' + prop.state;
        };
        if (prop.postalCode) {
            row3.innerHTML += ' ' + prop.postalCode;
        };
        row4.innerHTML += prop.country;
        row5.innerHTML += prop.phone;
        row6.innerHTML += '<a href=\'mailto:' + prop.email+ '\'>' + prop.email +'</a>';
    
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
        // 1. Fly to the point
        flyToStore(clickedPoint);
        // 2. Close all other popups and display popup for clicked store
        createPopUp(clickedPoint);
        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        bombActive();
        // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
        var selectedFeature = clickedPoint.properties.address;

        for (var i = 0; i < stores.features.length; i++) {
            if (stores.features[i].properties.address === selectedFeature) {
                selectedFeatureIndex = i;
            }
        }
        // Select the correct list item using the found index and add the active class
        var listing = document.getElementById('listing-' + selectedFeatureIndex);
        listing.classList.add('active');
    }
});



// glober dudes. zoom it out
window.onload = function () {
    var globers = document.getElementById('globe');
    globers.onclick = function () {
        flyToDefault();
        bombActive();
    };
};