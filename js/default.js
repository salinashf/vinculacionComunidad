yepnope([
    {
        test : (navigator.appVersion.indexOf("MSIE") != -1  && parseFloat(navigator.appVersion.split("MSIE")[1]) < 9),
        // Load for IE < 9
        yep : [
            './lib/flotr2/flotr2.ie.min.js'
        ]
    },
    './lib/flotr2/flotr2.min.js',
    './lib/codemirror/lib/codemirror.js',
    './lib/codemirror/mode/javascript/javascript.js',
    './lib/beautify.js',
    './lib/randomseed.js',
    './lib/jquery-1.7.1.min.js',
    './lib/jquery.ba-hashchange.min.js',
    {complete : function () {

            alert("Pruebas!!");
            var
                container = document.getElementById('drawnID'),

                d1 = [],
                d2 = [],
                d3 = [],
                data,
                graph, i;

            // Data Generation
            for (i = 0; i < 15; i += 0.5) {
                d1.push([i, i + Math.sin(i+Math.PI)]);
                d2.push([i, i]);
                d3.push([i, 15-Math.cos(i)]);
            }

            data = [
                { data : d1, label :'x + sin(x+&pi;)' , mouse : { track : true }  },
                { data : d2, label :'x' ,mouse : { track : true } },
                { data : d3, label :'15 - cos(x)B' }
            ];


            // This function prepend each label with 'y = '
            function labelFn (label) {
                return 'y = ' + label;
            }
            // Draw graph
            graph = Flotr.draw(container, data, {
                legend : {
                    position : 'se',            // Position the legend 'south-east'.
                    labelFormatter : labelFn,   // Format the labels.
                    backgroundColor : '#D2E8FF' // A light blue background color.
                },
                HtmlText : true,
                mouse : {
                    track           : true, // Enable mouse tracking
                    lineColor       : 'purple',
                    relative        : true,
                    position        : 'ne',
                    sensibility     : 1,
                    trackDecimals   : 2,
                    trackFormatter  : function (o) { return 'x = ' + o.x +', y = ' + o.y; }
                },
                crosshair : {
                    mode : 'xy'
                }
            });
        }
    }
]);



