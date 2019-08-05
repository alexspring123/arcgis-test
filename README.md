# arcGis地图Demo

## 安装esri-loader  
参考文章： https://github.com/Esri/angular-cli-esri-map  
参考demo：https://stackblitz.com/edit/angular-cli-esri-map2?file=src/main.ts  
- npm install --save esri-loader
- npm install --save @types/arcgis-js-api

## 修改tsconfig.app.json
在compilerOptions中增加"types": ["arcgis-js-api"]

ng build ---prod --aot --build-optimizer --base-href /arcgis/ --deploy-url /arcgis/