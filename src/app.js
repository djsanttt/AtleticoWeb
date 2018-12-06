const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const myConnection = require("express-myConnection");
const mysql = require("mysql");

// Configuracion
app.set("port", process.env.PORT || 3000);
app.set("view engine","ejs"); //Motor de vista o plantilla, en este caso ejs.
app.engine("html", require("ejs").renderFile); // Para poder usar extenciones html en vez de ejs.
app.set('views', path.join(__dirname,'views')); 

//Importando rutas
const rutas = require("./routes/rutas");

//Middlewares
app.use(morgan("dev"));

//Iniciar conexion al servidor con la base de datos (?)
app.use(myConnection(mysql, {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "TorneoNacional2019"
}, "single"));

//Routes
app.use("/",rutas); 


//Archivos estaticos
app.use(express.static(path.join(__dirname,"public")));

//Escuchando el servidor
//Para iniciar servidor abrir xamp sql y por consola npm run dev
//Para iniciar base de datos por consola mysql -u root -p

app.listen(app.get("port"), (err,req) => {
    if (err){
        req.send()
    }
    console.log("server on port", app.get("port"));
});