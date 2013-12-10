var express = require("express")
  , jr = require('./services/jsonResources');

var classeApp = function() {

  var port = process.env.PORT || 3000;
  var app = express();

  function initialize() {
    app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
    app.use(express.logger('dev'));
    app.use(app.router);
  }

  function dynamicRoutes() {

    app.get('/:resources/:id', jr.one);
    app.get('/:resources', jr.list);


    
    //app.get(jsonPruner.pathRegex, jsonPruner.handleRequest);

  }
  
  function staticRoutes() {
    app.use(express.static('public'));

    app.use('/data', express.static('data'));
    //TODO: revoir url data + deplacer ici les photos
  }

  function start() {
    app.listen(port, function() {
      console.log("Listening on " + port);
    });
  }

  return {
    run: function() {
      initialize();
      dynamicRoutes();
      staticRoutes();
      start();
    }
  };

}();

classeApp.run();
