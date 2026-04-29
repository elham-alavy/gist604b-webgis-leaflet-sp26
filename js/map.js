const parksLayerGroup = L.layerGroup();
const bikesLayerGroup = L.layerGroup();
const neighborhoodsLayerGroup = L.layerGroup();

const map = L.map('map', { center: [32.2226, -110.9747], zoom: 12 });

L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data: &copy; OpenStreetMap contributors | Map style: &copy; OpenTopoMap', maxZoom: 17
}).addTo(map);

L.control.scale({ imperial: true, metric: true }).addTo(map);

fetch('data/parks_points.geojson').then(r => r.json()).then(data => {
  const layer = L.geoJSON(data, {
    pointToLayer: (f, latlng) => L.circleMarker(latlng, {
      radius: 8, fillColor: '#2ecc71', color: '#27ae60', weight: 2, fillOpacity: 0.8
    }),
    onEachFeature: (f, l) => l.bindPopup(
      '<strong>' + f.properties.name + '</strong><br>Type: ' + f.properties.type + '<br>Amenities: ' + f.properties.amenities
    )
  }).addTo(map);
  parksLayerGroup.addLayer(layer);
});

fetch('data/bike_lines.geojson').then(r => r.json()).then(data => {
  const layer = L.geoJSON(data, {
    style: { color: '#e67e22', weight: 3, opacity: 0.8 },
    onEachFeature: (f, l) => l.bindPopup(
      '<strong>' + f.properties.name + '</strong><br>Surface: ' + f.properties.surface
    )
  }).addTo(map);
  bikesLayerGroup.addLayer(layer);
});

fetch('data/neighborhoods_polygons.geojson').then(r => r.json()).then(data => {
  const layer = L.geoJSON(data, {
    style: { color: '#8e44ad', weight: 2, fillColor: '#9b59b6', fillOpacity: 0.3 },
    onEachFeature: (f, l) => l.bindPopup(
      '<strong>' + f.properties.name + '</strong><br>Type: ' + f.properties.type + '<br>Population: ' + f.properties.population
    )
  }).addTo(map);
  neighborhoodsLayerGroup.addLayer(layer);
});

L.control.layers(null, {
  'Parks': parksLayerGroup,
  'Bike Lanes': bikesLayerGroup,
  'Neighborhoods': neighborhoodsLayerGroup
}, { collapsed: false }).addTo(map);