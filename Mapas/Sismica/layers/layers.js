var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_IntensidadSsmicaEsperada_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://srvags.sgc.gov.co/arcprod/services/Amenaza_Sismica/Amenaza_Sismica/MapServer/WMSServer",
                              attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Intensidad Sísmica Esperada',
                            popuplayertitle: 'Intensidad Sísmica Esperada',
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_IntensidadSsmicaEsperada_1, 0]);
var format_VeredasToribio_2 = new ol.format.GeoJSON();
var features_VeredasToribio_2 = format_VeredasToribio_2.readFeatures(json_VeredasToribio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VeredasToribio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VeredasToribio_2.addFeatures(features_VeredasToribio_2);
var lyr_VeredasToribio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VeredasToribio_2, 
                style: style_VeredasToribio_2,
                popuplayertitle: 'VeredasToribio',
                interactive: true,
                title: '<img src="styles/legend/VeredasToribio_2.png" /> VeredasToribio'
            });
var format_Toribio_3 = new ol.format.GeoJSON();
var features_Toribio_3 = format_Toribio_3.readFeatures(json_Toribio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toribio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toribio_3.addFeatures(features_Toribio_3);
var lyr_Toribio_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toribio_3, 
                style: style_Toribio_3,
                popuplayertitle: 'Toribio',
                interactive: true,
                title: '<img src="styles/legend/Toribio_3.png" /> Toribio'
            });
var format_Fallas_4 = new ol.format.GeoJSON();
var features_Fallas_4 = format_Fallas_4.readFeatures(json_Fallas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fallas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fallas_4.addFeatures(features_Fallas_4);
var lyr_Fallas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fallas_4, 
                style: style_Fallas_4,
                popuplayertitle: 'Fallas',
                interactive: true,
                title: '<img src="styles/legend/Fallas_4.png" /> Fallas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_IntensidadSsmicaEsperada_1.setVisible(true);lyr_VeredasToribio_2.setVisible(true);lyr_Toribio_3.setVisible(true);lyr_Fallas_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_IntensidadSsmicaEsperada_1,lyr_VeredasToribio_2,lyr_Toribio_3,lyr_Fallas_4];
lyr_VeredasToribio_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPTOMPIO': 'DPTOMPIO', 'CODIGO_VER': 'CODIGO_VER', 'NOM_DEP': 'NOM_DEP', 'NOMB_MPIO': 'NOMB_MPIO', 'NOMBRE_VER': 'NOMBRE_VER', 'VIGENCIA': 'VIGENCIA', 'FUENTE': 'FUENTE', 'DESCRIPCIO': 'DESCRIPCIO', 'SEUDONIMOS': 'SEUDONIMOS', 'AREA_HA': 'AREA_HA', 'COD_DPTO': 'COD_DPTO', 'OBSERVACIO': 'OBSERVACIO', 'CONSEJE': 'CONSEJE', 'ORIG_FID': 'ORIG_FID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Toribio_3.set('fieldAliases', {'MpCodigo': 'MpCodigo', 'MpNombre': 'MpNombre', 'MpArea': 'MpArea', 'MpNorma': 'MpNorma', 'MpCategor': 'MpCategor', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'MpAltitud': 'MpAltitud', 'Restriccio': 'Restriccio', 'Depto': 'Depto', });
lyr_Fallas_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Tipo': 'Tipo', 'NombreFall': 'NombreFall', 'Comentario': 'Comentario', 'GlobalID': 'GlobalID', 'Shape__Len': 'Shape__Len', });
lyr_VeredasToribio_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPTOMPIO': 'TextEdit', 'CODIGO_VER': 'TextEdit', 'NOM_DEP': 'TextEdit', 'NOMB_MPIO': 'TextEdit', 'NOMBRE_VER': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FUENTE': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'SEUDONIMOS': 'TextEdit', 'AREA_HA': 'TextEdit', 'COD_DPTO': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'CONSEJE': 'TextEdit', 'ORIG_FID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Toribio_3.set('fieldImages', {'MpCodigo': 'TextEdit', 'MpNombre': 'TextEdit', 'MpArea': 'TextEdit', 'MpNorma': 'TextEdit', 'MpCategor': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'MpAltitud': 'Range', 'Restriccio': 'TextEdit', 'Depto': 'TextEdit', });
lyr_Fallas_4.set('fieldImages', {'OBJECTID': 'Range', 'Tipo': 'TextEdit', 'NombreFall': 'TextEdit', 'Comentario': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_VeredasToribio_2.set('fieldLabels', {'OBJECTID': 'no label', 'DPTOMPIO': 'no label', 'CODIGO_VER': 'no label', 'NOM_DEP': 'no label', 'NOMB_MPIO': 'no label', 'NOMBRE_VER': 'no label', 'VIGENCIA': 'no label', 'FUENTE': 'no label', 'DESCRIPCIO': 'no label', 'SEUDONIMOS': 'no label', 'AREA_HA': 'no label', 'COD_DPTO': 'no label', 'OBSERVACIO': 'no label', 'CONSEJE': 'no label', 'ORIG_FID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Toribio_3.set('fieldLabels', {'MpCodigo': 'no label', 'MpNombre': 'no label', 'MpArea': 'no label', 'MpNorma': 'no label', 'MpCategor': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'MpAltitud': 'no label', 'Restriccio': 'no label', 'Depto': 'no label', });
lyr_Fallas_4.set('fieldLabels', {'OBJECTID': 'no label', 'Tipo': 'no label', 'NombreFall': 'no label', 'Comentario': 'no label', 'GlobalID': 'no label', 'Shape__Len': 'no label', });
lyr_Fallas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});