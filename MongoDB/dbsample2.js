var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

//connect away
MongoClient.connect('mongodb://Node305-alexng88536444.codeanyapp.com:9999/test', function(err, db) {
  if (err) throw err;
  console.log("Connected to Database");

  //simple json record
	var document = {name:"David", title:"About MongoDB"};
  
	//insert record
	db.collection('test').insert(document, function(err, records) {
		if (err) throw err;
		console.log("Record added as "+records[0]._id);
	});
});