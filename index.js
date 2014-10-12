console.log("Arrancando Servidor...");
var nombre = "Raul";

var basededatos = {
	usuario: "raul",
	password: "pass"
};

var express = require('express');
var web = express();
var server;
var parcero = require("body-parser");
var http = require("http");

web.use(parcero.urlencoded());

server = web.listen(8080, function (req,res){
	console.log("Servidor Corriendo.... :D")

});

web.get("/public/index", function (req, res){
	res.sendfile('form.html');
});

web.get("/prueba", function (req, res){
	res.send("Tu nombre es " +"<strong>" + req.query.nombre + "</strong>" +
		 " Y tu edad es " + req.query.edad) ;
});

web.post("/entrar", function (req, res){

	if(req.body.usuario == basededatos.usuario && req.body.contraseña == basededatos.password)
	{
		 res.send("Entraste al formulario secreto");
		 console.log("Logeo del usuario: " + req.body.usuario);
	}
	else
	{
		res.send("Largate Vago!")
	}

});