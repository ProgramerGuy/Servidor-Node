console.log("Arrancando Servidor... :b");
var nombre = "Raul";

var basededatos = {
	usuario: "raul",
	password: "pass"
};

var express = require('express');
var web = express();
var server;
var parcero = require("body-parser");

web.use(parcero.urlencoded());



server = web.listen(process.env.PORT || 8080, function (req,res){
	console.log("Servidor Corriendo en el puerto " + process.env.PORT)

});

web.get("/", function (req, res){
	res.sendfile('public/form.html');
});

web.get("/prueba", function (req, res){
	res.send("Tu nombre es " +"<strong>" + req.query.nombre + "</strong>" +
		 " Y tu edad es " + req.query.edad) ;
});

web.post("/entrar", function (req, res){

	if(req.body.usuario == basededatos.usuario && req.body.contraseña == basededatos.password)
	{
		 res.sendfile("Portafolio/templates/portafolio.html");
		 console.log("Logeo del usuario: " + req.body.usuario);
	}
	else
	{
		res.send("Largate Vago!")
		console.log("Logeo erróneo con el usuario: " + req.body.usuario);
	}

});