<<<<<<< Updated upstream
buildOfficeList(offices),mapboxgl.accessToken="pk.eyJ1IjoiZHdlbGNvbWUiLCJhIjoiY2p6MXNkdmZiMGF3OTNibzFoMm1ocG05cSJ9.xZ8njmOGIVM4sLRiit4xdg";var map=new mapboxgl.Map({container:"map",style:"mapbox://styles/dwelcome/ckfxhibcm08vf1aoaxw0c2nj5",center:[-122.419532,37.764734],zoom:11.5});function flyToStore(e){map.flyTo({center:e.geometry.coordinates,zoom:11.5})}function flyToDefault(){map.flyTo({center:[-24.547817,36.980944],zoom:1});var e=document.getElementsByClassName("mapboxgl-popup");e[0]&&e[0].remove()}function createPopUp(e){removePopup();new mapboxgl.Popup({closeOnClick:!1}).setLngLat(e.geometry.coordinates).setHTML('<h6>Samasource HQ</h6><h6 class="city">San Francisco, CA</h6>').addTo(map)}function removePopup(){var e=document.getElementsByClassName("mapboxgl-popup");e[0]&&e[0].remove()}function bombActive(){var e=document.getElementsByClassName("active");e[0]&&e[0].classList.remove("active")}function buildOfficeList(e){for(i=0;i<e.features.length;i++){var t=e.features[i].properties,a=document.getElementById("listings").appendChild(document.createElement("div"));a.className="locations__item",a.id="listing-"+i;var o=a.appendChild(document.createElement("a"));o.href="javascript:void();",o.className="locations__office-link",o.dataPosition=i,o.innerHTML='<span class="locations__office-title"><h2>'+t.city+"</h2></span>",o.addEventListener("click",(function(t){var a=e.features[this.dataPosition];flyToStore(a),createPopUp(a);var o=document.getElementsByClassName("active");o[0]&&o[0].classList.remove("active"),this.parentNode.classList.add("active")}));var n=a.appendChild(document.createElement("div"));n.className="locations__details";var s=n.appendChild(document.createElement("p")),c=n.appendChild(document.createElement("p")),r=n.appendChild(document.createElement("p")),l=n.appendChild(document.createElement("p")),m=n.appendChild(document.createElement("p")),d=n.appendChild(document.createElement("p"));s.className="locations__row1",c.className="locations__row2",r.className="locations__row3",l.className="locations__row4",m.className="locations__row5",d.className="locations__row6",t.suite&&(s.innerHTML+=t.suite),c.innerHTML+=t.address,r.innerHTML+=t.city,t.state&&(r.innerHTML+=", "+t.state),t.postalCode&&(r.innerHTML+=" "+t.postalCode),l.innerHTML+=t.country,m.innerHTML+=t.phone,d.innerHTML+="<a href='mailto:"+t.email+"'>"+t.email+"</a>"}}map.addControl(new mapboxgl.NavigationControl({showCompass:!1})),map.on("load",(function(e){map.addSource("places",{type:"geojson",data:offices})})),offices.features.forEach((function(e,t){var a=document.createElement("div");a.className="map-baby__marker",a.id="marker-"+t,new mapboxgl.Marker(a,{offset:[0,-23]}).setLngLat(e.geometry.coordinates).addTo(map),a.addEventListener("click",(function(a){flyToStore(e),createPopUp(e);var o=document.getElementsByClassName("active");a.stopPropagation(),o[0]&&o[0].classList.remove("active"),document.getElementById("listing-"+t).classList.add("active")})),a.addEventListener("mouseenter",(function(t){createPopUp(e)}))})),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),map.on("click",(function(e){var t=map.queryRenderedFeatures(e.point,{layers:["locations"]});if(t.length){var a=t[0];flyToStore(a),createPopUp(a),bombActive();for(var o=a.properties.address,n=0;n<stores.features.length;n++)stores.features[n].properties.address===o&&(selectedFeatureIndex=n);document.getElementById("listing-"+selectedFeatureIndex).classList.add("active")}})),window.onload=function(){document.getElementById("globe").onclick=function(){flyToDefault(),bombActive()}};
=======
var offices={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[-122.419532,37.764734]},properties:{phoneFormatted:"xxxxxxxxxx",phone:"xxxxxxxxxx",suite:"Suite 301",address:"2017 Mission St",city:"San Francisco",country:"United States",crossStreet:"at 16th Street",postalCode:"94110",state:"CA"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.982968,40.694663]},properties:{phoneFormatted:"xxxxxxxxxx",phone:"xxxxxxxxxx",suite:"Suite 702",address:"325 Gold Street",city:"New York",country:"United States",crossStreet:"",postalCode:"11201",state:"NY"}},{type:"Feature",geometry:{type:"Point",coordinates:[-83.994403,9.902545]},properties:{phoneFormatted:"xxxxxxxxxx",phone:"xxxxxxxxxx",suite:"Building 1, 3rd Floor",address:"Terra Campus Corporativo",city:"Tres Rios",country:"Costa Rica",crossStreet:"",postalCode:"",state:"Cartago Province"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.596279,45.52756]},properties:{phoneFormatted:"xxxxxxxxxx",phone:"xxxxxxxxxx",suite:"Suite 710",address:"5455 Av. De Gaspé",city:"Montréal",country:"Canada",crossStreet:"",postalCode:"H2T 3B3",state:"Québec"}},{type:"Feature",geometry:{type:"Point",coordinates:[4.318325,52.078561]},properties:{phoneFormatted:"xxxxxxxxxx",phone:"xxxxxxxxxx",address:"Kalvermarkt 53",city:"The Hague",country:"Netherlands",crossStreet:"",postalCode:"2511 CB",state:""}},{type:"Feature",geometry:{type:"Point",coordinates:[36.867291,-1.329689]},properties:{phoneFormatted:"xxxxxxxxxx",phone:"xxxxxxxxxx",suite:"2nd Floor, Block D3, Unit D1b and D2",address:"LR NO 12081/10 Sameer Business Park Mombasa Road",city:"Nairobi",country:"Kenya",crossStreet:"",postalCode:"",state:""}},{type:"Feature",geometry:{type:"Point",coordinates:[32.316805,2.787991]},properties:{phoneFormatted:"xxxxxxxxxx",phone:"xxxxxxxxxx",address:"Plot 3 B Bar Dege Division Gulu Municipality",suite:"Airfield Road",city:"Gulu District",country:"Uganda",crossStreet:"",postalCode:"",state:""}},{type:"Feature",geometry:{type:"Point",coordinates:[32.59136,.341677]},properties:{phoneFormatted:"xxxxxxxxxx",phone:"xxxxxxxxxx",suite:"The Wildlife Tower, Ground Floor",address:"31 Kanjokya Street",city:"Kampala",country:"Uganda",crossStreet:"",postalCode:"",state:""}},{type:"Feature",geometry:{type:"Point",coordinates:[103.84085,1.279358]},properties:{phoneFormatted:"xxxxxxxxxx",phone:"xxxxxxxxxx",suite:"",address:"30 Bukit Pasoh Rd",city:"Singapore",country:"",crossStreet:"",postalCode:"089844",state:""}}]};buildOfficeList(offices),mapboxgl.accessToken="pk.eyJ1IjoiZHdlbGNvbWUiLCJhIjoiY2p6MXNkdmZiMGF3OTNibzFoMm1ocG05cSJ9.xZ8njmOGIVM4sLRiit4xdg";var map=new mapboxgl.Map({container:"map",style:"mapbox://styles/dwelcome/cjz1t5chs2trc1cqmuyt3ut8d",center:[-24.547817,36.980944],zoom:1});function flyToStore(e){map.flyTo({center:e.geometry.coordinates,zoom:11.5})}function flyToDefault(){map.flyTo({center:[-24.547817,36.980944],zoom:1});var e=document.getElementsByClassName("mapboxgl-popup");e[0]&&e[0].remove()}function createPopUp(e){removePopup();new mapboxgl.Popup({closeOnClick:!1}).setLngLat(e.geometry.coordinates).setHTML('<h6 class="bold">Samasource<h6><h6>'+e.properties.city+"</h6>").addTo(map)}function removePopup(){var e=document.getElementsByClassName("mapboxgl-popup");e[0]&&e[0].remove()}function bombActive(){var e=document.getElementsByClassName("active");e[0]&&e[0].classList.remove("active")}function buildOfficeList(e){for(i=0;i<e.features.length;i++){var t=e.features[i].properties,o=document.getElementById("listings").appendChild(document.createElement("div"));o.className="locations__item",o.id="listing-"+i;var a=o.appendChild(document.createElement("a"));a.href="javascript:void();",a.className="locations__office-link",a.dataPosition=i,a.innerHTML='<span class="locations__office-title">'+t.city+'</span><?xml version="1.0" encoding="utf-8"?>\n            \x3c!-- Generator: Adobe Illustrator 23.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                 width="20px" height="20px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">\n            <path class="st0" d="M5.7,20c-0.3,0-0.7-0.1-0.9-0.4c-0.5-0.5-0.5-1.3,0-1.8l7.8-7.8L4.7,2.2c-0.5-0.5-0.5-1.3,0-1.8\n                c0.5-0.5,1.3-0.5,1.8,0l8.7,8.7c0.5,0.5,0.5,1.3,0,1.8l-8.7,8.7C6.3,19.9,6,20,5.7,20z"/>\n            </svg>',a.addEventListener("click",(function(t){var o=e.features[this.dataPosition];flyToStore(o),createPopUp(o);var a=document.getElementsByClassName("active");a[0]&&a[0].classList.remove("active"),this.parentNode.classList.add("active")}));var r=o.appendChild(document.createElement("div"));r.className="locations__details";var s=r.appendChild(document.createElement("h6")),n=r.appendChild(document.createElement("h6")),x=r.appendChild(document.createElement("h6"));r.appendChild(document.createElement("h6"));t.suite&&(s.innerHTML+=t.suite),n.innerHTML+=t.address,x.innerHTML+=t.city,t.state&&(x.innerHTML+=", "+t.state),t.postalCode&&(x.innerHTML+=" "+t.postalCode),x.innerHTML+=", "+t.country}}map.addControl(new mapboxgl.NavigationControl({showCompass:!1})),map.on("load",(function(e){map.addSource("places",{type:"geojson",data:offices})})),offices.features.forEach((function(e,t){var o=document.createElement("div");o.className="map-baby__marker",o.id="marker-"+t,new mapboxgl.Marker(o,{offset:[0,-23]}).setLngLat(e.geometry.coordinates).addTo(map),o.addEventListener("click",(function(o){flyToStore(e),createPopUp(e);var a=document.getElementsByClassName("active");o.stopPropagation(),a[0]&&a[0].classList.remove("active"),document.getElementById("listing-"+t).classList.add("active")})),o.addEventListener("mouseenter",(function(t){createPopUp(e)}))})),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),map.on("click",(function(e){var t=map.queryRenderedFeatures(e.point,{layers:["locations"]});if(t.length){var o=t[0];flyToStore(o),createPopUp(o),bombActive();for(var a=o.properties.address,r=0;r<stores.features.length;r++)stores.features[r].properties.address===a&&(selectedFeatureIndex=r);document.getElementById("listing-"+selectedFeatureIndex).classList.add("active")}})),window.onload=function(){document.getElementById("globe").onclick=function(){flyToDefault(),bombActive()}};
>>>>>>> Stashed changes