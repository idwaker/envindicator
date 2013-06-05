$(document).ready(function(){

    var c = $('#map');
    c.height(c.width()*.5);

    var map = Kartograph.map('#map');
    //var paper;

    //console.log(map);
    map.loadMap('/static/nepal.svg', function (map) {
        map.loadCSS('mapstyle.css', function () {
            //map.addLayer('graticule');
            map.addLayer('mygrat');
            map.addLayer('nepal');
            //map.addLayer('marker');
            console.log(map.getLayer('nepal'));
        });
        
        //console.log(map.getLayer('nepal').getPathsData());
        //map.addSymbols({
        //    type: Kartograph.Label,
        //    data: map.getLayer('nepal').getPathsData(),
        //    location: function(d) {
        //        console.log(d);
        //        //return 'nepal.' + d.id;
        //    },
        //    text: function(d) {
        //        //return d.name;
        //    }
        //});
    }, { zoom : 1.2 });
    
    

    //var data = {
    //    population : 26494504 ,
    //    maize : 1855180,
    //    paddy : 4023820,
    //    wheat : 1556540
    //}
    //var ratio = 100000;
    //var personNumber = Math.ceil(data.population/1000000);
    //var maizeNumber = Math.ceil((data.maize)/ratio);
    //var paddyNumber = Math.ceil((data.paddy)/ratio);
    //var wheatNumber = Math.ceil((data.wheat)/ratio);
        //console.log(paddyNumber);

/*
    var map = Kartograph.map('#map');
    console.log(map);
    map.loadMap('images/rice.svg', function (){

    },
    {zoom : 2});
*/
    //$('#map').append("<svg:image xlink:href='/images/image.svg' x='20' y='20' width='20' height='20'/>");
    //var w = 900;
    //var h = 400;
    //var x = 120;
    //var y = 150;
    //var paper = Raphael(x, y, w, h);
    //  var paper = map;
    //var i;
    //map.addGeoPath([85.4, 27.7]);
    //map.addGeoPath("M41.994,97.896l0.793-8.494c0.149-0.77,0.993,0.103,2.227,0.343l0,0c1.223,0.237,2.343-0.252,2.193,0.517l0,0l-2.271,7.993");
    //map.addSymbols({
    //    type: Kartograph.Label,
    //    data: [{ name: 'Kathmandu', lon: 10, lat: 10}],
    //    location: function (d) { return [d.lon, d.lat] },
    //    text: function (d) { return d.name }
    //});
    //for(i=0 ; i< paddyNumber ; i++){
    //    paper.setStart();
    //    var path1 = paper.path("M41.994,97.896l0.793-8.494c0.149-0.77,0.993,0.103,2.227,0.343l0,0c1.223,0.237,2.343-0.252,2.193,0.517l0,0l-2.271,7.993");
    //    var path2 = paper.path("M43.656,70.421c-5.536-3.923-4.203-8.146-4.203-8.146c-1.062,1.375-2.019,14.992,4.307,16.223C46.591,79.048,49.882,74.813,43.656,70.421z");
    //    var path3 = paper.path("M45.747,60.675c-3.933-5.524-1.279-9.071-1.279-9.071c-1.455,0.943-6.858,13.482-1.294,16.735C45.664,69.793,50.167,66.884,45.747,60.675z");
    //    var path4 = paper.path("M50.012,52.45c-3.304-5.917-0.269-9.154-0.269-9.154c-1.553,0.78-8.305,12.634-3.134,16.481C48.923,61.5,53.714,59.117,50.012,52.45z");
    //    var path5 = paper.path("M56.32,46.938c-3.043-6.056,0.131-9.157,0.131-9.157c-1.585,0.711-8.848,12.26-3.85,16.C54.838,55.932,59.729,53.76,56.32,46.938z");
    //    var path6 = paper.path("M63.3,42.187c-0.549-5.82,2.974-7.319,2.974-7.319c-1.498,0.076-10.953,7.083-8.209,11.919C59.291,48.95,63.902,48.737,63.3,42.187z");
    //    var path7 = paper.path("M71.455,39.514c2.521-5.274,6.313-4.751,6.313-4.751c-1.322-0.705-13.035,0.447-13.166,6.006C64.541,43.255,68.605,45.442,71.455,39.514z");
    //    var path8 = paper.path("M80.243,37.431c2.94-3.04,5.422-1.811,5.422-1.811c-0.746-0.786-9.046-2.687-10.414,1.097C74.641,38.41,76.926,40.844,80.243,37.431z");
    //    var path9 = paper.path("M50.174,79.214c6.23,1.647,11.292-11.024,10.942-12.726c0,0-0.642,4.382-7.339,5.501C46.269,73.23,47.379,78.475,50.174,79.214z")
    //    var path10 = paper.path("M41.851,79.701c-5.536-3.924-4.203-8.146-4.203-8.146c-1.063,1.377-2.019,14.992,4.307,16.223C44.787,88.328,48.077,84.094,41.851,79.701z");
    //    var path11 = paper.path("M48.758,89.102c6.325,1.229,10.534-11.754,10.073-13.428c0,0-0.351,4.414-6.959,5.977C44.462,83.391,45.92,88.548,48.758,89.102z");
    //    var path12 = paper.path("M49.996,70.188c5.673,3.06,13.557-8.088,13.613-9.817c0,0-1.648,4.11-8.418,3.627C47.596,63.458,47.451,68.814,49.996,70.188z");
    //    var path13 = paper.path("M51.809,61.857c4.756,4.348,15.111-4.531,15.59-6.199c0,0-2.605,3.592-9.045,1.464C51.111,54.755,49.672,59.907,51.809,61.857z");
    //    var path14 = paper.path("M58.527,55.18c4.615,4.497,15.252-4.046,15.781-5.697c0,0-2.719,3.505-9.088,1.173C58.061,48.057,56.457,53.16,58.527,55.18z");
    //    var path15 = paper.path("M64.225,48.048c2.869,4.875,13.852,0.092,14.682-1.184c0,0-3.111,2.343-7.969-1.104C65.471,41.907,62.936,45.859,64.225,48.048z");
    //    var path16 = paper.path("M70.93,44.099c2.713,4.964,13.842,0.537,14.713-0.712c0,0-3.187,2.242-7.931-1.359C72.372,38,69.711,41.87,70.93,44.099z");
    //    var path17 = paper.path("M78.119,41.728c2.029,3.716,10.359,0.402,11.014-0.533c0,0-2.385,1.678-5.938-1.017C79.199,37.163,77.207,40.059,78.119,41.728z");
    //    var path18 = paper.path("M92.719,38.228c-0.884-0.61-9.469-4.65-9.646-0.13S92.719,38.228,92.719,38.228");
    //    var paddy = paper.setFinish();
    //
    //    paddy.attr('fill' , '#0B763C')
    //    paddy.attr('stroke-width' , 0);
    //    var randomNumber = Math.random() * h;
    //    paddy.transform('s0.2');
    //    paddy.transform('t'+(x + (w/paddyNumber)*i)+', '+ (randomNumber-y) );
    //}
    //
    //for(i=0 ; i< wheatNumber ; i++){
    //    paper.setStart();
    //    var path1 = paper.path("M17.34,47.3l-0.655-6.591c0-0.607,0.773-0.068,1.748-0.068l0,0c0.967,0,1.749-0.539,1.749,0.068l0,0l-0.547,6.428");
    //    var path2 = paper.path("M15.138,26.968c-4.801-2.169-4.411-5.586-4.411-5.586c-0.606,1.206,0.683,11.726,5.688,11.726C18.653,33.105,20.534,29.393,15.138,26.968z");
    //    var path3 = paper.path("M15.11,19.988c-4.551-2.051-4.181-5.29-4.181-5.29c-0.574,1.14,0.647,11.116,5.392,11.116C18.443,25.814,20.226,22.292,15.11,19.988z");
    //    var path4 = paper.path("M15.578,14.531c-3.684-1.654-3.385-4.28-3.385-4.28c-0.465,0.925,0.524,8.994,4.365,8.994C18.276,19.245,19.72,16.401,15.578,14.531z");
    //    var path5 = paper.path("M16.055,9.051c-3.398-1.526-3.122-3.949-3.122-3.949c-0.429,0.853,0.484,8.297,4.027,8.297C18.544,13.399,19.875,10.775,16.055,9.051z");
    //    var path6 = paper.path("M21.191,32.98c5.004,0,6.288-10.519,5.688-11.725c0,0,0.389,3.417-4.417,5.586C17.072,29.268,18.947,32.98,21.191,32.98z");
    //    var path7 = paper.path("M14.535,33.454c-4.801-2.17-4.411-5.586-4.411-5.586c-0.606,1.206,0.683,11.725,5.688,11.725C18.05,39.593,19.931,35.879,14.535,33.454z");
    //    var path8 = paper.path("M21.191,39.593c5.004,0,6.288-10.519,5.688-11.725c0,0,0.389,3.416-4.417,5.586C17.072,35.879,18.947,39.593,21.191,39.593z");
    //    var path9 = paper.path("M20.473,25.639c4.22,0,5.302-8.876,4.797-9.891c0,0,0.328,2.881-3.726,4.707C16.998,22.504,18.579,25.639,20.473,25.639z")
    //    var path10 = paper.path("M20.575,19.355c3.935,0,4.942-8.268,4.473-9.216c0,0,0.305,2.691-3.474,4.386C17.335,16.441,18.811,19.355,20.575,19.355z");
    //    var path11 = paper.path("M20.246,13.884c3.197,0,4.017-6.718,3.634-7.488c0,0,0.248,2.187-2.823,3.563C17.614,11.516,18.812,13.884,20.246,13.884z");
    //    var path12 = paper.path("M18.86,0.887c-0.503,0.793-3.736,8.431,0.217,8.431C23.032,9.317,18.86,0.887,18.86,0.887");
    //    var path14 = paper.path("");
    //    var path15 = paper.path("");
    //    var path16 = paper.path("");
    //    var path17 = paper.path("");
    //    var path18 = paper.path("");
    //    var wheat = paper.setFinish();
    //
    //    wheat.attr('fill' , '#925223')
    //    wheat.attr('stroke-width' , 0);
    //    var randomNumber = Math.random() * h;
    //    wheat.transform('s0.2');
    //    wheat.transform('t'+(x + (w/wheatNumber)*i)+', '+ (randomNumber-y) );
    //}
    //
    //for(i=0 ; i< personNumber ; i++){
    //    paper.setStart();
    //    var circ1 = paper.circle(25.026 , 24.936 , 23.935);
    //    circ1.attr('fill' , '#376AB3');
    //
    //    var circ2 = paper.circle(14.123 , 19.376 , 4.529);
    //    circ2.attr('fill' , '#FFFFFF');
    //
    //    var circ3 = paper.circle(34.987 , 19.376 , 4.529);
    //    circ3.attr('fill' , '#FFFFFF');
    //
    //    var path1 = paper.path("M33.563,32");
    //    path1.attr('stroke' , '#FFFFFF');
    //    var path2 = paper.path("M15.93,31.916");
    //    path1.attr('stroke' , '#FFFFFF');
    //
    //    var path3 = paper.path("M16.123,25");
    //    path3.attr('fill' , '#FFFFFF');
    //    var path4 = paper.path("M16.123,31.884c0,0,7.798,9.262,17.768,0");
    //    var person = paper.setFinish();
    //
    //    person.attr('stroke-width' , '1' );
    //    person.attr('stroke-opacity' , 0.2);
    //    person.attr('fill-opacity' , 0.5);
    //    var randomNumber = Math.random() * h;
    //    person.transform('s0.2');
    //    person.transform('t'+(x + (w/personNumber)*i)+', '+ (randomNumber-y) );
    //}
    //paper.transform('r45');
    //paper.
});
