/*
 * GET customers listing.
 */
exports.list = function(req, res){
  req.getConnection(function(err,connection){
       
     connection.query('SELECT * FROM hiscores',function(err,rows)     {
            
        if(err)
           console.log("Error Selecting : %s ",err );
	   x = {code: 200, data: rows}     
            res.send(x);   
         });
       
    });
  
};
