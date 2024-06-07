const map = L.map('map').setView([campground.geometry.coordinates[0], campground.geometry.coordinates[1]], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([campground.geometry.coordinates[0], campground.geometry.coordinates[1]])
    .bindPopup(`<h6><b>${campground.title}</b></h6>${campground.location}`).openPopup()
    .addTo(map);
