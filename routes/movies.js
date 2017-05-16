var express = require('express');
var router=express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('saru', 'root', 'saranya123',{
	host:"127.0.0.1",
	port:3306,
	dialect:"mariadb"
})
 

var User = sequelize.define('task1', {
  "title": Sequelize.STRING,
 "director" :Sequelize.STRING,
  "genre": Sequelize.STRING
},{timestamps:false});

router.post('/',function(req,res,next){

 User.create({"id":req.body.id,"title":req.body.title,"director":req.body.director,"genre":req.body.genre}).  
    then(function(jane) {  
        res.json(jane);  
    }, function(error) {  
        res.send(error);  
    });  
});

router.get('/:title',function(req,res,next){
	console.log("hi")
	User.findAll({
		where:{
			title: req.params.title
		}
	}).then(function(jane) {  
        res.json(jane);  
    }, function(error) {  
        res.send(error); 
    });  
});

router.delete('/:title',function(req,res,next){
	console.log("hi")
	User.destroy({
		where:{
			title: req.params.title
		}
	}).then(function(jane) {  
        res.json(jane);  
    }, function(error) {  
        res.send(error); 
    });  
});

router.put('/:title',function(req,res,next){
	console.log("hi")
	  User.find({
    where:{title:req.params.title}
  
}).then(function(jane) {
  if(jane){
	  jane.update({
    genre: 'horror'
  })
  .then(function()
  {
	  console.log('success')
  })
  }
});
});

module.exports = sequelize;
module.exports = User;
module.exports = router;