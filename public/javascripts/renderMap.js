// const map = L.map('map').setView([campground.geometry.coordinates[0], campground.geometry.coordinates[1]], 13);
// L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}', {
// 	minZoom: 0,
// 	maxZoom: 20,
// 	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	ext: 'png'
// }).addTo(map);

// const marker = L.marker([campground.geometry.coordinates[0], campground.geometry.coordinates[1]])
//     .bindPopup(`<h6><b>${campground.title}</b></h6>${campground.location}`).openPopup()
//     .addTo(map);

mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: campground.geometry.coordinates,
  zoom: 13
});

const marker = new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
	.setPopup(
		new mapboxgl.Popup({offset: 25})
		.setHTML(
			`<h6><b>${campground.title}</b></h6>${campground.location}`
		)
	)
    .addTo(map);


