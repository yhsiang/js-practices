/*** main.js ***/

define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');

    // import Utility
    var Utility = require('famous/utilities/Utility');

    var AppView = require('views/AppView');

    // import SlideData
    var SlideData = require('data/SlideData');

    var mainContext = Engine.createContext();

    // simple Get request to the Picasa api with callback
    Utility.loadURL(SlideData.getUrl(), initApp);

    function initApp(data) {
        // parses out reponse data and retrieves array of urls
        data = SlideData.parse(data);

        // instantiates AppView with our url data
        var appView = new AppView({ data : data });

        mainContext.setPerspective(1000);
        mainContext.add(appView);
    }
});