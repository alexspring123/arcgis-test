import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri; // Esri TypeScript Types

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // The <div> where we will place the map
  @ViewChild('mapViewDiv') private mapViewEl: ElementRef;

  private _basemap = 'streets';
  private _zoom = 10;
  private _center: Array<number> = [0.1278, 51.5074];
  private _loaded = false;

  async initializeMap() {
    try {

      // Load the modules for the ArcGIS API for JavaScript
      const [EsriMap, EsriMapView, FeatureLayer] = await loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/layers/FeatureLayer'
      ]);

      // Configure the Map
      const mapProperties: esri.MapProperties = {
        basemap: this._basemap,
        // basemap: { baseLayers: [new FeatureLayer("http://192.168.25.2/ArcGIS/rest/services/RQDT/MapServer")] },
        layers: [new FeatureLayer({ url: "http://218.91.211.162:6080/arcgis/rest/services/CityLight1222/MapServer/2" })]
      };

      const map: esri.Map = new EsriMap(mapProperties);

      // Initialize the MapView
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: this._center,
        zoom: this._zoom,
        map: map
      };
      const mapView: esri.MapView = new EsriMapView(mapViewProperties);
      mapView.when(() => {
        console.log('loaded');
      });
    } catch (error) {
      console.log('EsriLoader: ', error);
    }
  }

  ngOnInit(): void {
    // Initialize MapView and return an instance of MapView
    this.initializeMap();
  }
}