mapboxgl.accessToken =
  "pk.eyJ1IjoiZGlhbmF2aWxlIiwiYSI6ImNqaWZ0bm1ycDEwZmczcXFsYTBpOXVtMTgifQ.aLCSo3xuIkz9e4RGzbFIpg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

export function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({

    accessToken: mapboxgl.accessToken

  });
  // console.log(directions.container.parentNode)
  
  map.addControl(directions, "top-left");
  
  console.log(directions.container.lastChild);

  var apple =()=>{

return decode;

  }

}
