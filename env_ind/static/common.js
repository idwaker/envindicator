$(document).ready(function(){

    var c = $('#map');
    c.height(c.width()*.5);

    var map = Kartograph.map('#map');
    //var paper;
    var latLongs = []
    longs = [
            81.0, 81.2, 81.4, 81.6, 81.8,
             82.0, 82.2, 82.4, 82.6, 82.8,
             83.0, 83.2, 83.4, 83.6, 83.8,
             84.0, 84.2, 84.4, 84.6, 84.8,
             85.0, 85.2, 85.4, 85.6, 85.8,
             86.0, 86.2, 86.4, 86.6, 86.8,
             87.0, 87.2, 87.4, 87.6, 87.8,
             88.0
             ]
    for (var i=0; i<longs.length; i++) {
        if (longs[i] >= 82) {
            latLongs.push({ lon: longs[i], lat: 27.9 })
        }
        if (longs[i] >= 83) {
            latLongs.push({ lon: longs[i], lat: 27.5 }, { lon: longs[i], lat: 27.6 },
                      { lon: longs[i], lat: 27.7 }, { lon: longs[i], lat: 27.8 })
        }
        if (longs[i] >= 85) {
            latLongs.push({ lon: longs[i], lat: 27.4 }, { lon: longs[i], lat: 27.3 },
                      { lon: longs[i], lat: 27.2 }, { lon: longs[i], lat: 27.1 },
                      { lon: longs[i], lat: 27.0 })
        }
        
        if (longs[i] >= 86) {
            latLongs.push({ lon: longs[i], lat: 26.9 }, { lon: longs[i], lat: 26.8 },
                      { lon: longs[i], lat: 26.7 })
        }
        
        if (longs[i] > 82 && longs[i] <= 85) {
            latLongs.push({ lon: longs[i], lat: 28 }, { lon: longs[i], lat: 28.1 },
                      { lon: longs[i], lat: 28.2 }, { lon: longs[i], lat: 28.3 },
                      { lon: longs[i], lat: 28.4 }, { lon: longs[i], lat: 28.5 })
        }
        
        if (longs[i] > 81 && longs[i] <= 84) {
            latLongs.push({ lon: longs[i], lat: 28.6 }, { lon: longs[i], lat: 28.7 },
                      { lon: longs[i], lat: 28.8 }, { lon: longs[i], lat: 28.9 },
                      { lon: longs[i], lat: 29.0 }, { lon: longs[i], lat: 29.1 },
                      { lon: longs[i], lat: 29.2 }, { lon: longs[i], lat: 29.2 })
        }
        
        if (longs[i] >= 81 && longs[i] <= 83) {
            latLongs.push({ lon: longs[i], lat: 29.3 }, { lon: longs[i], lat: 29.4 },
                      { lon: longs[i], lat: 29.5 }, { lon: longs[i], lat: 29.6 })
        }
        
        if (longs[i] >= 81 && longs[i] <= 82) {
            latLongs.push({ lon: longs[i], lat: 29.7 }, { lon: longs[i], lat: 29.8 },
                      { lon: longs[i], lat: 29.9 }, { lon: longs[i], lat: 30.0 })
        }
    }
    
    //console.log(latLongs.length);
    

    //console.log(map);
    map.loadMap('/static/nepal.svg', function (map) {
        map.loadCSS('/static/mapstyle.css', function () {
            //map.addLayer('graticule');
            //map.addLayer('mygrat');
            map.addLayer('nepal');
            //map.addLayer('marker');
            //console.log(map.getLayer('mygrat'));
            
            
            
        });
    }, { zoom : 1.2 });
    
    
    function load_forest_data(percent) {
        var count = parseInt((latLongs.length * percent) / 100);
        map.addSymbols({
            type: Kartograph.Bubble,
            data: shuffle(latLongs).slice(0, count),
            location: function(d) { return [d.lon, d.lat] },
            radius: function(d) { return 6; },
            style: 'fill:green',
            title: function(d) { return ''; }
        });
    }
    
    function load_agro_data(percent) {
        var count = parseInt((latLongs.length * percent) / 100);
        map.addSymbols({
            type: Kartograph.Bubble,
            data: shuffle(latLongs).slice(0, count),
            location: function(d) { return [d.lon, d.lat] },
            radius: function(d) { return 6; },
            style: 'fill:blue',
            title: function(d) { return ''; }
        });
    }
    
    $('#year').on('change', function () {
        $.get('/visualize/getyear/' + $(this).val(), function (data) {
            //console.log(data['forest']);
            map.removeSymbols();
            load_forest_data(parseInt(data['forest']));
            load_agro_data(parseInt(data['agro']));
        });
    });
    
    $.get('/visualize/getyear/2004', function (data) {
        //console.log(data['forest']);
        load_forest_data(parseInt(data['forest']));
        load_agro_data(parseInt(data['agro']));
    });
});

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
