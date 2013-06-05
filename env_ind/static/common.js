$(document).ready(function(){

    var c = $('#map');
    c.height(c.width()*.5);

    var map = Kartograph.map('#map');
    //var paper;
    var latLongs = []
    for (var i=82; i<=88; i++) {
        if (i >= 82) {
            latLongs.push({ lon: i, lat: 27.9 })
        }
        if (i >= 83) {
            latLongs.push({ lon: i, lat: 27.5 }, { lon: i, lat: 27.6 },
                      { lon: i, lat: 27.7 }, { lon: i, lat: 27.8 })
        }
        if (i >= 85) {
            latLongs.push({ lon: i, lat: 27.4 }, { lon: i, lat: 27.3 },
                      { lon: i, lat: 27.2 }, { lon: i, lat: 27.1 },
                      { lon: i, lat: 27.0 })
        }
        
        if (i >= 86) {
            latLongs.push({ lon: i, lat: 26.9 }, { lon: i, lat: 26.8 },
                      { lon: i, lat: 26.7 })
        }
    }
    
    for (var i=82; i<=85; i++) {
        latLongs.push({ lon: i, lat: 28 }, { lon: i, lat: 28.1 },
                      { lon: i, lat: 28.2 }, { lon: i, lat: 28.3 },
                      { lon: i, lat: 28.4 }, { lon: i, lat: 28.5 })
    }
    
    for (var i=81; i<=84; i++) {
        latLongs.push({ lon: i, lat: 28.6 }, { lon: i, lat: 28.7 },
                      { lon: i, lat: 28.8 }, { lon: i, lat: 28.9 },
                      { lon: i, lat: 29.0 }, { lon: i, lat: 29.1 },
                      { lon: i, lat: 29.2 }, { lon: i, lat: 29.2 })
    }
    
    for (var i=81; i<=83; i++) {
        latLongs.push({ lon: i, lat: 29.3 }, { lon: i, lat: 29.4 },
                      { lon: i, lat: 29.5 }, { lon: i, lat: 29.6 })
    }
    
    for (var i=81; i<=82; i++) {
        latLongs.push({ lon: i, lat: 29.7 }, { lon: i, lat: 29.8 },
                      { lon: i, lat: 29.9 }, { lon: i, lat: 30.0 })
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
