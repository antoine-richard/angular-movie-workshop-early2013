var fs = require('fs');

module.exports = function() {

  function deserialize(data) {
    return JSON.parse(data);
  }


  return {

    /**
     *
     */
    list: function(req, res) {

      var file = 'data/'+req.params.resources+'.json';

      fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
          res.send(404);
        }
        res.send(deserialize(data));
      });

    },


    one: function(req, res) {



      console.log(req.params.resources)
      console.log(req.params.id)
      console.log(req.params)

      res.send("one");
      
    }

  }
}();
