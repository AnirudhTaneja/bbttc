const path = require('path');
const mysql = require('mysql');

module.exports = function(app,connection){
    app.get('/', function(req,res){
        // res.send('Hello from the world')
        connection.query('select * from member', function(err, data){
            (err)?res.send(err):res.json({member:data});
        });
});
};