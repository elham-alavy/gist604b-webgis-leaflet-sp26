# WebGIS with Leaflet

**Student:** Elham Alavy
**Course:** GIST 604B – Open Source GIS
**Module:** Module 6 – WebGIS with Leaflet
**University of Arizona**

## Project Description
This repository contains a client-side WebGIS application built using HTML, JavaScript, and the Leaflet mapping library. I prepared and loaded three GeoJSON datasets (point, line, and polygon) representing spatial features in my area of interest, applied custom styling to each layer, and added interactive popups using feature attributes. The final web map is published live using GitHub Pages.

## Tools and Technologies
- Leaflet.js (web mapping library)
- HTML / CSS / JavaScript
- GeoJSON (point, line, polygon datasets)
- Node.js / npm (local development server)
- GitHub Pages (deployment)

## What I Did
- Prepared three GeoJSON datasets (point, line, and polygon geometries) in WGS84 (EPSG:4326), each with at least 10 features
- Built a Leaflet web map centered on my area of interest with a basemap, zoom controls, and a scale bar
- Loaded all three GeoJSON layers with custom styling applied to each
- Added interactive popups to at least one layer using feature attribute data
- Organized layers using Leaflet layer groups and published the final map on GitHub Pages

## How to View / Run
- **Live map:** [https://elham-alavy.github.io/gist604b-webgis-leaflet-sp26](https://elham-alavy.github.io/gist604b-webgis-leaflet-sp26)
- **Repository:** [https://github.com/elham-alavy/gist604b-webgis-leaflet-sp26](https://github.com/elham-alavy/gist604b-webgis-leaflet-sp26)
- To run locally: clone the repo, open a terminal, run `npm install`, then `npm start`, and open `http://localhost:8080` in your browser



## Repository Structure
    .
    ├── data/
    │   ├── your_point_layer.geojson
    │   ├── your_line_layer.geojson
    │   └── your_polygon_layer.geojson
    ├── js/
    │   └── your_js_file.js
    ├── css/
    │   └── your_css_file.css
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── .gitignore
    └── README.md

