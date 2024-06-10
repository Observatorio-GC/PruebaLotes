 /* POPUPS */

   function agregarPopupPrecios(feature, layer) { 
        if (feature.properties && feature.properties.PrecioUSD) { 
                layer.bindPopup( "<strong>" + feature.properties.PrecioUSD + "</strong>"); 
        } 
    }

    function agregarPopupDistritosDepartamentales(feature, layer) {
        if (feature.properties && feature.properties.Nombre_1) {
            layer.bindPopup("<strong>" + feature.properties.Nombre_1 + "</strong><br/>" + feature.properties.Area_km2);
        }
    }

    function agregarPopupespaciosverdes(feature, layer) {
        if (feature.properties && feature.properties.NOMBRE) {
            layer.bindPopup("<strong>" + feature.properties.Descriptio + "</strong><br/>" + feature.properties.NOMBRE);
        }
    }

    function agregarPopupbarrios(feature, layer) {
        if (feature.properties && feature.properties.Nombre_1) {
            layer.bindPopup("<strong>" + feature.properties.Nombre_1 + "</strong><br/>" + feature.properties.Descrip + "</strong><br/>");
        }
    }

    function agregarPopupBarriosConsolidados(feature, layer) {
        if (feature.properties && feature.properties.Nombre_1) {
            layer.bindPopup("<strong>" + feature.properties.Nombre_1 + "</strong>");
        }
    }

    function agregarPopupciclovias(feature, layer) {
        if (feature.properties && feature.properties.Distancia) {
            layer.bindPopup("<strong>" + feature.properties.TIPO_2 + "</strong><br/>" + feature.properties.Distancia);
        }
    }

    function agregarPopuplote(feature, layer) {
        if (feature.properties && feature.properties.padron) {
            layer.bindPopup("Padron: <strong>" + feature.properties.padron + "</strong><br/>" + "Superficie: <strong>" + feature.properties.sup + "</strong><br/>" + "Dirección: <strong>" + feature.properties.direccion + "</strong><br/>" + "Zonificación: <strong>" + feature.properties.zonific);
        }
    }

/* ESTILOS */

function estiloDistritosDepartamentales() {
    Depa.eachLayer(function (featureInstanceLayer) {
        var id_feature = featureInstanceLayer.feature.properties['qc_id'];
        if (id_feature == 0) {
            color_actual = '#d48871';
        } else if (id_feature == 1) {
            color_actual = '#e3f1df';
        } else if (id_feature == 2) {
            color_actual = '#f1dfed';
        } else if (id_feature == 3) {
            color_actual = '#adddf7';
        } else if (id_feature == 4) {
            color_actual = '#fcfacf';
        } else if (id_feature == 5) {
            color_actual = '#d4bd8b';
        } else if (id_feature == 6) {
            color_actual = '#427710';
        } else if (id_feature == 7) {
            color_actual = '#ffa400';
        } else if (id_feature == 8) {
            color_actual = '#a028ad';
        }
        featureInstanceLayer.setStyle({
            color: color_actual, fillOpacity: 0.20
        });
    });
}    