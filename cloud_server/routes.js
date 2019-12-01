//const db=require('./config');
var bodyParser=require('body-parser');
module.exports=function(app){
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded( {extended: true}));
	var userData = {
		"price":0,
		"code":1,
		"id":"main",
		"product":"error",
		"info":"error"
		
		
	};
	app.post('/getproduct',function(req,res){
					res.status(200).json(userData);
		});

        app.post('/insert',function(req,res){
		
				userData["id"]="main",	
				userData["product"]= req.body.product,
				userData["info"]=req.body.info,
				userData["price"]=parseInt(req.body.price, 10),
				userData["code"]=1

				console.log(userData);
				res.status(200).json(userData);

			

	});
   }













/*
    app.post('/getproduct1',function(req,res){
			var appData = {};
			
					db.con.query('SELECT * FROM cart where id="main"', 
						function(err, rows, fields) {
							if (err) {
								//console.log(err);
											appData["product"] = "error";
											appData["info"] = "error";
										appData["price"] = 0;
										appData["code"] = 0;

								res.status(400).json(appData);
								console.log("Error Occured!");
							} 
							else {
				
										appData["product"] = rows[0].product;
										appData["info"] = rows[0].recommend;
									appData["price"] = rows[0].price;
									appData["code"] = 1;
										res.status(200).json(appData);
										console.log("product list fetched");
								
							}
						});
		});

        app.post('/insert1',function(req,res){
		var appData = {
			"error": 1,
			"data" :""
		};
		var userData = {
			"id":"main",
			"product": req.body.product,
			"recommended": req.body.recommend,
			"price":req.body.price

		}

		db.con.query('INSERT INTO cart SET ?', userData, function(err, rows, fields) {
			if (!err) {
				appData.error = 0;
				appData["data"] = "data inserted properly";
				res.json(appData);
			} 
			else {
				appData.error = 1;
				appData["data"] = "data not inserted";
				res.json(appData);
			}
		});

	});

app.post('/delete',function(req,res){
	var appData = {
			"error": 1,
			"data" :""
		};

		var Id = req.body.Id;
		db.con.query('delete from cart where Id = ?', Id,  function(err, rows, fields) {
			if (!err) {
				appData.error = 0;
				appData["data"] = "data deleted properly";
				res.json(appData);
			} 
			else {
				appData.error = 1;
				appData["data"] = "data not deleted";
				res.json(appData);
			}
		});

	});
}
*/