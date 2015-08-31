module.exports = function(app) {
    var api = '/api/';
    var data = '/../data/';
    var four0four = require('../utils/404')();
    // Database
    var mongo = require('mongodb');
    var db = require('monk')('localhost:27017/test');

    // CRUD For GPS Input
    app.get(api + 'allGps', getRecords);
    app.post(api + 'gps', addRecord);

    app.get(api + '*', four0four.notFoundMiddleware);



  /**
  *   Functions
  **/
    function getRecords(req, res, next){
      var msg = 'Records not found ';
      try {
        var records = db.get('records');
        if(records){
          records.find({}, {}, function(err, docs){
            if(err) return done(err);
            res.send(docs);
          });
        } else {
          four0four.send404(req, req, msg);
        }
      }
      catch (ex) {
            four0four.send404(req, res, msg + ex.message);
        }
    }

    function addRecord(req, res, next){
      try {
        var records  = db.get('records');
        if(records){
          records.insert({name: 'test'});
          res.send('Insert into db');
        }
        else {
          four0four.send404(req, req, msg);
        }
      }
      catch (ex){
        four0four.send404(req, res, msg + ex.message);
      }
    }
};
